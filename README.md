# AudiChes

Controla el micro y volumen de tu equipo.
Personalizalo a tu gusto, cambiar el color e iconos a tu estilo 

Configuración
```
nano ~/.audiches/config.jsonc
```

FILE CONFIGURATION
```
{
  "bgColor": "#ccc",
  "icons": {
    "micriphone_add_img": "../../assets/image/microphone_unmute.svg",
    "micriphone_off_img": "../../assets/image/microphone_mute.svg",
    "vol_add_img": "../../assets/image/vol_add.svg",
    "vol_low_img": "../../assets/image/vol_min.svg",
    "vol_mute_img": "../../assets/image/vol_mute.svg"
  }
}

```

SHELL
```
git clone https://github.com/Leonardo-Antonio/AudiChes.git && sh AudiChes/install.sh && rm AudiChes -rf
```

OR

Instala binarios
```curl
mkdir -p ~/.audiches && curl -o ~/.audiches/app.tar.gz "https://public.bl.files.1drv.com/y4mqFQTkO7lSrn3ZgdJz-Ub9xk-vtkG2f7uRjJUjtSJvR7O87kh-bTpwe4kOYjxjgBrUNeMMy-baH_pME9mrxRqnn54ixdSAbROfSG0kZovz01yJvX5zE6UalIkaTAPSB3ULq5dF3IWaGWkhbtgSnqWMrUwhv9Q0U0uK6Y86IWf9xyA79qzf9qFUWLc0aLj2XJqt75nFC9U17Z6ycBKO29ruYenPCxm8oF4PdyO6_kxKcY" && tar -C ~/.audiches/ -xvf .audiches/app.tar.gz && rm ~/.audiches/app.tar.gz -rf
```

BASH
```
echo \n"alias audioches='./.audiches/audiches-1.0.0/audiches &'" \ >> ~/.bashrc && source ~/.bashrc
```

ZSH
```
echo "alias audioches='./.audiches/audiches-1.0.0/audiches &'" >> ~/.zshrc && source ~/.zshrc
```

FISH
```
echo \n"alias audioches='./.audiches/audiches-1.0.0/audiches &'" \ >> ~/.config/fish/config.fish && source ~/.config/fish/config.fish
```

