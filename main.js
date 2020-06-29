const { app, BrowserWindow, globalShortcut, dialog } = require("electron");
const cpu = require("os-utils");

function createWindow() {
  let win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");
  // setInterval(() => {
  //   cpu.cpuUsage(function (v) {
  //     win.webContents.send("cpu_usage", v * 100);
  //     win.webContents.send("memory_usage", cpu.freememPercentage() * 100);
  //     win.webContents.send("total_mem", cpu.totalmem());
  //   });
  // }, 1000);

  setInterval(() => {
    win.webContents.send("notif");
  }, 30000);

  globalShortcut.register("CommandOrControl+1", () => {
    win.isMaximized() ? win.unmaximize() : win.maximize();
  });
  globalShortcut.register("CommandOrControl+2", () => {
    alert("Global shortcut handler");
  });
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
