'use strict'

const {app, BrowserWindow} = require('electron');

require('electron-reload')(__dirname);

app.on('ready', () => {
    let window = new BrowserWindow({
        width: 800, 
        height: 600
    });

    window.loadURL(`File://${__dirname}/app/index.html`);
});