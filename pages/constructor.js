let topbar = document.getElementById('topbar');
let main = document.getElementById('main');
let imageIndex = 0;

function addText(text, addend) {
    let p = document.createElement('p');
    p.innerHTML = text;
    addend.append(p);
}

function addSection(section) {
    let sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';

    let sectionH1 = document.createElement('h1');
    sectionH1.innerHTML = section.title;
    sectionDiv.append(sectionH1);

    for (let i = 0; i < section.main.length; i++) {
        addText(section.main[i], sectionDiv);
    }

    main.append(sectionDiv);
}

if (data.topbar != undefined) {
    for (let i = 0; i < data.topbar.length; i++) {
        let topbarDiv = document.createElement('div');
        let topbarA = document.createElement('a');

        topbarA.href = data.topbar[i].link;
        topbarA.innerHTML = data.topbar[i].name;

        topbarDiv.append(topbarA);
        topbar.append(topbarDiv);
    }
}

if (data.name != undefined) {
    let nameP = document.createElement('p');
    nameP.id = 'gallery-title';
    nameP.innerHTML = data.name;
    main.append(nameP);
}

if (data.main != undefined) {
    for (let i = 0; i < data.main.length; i++) {
        switch (typeof data.main[i]) {
            case 'string':
                addText(data.main[i], main);
                main.append(document.createElement('br'));
                break;
            case 'function':
                data.main[i]();
                break;
        }
    }        
}

if (data.pics != undefined) {
    let volumeMain = document.createElement('div');
    let volumeBottom = document.createElement('div');
    let volumeLeft = document.createElement('div');
    let volumePage = document.createElement('p');
    let volumeRight = document.createElement('div');

    volumeMain.id = 'gallery-main';
    volumeBottom.id = 'gallery-bottom';
    volumeLeft.id = 'gallery-left';
    volumePage.id = 'gallery-page';
    volumeRight.id = 'gallery-right';

    volumeLeft.innerHTML = '◀';
    volumeRight.innerHTML = '▶';
    
    volumeBottom.append(volumeLeft, volumePage, volumeRight);
    volumeMain.append(volumeBottom);

    for (let i = 1; i < data.pics + 1; i++) {
        let volumePanel = document.createElement('div');
        volumePanel.className = "gallery-panel";
        volumePanel.style.display = "none";
    
        let volumeImage = document.createElement('img');
        volumeImage.src = `./pages/${page}/${i}.jpg`;
        
        volumePanel.append(volumeImage);
        volumeMain.append(volumePanel);
    }
    
    let volumePanels = document.getElementsByClassName('gallery-panel');
    main.append(volumeMain);

    function updateImage(index) {
        volumePanels[imageIndex].style.display = "none";
        imageIndex += index;
        if (imageIndex >= data.pics) imageIndex = 0;
        if (imageIndex < 0) imageIndex = data.pics - 1; 
        volumePanels[imageIndex].style.display = "block";
        volumePage.innerHTML = `${imageIndex + 1} / ${data.pics}`;
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
    
    volumePage.innerHTML = `1 / ${data.pics}`;
    volumePanels[0].style.display = 'block';
}
