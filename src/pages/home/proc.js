const { exec } = require("child_process");
const { ipcMain } = require("electron");

ipcMain.on("audio", (e, args) => {
  switch (args.action) {
    case "btn_micriphone_add":
      execCommand("amixer set Capture cap");
      break;

    case "btn_micriphone_off":
      execCommand("amixer set Capture nocap");
      break;

    case "btn_vol_add":
      execCommand("pactl set-sink-volume @DEFAULT_SINK@ +10%");
      break;

    case "btn_vol_low":
      execCommand("pactl set-sink-volume @DEFAULT_SINK@ -10%");
      break;

    case "btn_vol_mute":
      execCommand("pactl set-sink-mute @DEFAULT_SINK@ toggle");
      break;
  }
});

const execCommand = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }

    console.log(`stdout:\n${stdout}`);
  });
};
