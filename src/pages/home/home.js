const { ipcRenderer } = require("electron");

const btns = [
  document.getElementById("btn_micriphone_add"),
  document.getElementById("btn_micriphone_off"),
  document.getElementById("btn_vol_add"),
  document.getElementById("btn_vol_low"),
  document.getElementById("btn_vol_mute"),
];


window.onload = () => {
  ipcRenderer.send("config", true);

  document.querySelectorAll(".icon").forEach((icon) => {
    ipcRenderer.on("config_response", (e, args) => {
      icon.style.backgroundColor = args.bgColor;

      document.getElementById("micriphone_add_img").setAttribute("src", args.icons.micriphone_add_img);
      document.getElementById("micriphone_off_img").setAttribute("src", args.icons.micriphone_off_img)
      document.getElementById("vol_add_img").setAttribute("src", args.icons.vol_add_img)
      document.getElementById("vol_low_img").setAttribute("src", args.icons.vol_low_img)
      document.getElementById("vol_mute_img").setAttribute("src", args.icons.vol_mute_img)
    });
  });
};

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
