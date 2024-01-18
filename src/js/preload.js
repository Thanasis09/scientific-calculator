const { ipcRenderer, contextBridge } = require('electron');
const math = require('mathjs');

contextBridge.exposeInMainWorld('electron', {
    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    math: math,
});

