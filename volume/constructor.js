let volumeBody = document.getElementById('volume-main');
let imageIndex = 0;

document.getElementById('volume-title').innerHTML = data.name;

for (let i = 1; i < data.picLength + 1; i++) {
    let volumePanel = document.createElement('div');
    volumePanel.className = "volume-panel";
    volumePanel.style.display = "none";

    let volumeImage = document.createElement('img');
    volumeImage.src = `./${volume}/${i}.jpg`;
    
    volumePanel.append(volumeImage);
    volumeBody.append(volumePanel);
}

let volumeLeft = document.getElementById('volume-left');
let volumeRight = document.getElementById('volume-right');
let volumePanels = document.getElementsByClassName('volume-panel');

function updateImage(index) {
    volumePanels[imageIndex].style.display = "none";
    imageIndex += index;
    if (imageIndex >= data.picLength) imageIndex = 0;
    if (imageIndex < 0) imageIndex = data.picLength - 1; 
    volumePanels[imageIndex].style.display = "block";
    document.getElementById('volume-page').innerHTML = `${imageIndex + 1} / ${data.picLength}`;
}

volumeLeft.onclick = () => {
    updateImage(-1);
};

volumeRight.onclick = () => {
    updateImage(1);
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') updateImage(e.key == 'ArrowLeft' ? -1 : 1);
});

document.getElementById('volume-page').innerHTML = `1 / ${data.picLength}`;
volumePanels[0].style.display = 'block';
