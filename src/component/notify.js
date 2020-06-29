const { ipcRenderer, dialog, remote } = require("electron");
const { BrowserWindow } = require("electron").remote;
const os = require("os-utils");
const path = require("path");

const notification = [
  {
    title: "Break Out !",
    subtitle: "Relax a little",
    body: "Its time for a small break",
    icon: path.join(__dirname, "./src/asset/images/break.gif"),
  },
  {
    title: "Exercise ",
    body: "Time to strech a little",
    icon: path.join(__dirname, "./equality.gif"),
  },
  {
    title: "Wrap yor day",
    body: "Its time to say bye. Please don't extend your working hours.",
    icon: path.join(__dirname, "./equality.gif"),
  },
  {
    title: "Stay Hydrated",
    body: "Take a sip of water to keep yourself hydrated.",
    icon: path.join(__dirname, "./equality.gif"),
  },
];
function fireNotification() {
  console.log("hello world!!");
  let index = Math.floor(Math.random() * Math.floor(notification.length));
  console.log(index);
  const myNotification = new window.Notification(
    notification[index].title,
    notification[index]
  );
  myNotification.onclick = () => {
    console.log("Notification clicked");
    let win = new BrowserWindow({
      width: 400,
      height: 320,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    let modalPath = "./src/component/notify.html";
    win.on("close", () => {
      win = null;
    });
    win.loadFile(modalPath);
    win.webContents.openDevTools();
    win.show();
  };
}

// ipcRenderer.on("cpu_usage", (event, data) => {
//   //   console.log("cpu_usage % " + data);
//   document.getElementById("cpu_usage").innerHTML = data.toFixed(2);
// });
// ipcRenderer.on("memory_usage", (event, data) => {
//   //   console.log("memory_usage % " + data);
//   document.getElementById("memory_usage").innerHTML = data.toFixed(2);
// });
// ipcRenderer.on("total_mem", (event, data) => {
//   //   console.log("total_mem % " + data);
//   document.getElementById("total_mem").innerHTML = data;
// });

ipcRenderer.on("notif", (event, data) => {
  let index = Math.floor(Math.random() * Math.floor(notification.length));
  console.log(index);
  const myNotification = new window.Notification(
    notification[index].title,
    notification[index]
  );
  myNotification.onclick = () => {
    let win = new BrowserWindow({
      width: 400,
      height: 320,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    let modalPath = "./src/component/notify.html";
    win.on("close", () => {
      win = null;
    });
    win.loadFile(modalPath);
    win.webContents.openDevTools();
    win.show();
  };
});
