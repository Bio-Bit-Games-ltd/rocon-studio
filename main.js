/*---------------------------------------------------------------------------------------------
 *  copyright (c) 2024 BioBit Games Ltda. CREACTED IN 06/05/2024 DD/MM/YYYYY
 *  all rights reserverds.
 *---------------------------------------------------------------------------------------------*/

const { app, BrowserWindow, ipcMain  } = require('electron');

require('electron-reload')(__dirname);

// LOAD APP WINDOW :

function createWindow () {
    let win = new BrowserWindow({ 
    width: 1366,
    height: 768,
    resizable: true,
    frame: true,
    icon: __dirname + "./icon.png",
    show: false,
    title: "Rocon Studio",
    minWidth: 940,
    minHeight: 570,
    backgroundColor: "#1E1E1E"
  });

  win.removeMenu();
  win.loadFile('./app/app.html');

  // LAUNCH WINDOW : 

  let splash = new BrowserWindow ({ 
    width: 700, 
    height: 400,   
    transparent: false,
    frame: false, 
    alwaysOnTop: false,
    resizable: false,
    icon: __dirname + "./icon.png",
    title: "Rocon Studio"
  });

  splash.loadFile ('./app/splash.html');
  splash.center ();

  setTimeout (function () { 
    splash.close (); 
    win.show ();
    win.maximize();
  }, 15000 );

}

app.whenReady().then(createWindow);
