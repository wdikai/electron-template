import { app, BrowserWindow } from 'electron';

function createWindow (): void {
  // Create the browser window.
  let window: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  window.loadFile('index.html');
}

app.on('ready', createWindow);