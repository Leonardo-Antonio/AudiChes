const btns = [
  document.getElementById("btn_micriphone_add"),
  document.getElementById("btn_micriphone_off"),
  document.getElementById("btn_vol_add"),
  document.getElementById("btn_vol_low"),
  document.getElementById("btn_vol_mute"),
];

const { ipcRenderer } = require("electron");

const audio = (action) => {
  ipcRenderer.send("audio", {
    action,
  });
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    audio(btn.getAttribute("id"));
  });
});
