module.exports = function notification(mod) {
  mod.hook("S_ACTION_STAGE", 9, (event) => {
    if (event.skill.id === 70300) {
      mod.send("S_CUSTOM_STYLE_SYSTEM_MESSAGE", 1, {
        message: "Guardian Shout pressed!",
        style: 54,
      });

      mod.send("S_PLAY_SOUND", 1, {
        SoundID: 2023,
      });
	}  
    if (event.skill.id === 210102) {
      mod.send("S_CUSTOM_STYLE_SYSTEM_MESSAGE", 1, {
        message: "Mounting Rage pressed!",
        style: 54,
      });

      mod.send("S_PLAY_SOUND", 1, {
        SoundID: 2023,
      });
	}
    if (event.skill.id === 30201) {
      mod.send("S_CUSTOM_STYLE_SYSTEM_MESSAGE", 1, {
        message: "Divine Wrath pressed!",
        style: 54,
      });

      mod.send("S_PLAY_SOUND", 1, {
        SoundID: 2023,
      });
    }
  });
};
