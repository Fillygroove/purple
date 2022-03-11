let data = {
    topbar: [{
        name: 'Main',
        link: '../'
    }],
    title: `Pokemon Purple Archive`,
    main: [
        `Hello world! This is a storage website for an old collection of comics I made. I've only archived the first one out of the ones I have so far.`,
        `I'm missing volumes 3 through volume 6, part 1. Those volumes were lost when my aunt and uncle had gotten their new car almost a full decade ago. If you have these comics it would be appreciated if you could share them!!`,
        `Some of the old comics feature my deadname as opposed to my real name. I'm sharing unedited versions purely for historical reasons.`,
        `I have the following volumes uploaded:`,
        () => {
            addList([
                `<a href="?p=1">Vol. 1</a>`,
                `<a href="?p=2">Vol. 2</a>`
            ])
        }
    ]
};
