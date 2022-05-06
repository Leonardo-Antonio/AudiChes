const { ipcMain } = require("electron");
const fs = require("fs");

ipcMain.on("config", (e, args) => {
  if (!args) return;
  e.reply("config_response", readConfig());
});

const readConfig = () => {
  const buff = fs.readFileSync("./config.jsonc", {
    encoding: "utf-8",
  });

  return JSON.parse(buff);
};
