const bosses = [
  {
    name: "拖延泥沼怪",
    difficulty: "★",
    coreThreat: "讓玩家動作變得遲緩、沉重。",
    battleLine: "「再等五分鐘...明天再打好嗎？」",
    moveName: "等一下黏液",
    hp: 120,
    attack: 9,
    special: 22,
    kind: "sludge",
    attackFx: "slime",
    color: "#4aaf61",
    cheer: "你先做了第一步，拖延就失去最大的力量。"
  },
  {
    name: "動力吸取烏賊",
    difficulty: "★★",
    coreThreat: "奪走顏色與跳躍力，變得很虛弱。",
    battleLine: "「努力有什麼用？躺平比較快...」",
    moveName: "無力墨汁",
    hp: 150,
    attack: 11,
    special: 26,
    kind: "octo",
    attackFx: "ink",
    color: "#22a6a1",
    cheer: "你把一點點行動拿回來，動力也開始回到身上。"
  },
  {
    name: "狂奔截止時鐘",
    difficulty: "★★☆",
    coreThreat: "強制的倒數計時，讓人手忙腳亂。",
    battleLine: "「滴答、滴答！時間要沒啦！」",
    moveName: "鬧鈴衝撞",
    hp: 180,
    attack: 13,
    special: 31,
    kind: "clock",
    attackFx: "alarm",
    color: "#ef5849",
    cheer: "你把時間切成可以完成的小段，截止日就不再只是威脅。"
  },
  {
    name: "壓力山大大王",
    difficulty: "★★★",
    coreThreat: "鋪天蓋地的任務方塊掉下來。",
    battleLine: "「還有這件、那件，全部接好！」",
    moveName: "待辦清單巨石",
    hp: 215,
    attack: 15,
    special: 36,
    kind: "mountain",
    attackFx: "todo",
    color: "#8d98a7",
    cheer: "你把任務一塊一塊搬開，山也開始變小了。"
  },
  {
    name: "疲憊空殼龍",
    difficulty: "★★★☆",
    coreThreat: "極高的防禦力，需要長時間對抗。",
    battleLine: "「好累...閉上眼睛一下就好...」",
    moveName: "空殼沉睡",
    hp: 255,
    attack: 18,
    special: 42,
    kind: "dragon",
    attackFx: "sleep",
    color: "#8d98a7",
    cheer: "你撐過最沉的一段，也記得把休息變成重新出發的力量。"
  },
  {
    name: "悲觀烏雲魔",
    difficulty: "★★★★",
    coreThreat: "遮蔽視線，滿屏的負能量彈幕。",
    battleLine: "「反正最後一定會失敗的...」",
    moveName: "負能量雨",
    hp: 300,
    attack: 21,
    special: 49,
    kind: "cloud",
    attackFx: "rain",
    color: "#523e92",
    cheer: "你沒有相信每一朵烏雲，光就有位置照進來。"
  },
  {
    name: "焦慮閃電球",
    difficulty: "★★★★☆",
    coreThreat: "速度極快、隨機閃現，讓人無法預測。",
    battleLine: "「快點！怎麼辦？來不及了！」",
    moveName: "慌亂亂竄",
    hp: 350,
    attack: 24,
    special: 57,
    kind: "lightning",
    attackFx: "lightning",
    color: "#ffd83d",
    cheer: "你穩住呼吸，把慌亂拆成下一個能做的動作。"
  },
  {
    name: "懷疑分身鏡魔",
    difficulty: "★★★★★",
    coreThreat: "最終BOSS。真假難辨，讓玩家懷疑操作。",
    battleLine: "「你確定...你真的做得到嗎？」",
    moveName: "猶豫幻象",
    hp: 420,
    attack: 28,
    special: 68,
    kind: "mirror",
    attackFx: "illusion",
    color: "#57c9ff",
    cheer: "你沒有被假象牽著走，真正的目標其實一直在眼前。"
  }
];
const bossImageByKind = {
  sludge: "assets/pictures/procrastination_slime.png",
  octo: "assets/pictures/lack_of _motivation.png",
  clock: "assets/pictures/deadline.png",
  mountain: "assets/pictures/work_ pressure.png",
  dragon: "assets/pictures/exhaustion.png",
  cloud: "assets/pictures/pessimism.png",
  lightning: "assets/pictures/anxiety.png",
  mirror: "assets/pictures/self_doubt.png"
};

const attackEffectImageByFx = {
  slime: "assets/pictures/attackFx/slime.png",
  ink: "assets/pictures/attackFx/ink.png",
  alarm: "assets/pictures/attackFx/clock.png",
  todo: "assets/pictures/attackFx/stone.png",
  sleep: "assets/pictures/attackFx/sleep.png",
  rain: "assets/pictures/attackFx/raindrop.png",
  lightning: "assets/pictures/attackFx/ray.png",
  illusion: "assets/pictures/attackFx/mirror.png"
};

const stageBackgrounds = [
  "assets/pictures/background/part_01.jpg",
  "assets/pictures/background/part_02.jpg",
  "assets/pictures/background/part_03.jpg",
  "assets/pictures/background/part_04.jpg",
  "assets/pictures/background/part_05.jpg",
  "assets/pictures/background/part_06.jpg",
  "assets/pictures/background/part_07.jpg",
  "assets/pictures/background/part_08.jpg"
];

const maxPlayerHp = 100;
const fullChargeMs = 1400;
const chargeTickMs = 50;
const stageResultBufferMs = 850;
const stageClearPopupDelayMs = 320;
const gameOverPopupDelayMs = 520;

const musicTracks = {
  home: { src: "assets/bgm/flowerbed_fields.ogg", loop: true },
  battle: { src: "assets/bgm/game_bgm_elevenlabs.mp3_1778581884091.mp3", loop: true },
  stageClear: { src: "assets/bgm/part_win.mp3", loop: false },
  victory: { src: "assets/bgm/Where_the_Map_Ends.mp3", loop: true },
  gameOver: { src: "assets/bgm/dark_atmosphere.mp3", loop: true }
};

const sfxTracks = {
  button: "assets/bgm/mobile_phone_O.mp3",
  playerAttack: "assets/bgm/attack1.mp3",
  playerChargeAttack: "assets/bgm/slash_attack1.mp3",
  bossAttack: "assets/bgm/laser2.mp3"
};

const uiRewardMedalLine = "你獲得了勇者勳章";
const uiPrincessAria = "公主角色";

const copy = {
  documentTitle: "土豆勇者大冒險",
  home: {
    loadingBarAria: "載入進度",
    loadingWithPercent: (n) => `遊戲載入中 ${n}%`,
    start: "開始冒險",
    startAria: "開始冒險"
  },
  battle: {
    musicTitle: "音樂",
    musicAriaOn: "音樂開啟",
    musicAriaOff: "音樂關閉",
    pauseTitle: "暫停",
    pauseAria: "暫停",
    homeTitle: "首頁",
    homeAria: "首頁",
    icons: {
      musicOn: "♫",
      musicOff: "♪",
      pause: "II",
      resume: "▶",
      home: "⌂"
    },
    badgeRowAria: "關卡徽章",
    playerHpLabel: "土豆勇者生命值",
    powerLabel: "能量",
    attack: "攻擊",
    defend: "防禦",
    chargeAria: "長按蓄力",
    chargeLabelIdle: "長按蓄力",
    chargeLabelCharging: "蓄力中",
    chargeLabelFull: "蓄力完成",
    chargeLabelDefend: "防禦中",
    playerAria: "玩家角色",
    bossAria: "Boss 角色",
    stageFormat: (n) => `第 ${n} 關`,
    finalStage: "Final Stage",
    bossDescFormat: (difficulty, moveName, coreThreat) =>
      `難度 ${difficulty}｜招式 ${moveName}：${coreThreat}`,
    hitCrit: (damage) => `暴擊 -${damage}`,
    hitDamage: (damage) => `-${damage}`
  },
  stageClear: {
    kicker: "STAGE CLEAR",
    titleFormat: (stageNumber) => `第 ${stageNumber} 關勝利`,
    defaultMessage: "你成功擊敗 Boss，準備前往下一關。",
    next: "下一關",
    nextAria: "下一關"
  },
  victory: {
    kicker: "STAGE CLEAR",
    title: "全關卡突破",
    intro: "你已經打倒全部 Boss，土豆勇者達成完美通關。",
    rescueStageAria: "勝利舞台",
    princessAria: uiPrincessAria,
    rewardMedal: uiRewardMedalLine,
    stars: "★★★★★★★★",
    restart: "重新遊戲",
    restartAria: "重新遊戲",
    home: "回到首頁",
    homeAria: "回到首頁"
  },
  modal: {
    // defaultTitle: "提示",
    princessAria: uiPrincessAria,
    rewardLine: uiRewardMedalLine
  },
  gameOver: {
    message: "土豆勇者倒下了，調整節奏後再挑戰一次吧。",
    restart: "重新遊戲",
    home: "回到首頁"
  },
  pause: {
    title: "遊戲暫停",
    message: "戰鬥已暫停。準備好後繼續迎戰 Boss。",
    continue: "繼續遊戲",
    home: "回到首頁"
  }
};

const state = {
  screen: "home",
  stage: 0,
  playerHp: maxPlayerHp,
  bossHp: bosses[0].hp,
  power: 0,
  homeProgress: 0,
  defending: false,
  paused: false,
  locked: false,
  chargeStart: 0,
  chargeTimer: null,
  bossTimer: null,
  battleLineTimer: null,
  battleLineHideTimer: null,
  powerTimer: null,
  homeTimer: null,
  resultTransitionTimer: null,
  popupRevealTimer: null,
  stageClearRevealTimer: null,
  musicEnabled: true,
  homeReady: false,
  currentTrack: ""
};

const els = {
  homeScreen: document.querySelector("#home-screen"),
  battleScreen: document.querySelector("#battle-screen"),
  stageClearScreen: document.querySelector("#stage-clear-screen"),
  stageClearKicker: document.querySelector("#stage-clear-kicker"),
  stageClearTitle: document.querySelector("#stage-clear-title"),
  stageClearMessage: document.querySelector("#stage-clear-message"),
  nextStageBtn: document.querySelector("#next-stage-btn"),
  victoryScreen: document.querySelector("#victory-screen"),
  victoryKicker: document.querySelector("#victory-kicker"),
  victoryTitle: document.querySelector("#victory-title"),
  victoryIntro: document.querySelector("#victory-intro"),
  victoryRescueStage: document.querySelector("#victory-rescue-stage"),
  victoryPrincess: document.querySelector("#victory-princess"),
  victoryRewardLine: document.querySelector("#victory-reward-line"),
  victoryStars: document.querySelector("#victory-stars"),
  loadingPanel: document.querySelector("#loading-panel"),
  homeContent: document.querySelector("#home-content"),
  homeRunner: document.querySelector("#home-runner"),
  loadingBar: document.querySelector("#loading-bar"),
  loadingProgress: document.querySelector("#loading-progress"),
  loadingText: document.querySelector("#loading-text"),
  bgm: document.querySelector("#bgm"),
  startBtn: document.querySelector("#start-btn"),
  musicBtn: document.querySelector("#music-btn"),
  pauseBtn: document.querySelector("#pause-btn"),
  homeBtn: document.querySelector("#home-btn"),
  stageLabel: document.querySelector("#stage-label"),
  bossTitle: document.querySelector("#boss-title"),
  badgeRow: document.querySelector("#badge-row"),
  playerHpLabel: document.querySelector("#player-hp-label"),
  playerHpText: document.querySelector("#player-hp-text"),
  playerHpBar: document.querySelector("#player-hp-bar"),
  powerLabel: document.querySelector("#power-label"),
  powerText: document.querySelector("#power-text"),
  powerBar: document.querySelector("#power-bar"),
  bossName: document.querySelector("#boss-name"),
  bossHpText: document.querySelector("#boss-hp-text"),
  bossHpBar: document.querySelector("#boss-hp-bar"),
  bossDesc: document.querySelector("#boss-desc"),
  boss: document.querySelector("#boss"),
  player: document.querySelector("#player"),
  attackBtn: document.querySelector("#attack-btn"),
  defendBtn: document.querySelector("#defend-btn"),
  playerHit: document.querySelector("#player-hit"),
  bossHit: document.querySelector("#boss-hit"),
  battleLineBubble: document.querySelector("#battle-line-bubble"),
  chargeMeter: document.querySelector("#charge-meter"),
  chargePercentText: document.querySelector("#charge-percent-text"),
  chargeLabel: document.querySelector("#charge-label"),
  modal: document.querySelector("#modal"),
  modalTitle: document.querySelector("#modal-title"),
  modalMessage: document.querySelector("#modal-message"),
  modalActions: document.querySelector("#modal-actions"),
  reward: document.querySelector("#reward"),
  modalPrincess: document.querySelector("#modal-princess"),
  rewardLine: document.querySelector("#reward-line"),
  victoryRestartBtn: document.querySelector("#victory-restart-btn"),
  victoryHomeBtn: document.querySelector("#victory-home-btn"),
  effectLayer: null
};

function applyUiStrings() {
  document.title = copy.documentTitle;

  els.loadingBar?.setAttribute("aria-label", copy.home.loadingBarAria);
  els.startBtn.textContent = copy.home.start;
  els.startBtn.setAttribute("aria-label", copy.home.startAria);

  els.musicBtn.textContent = copy.battle.icons.musicOn;
  els.musicBtn.setAttribute("title", copy.battle.musicTitle);
  els.musicBtn.setAttribute("aria-label", copy.battle.musicAriaOn);

  els.pauseBtn.textContent = copy.battle.icons.pause;
  els.pauseBtn.setAttribute("title", copy.battle.pauseTitle);
  els.pauseBtn.setAttribute("aria-label", copy.battle.pauseAria);

  els.homeBtn.textContent = copy.battle.icons.home;
  els.homeBtn.setAttribute("title", copy.battle.homeTitle);
  els.homeBtn.setAttribute("aria-label", copy.battle.homeAria);

  els.badgeRow.setAttribute("aria-label", copy.battle.badgeRowAria);
  els.playerHpLabel.textContent = copy.battle.playerHpLabel;
  els.powerLabel.textContent = copy.battle.powerLabel;

  els.attackBtn.textContent = copy.battle.attack;
  els.defendBtn.textContent = copy.battle.defend;

  els.player.setAttribute("aria-label", copy.battle.playerAria);
  els.boss.setAttribute("aria-label", copy.battle.bossAria);
  els.chargeMeter.setAttribute("aria-label", copy.battle.chargeAria);

  els.stageClearKicker.textContent = copy.stageClear.kicker;
  els.nextStageBtn.textContent = copy.stageClear.next;
  els.nextStageBtn.setAttribute("aria-label", copy.stageClear.nextAria);

  els.victoryKicker.textContent = copy.victory.kicker;
  els.victoryTitle.textContent = copy.victory.title;
  els.victoryIntro.textContent = copy.victory.intro;
  els.victoryRescueStage.setAttribute("aria-label", copy.victory.rescueStageAria);
  els.victoryPrincess.setAttribute("aria-label", copy.victory.princessAria);
  els.victoryRewardLine.textContent = copy.victory.rewardMedal;
  els.victoryStars.textContent = copy.victory.stars;

  els.victoryRestartBtn.textContent = copy.victory.restart;
  els.victoryRestartBtn.setAttribute("aria-label", copy.victory.restartAria);
  els.victoryHomeBtn.textContent = copy.victory.home;
  els.victoryHomeBtn.setAttribute("aria-label", copy.victory.homeAria);

  els.modalPrincess?.setAttribute("aria-label", copy.modal.princessAria);
  els.rewardLine.textContent = copy.modal.rewardLine;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function currentBoss() {
  return bosses[state.stage];
}

function stageEaseProfile() {
  if (state.stage < 3) {
    return {
      damageScale: 1,
      attackDelayBonus: 0,
      specialChanceScale: 1,
      playerDamageBoost: 1
    };
  }

  const afterStageThree = state.stage - 3;

  return {
    damageScale: Math.max(0.58, 0.8 - afterStageThree * 0.07),
    attackDelayBonus: 300 + afterStageThree * 180,
    specialChanceScale: Math.max(0.62, 0.86 - afterStageThree * 0.06),
    playerDamageBoost: 1 + (afterStageThree + 1) * 0.08
  };
}

function ensureEffectLayer() {
  if (els.effectLayer) return els.effectLayer;

  const layer = document.createElement("div");
  layer.className = "battle-effect-layer";
  els.battleScreen.appendChild(layer);
  els.effectLayer = layer;
  return layer;
}

function centerPoint(element, referenceRect, xRatio = 0.5, yRatio = 0.5) {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left - referenceRect.left + rect.width * xRatio,
    y: rect.top - referenceRect.top + rect.height * yRatio
  };
}

function launchAttackEffect({ from, to, type, strong = false, charged = false, image, onImpact }) {
  const layer = ensureEffectLayer();
  const layerRect = layer.getBoundingClientRect();
  const start = centerPoint(from, layerRect, 0.5, 0.45);
  const end = centerPoint(to, layerRect, 0.5, 0.48);
  const effect = document.createElement("span");

  effect.className = `attack-effect ${type}${image ? " has-art" : ""}${strong ? " strong" : ""}${charged ? " charged" : ""}`;
  effect.style.setProperty("--from-x", `${start.x}px`);
  effect.style.setProperty("--from-y", `${start.y}px`);
  effect.style.setProperty("--dx", `${end.x - start.x}px`);
  effect.style.setProperty("--dy", `${end.y - start.y}px`);
  effect.style.setProperty("--mid-dx", `${(end.x - start.x) * 0.92}px`);
  effect.style.setProperty("--mid-dy", `${(end.y - start.y) * 0.92}px`);
  effect.style.setProperty("--angle", `${Math.atan2(end.y - start.y, end.x - start.x)}rad`);

  if (image) {
    effect.style.setProperty("--attack-image", `url("${image}")`);
  }

  effect.innerHTML = "<span></span><i></i><b></b>";
  layer.appendChild(effect);

  window.setTimeout(() => {
    onImpact?.();
  }, 360);

  window.setTimeout(() => {
    effect.remove();
  }, 760);
}

function showBattleLineBubble() {
  if (!els.battleLineBubble) return;
  if (state.paused || state.locked || state.screen !== "battle") return;

  const boss = currentBoss();
  if (!boss?.battleLine) return;

  els.battleLineBubble.textContent = boss.battleLine;
  els.battleLineBubble.classList.remove("show");
  void els.battleLineBubble.offsetWidth;
  els.battleLineBubble.classList.add("show");

  window.clearTimeout(state.battleLineHideTimer);
  state.battleLineHideTimer = window.setTimeout(() => {
    els.battleLineBubble.classList.remove("show");
  }, 3000);
}

function startBattleLineLoop(initialDelay = 700) {
  window.clearTimeout(state.battleLineTimer);
  window.clearTimeout(state.battleLineHideTimer);
  els.battleLineBubble?.classList.remove("show");

  const tick = () => {
    showBattleLineBubble();
    state.battleLineTimer = window.setTimeout(tick, 5000 + Math.random() * 1500);
  };

  state.battleLineTimer = window.setTimeout(tick, initialDelay);
}

function triggerScreenShake(strong = false) {
  const baseClass = "screen-shake";
  const strongClass = "screen-shake-strong";

  els.battleScreen.classList.remove(baseClass, strongClass);
  void els.battleScreen.offsetWidth;
  els.battleScreen.classList.add(strong ? strongClass : baseClass);
}

function activeMusicTrackKey() {
  if (state.screen === "victory") return "victory";
  if (state.screen === "battle") return "battle";
  return "home";
}

function setScreen(screen) {
  state.screen = screen;
  els.homeScreen.classList.toggle("hidden", screen !== "home");
  els.battleScreen.classList.toggle("hidden", screen !== "battle");
  els.victoryScreen.classList.toggle("hidden", screen !== "victory");

  if (screen !== "battle") {
    hideStageClearScreen();
  }

  if (screen === "home") {
    startHomeIntro();
  }
}

function setHomeLoadingState(isLoading) {
  els.homeScreen.classList.toggle("loading", isLoading);
}

function setHomeRunnerProgress(progress = 0) {
  if (!els.homeRunner) return;
  const ratio = clamp(progress, 0, 100) / 100;
  els.homeRunner.style.left = `calc(var(--runner-pad) + (100% - var(--runner-size) - (var(--runner-pad) * 2)) * ${ratio})`;
}

function startHomeIntro() {
  window.clearInterval(state.homeTimer);
  state.homeProgress = 0;
  state.homeReady = false;
  setHomeLoadingState(true);
  els.loadingPanel.classList.remove("hidden");
  els.homeContent.classList.add("hidden");
  els.homeRunner.classList.remove("running");
  setHomeRunnerProgress(0);
  els.loadingProgress.style.width = "0%";
  els.loadingText.textContent = copy.home.loadingWithPercent(0);
  void els.homeRunner.offsetWidth;
  els.homeRunner.classList.add("running");

  state.homeTimer = window.setInterval(() => {
    state.homeProgress = clamp(state.homeProgress + 2, 0, 100);
    setHomeRunnerProgress(state.homeProgress);
    els.loadingProgress.style.width = `${state.homeProgress}%`;
    els.loadingText.textContent = copy.home.loadingWithPercent(state.homeProgress);

    if (state.homeProgress >= 100) {
      window.clearInterval(state.homeTimer);
      state.homeTimer = null;
      window.setTimeout(showHomeReady, 180);
    }
  }, 96);
}

function showHomeReady() {
  if (state.screen !== "home") return;

  state.homeReady = true;
  setHomeLoadingState(false);
  els.loadingPanel.classList.add("hidden");
  els.homeContent.classList.remove("hidden");
  startMusic("home");
}

function startMusic(track = "home") {
  if (!state.musicEnabled || !els.bgm) return;

  updateMusicButton();
  const requestedTrackConfig = musicTracks[track] || musicTracks[activeMusicTrackKey()] || musicTracks.home;
  const requestedTrack = requestedTrackConfig.src;

  if (state.currentTrack !== requestedTrack) {
    els.bgm.pause();
    els.bgm.src = requestedTrack;
    els.bgm.load();
    state.currentTrack = requestedTrack;
  }

  els.bgm.loop = requestedTrackConfig.loop !== false;
  els.bgm.volume = 0.34;
  const playRequest = els.bgm.play();
  playRequest?.catch(() => {
    // Browsers may block autoplay until the first user gesture.
  });
}

function stopMusic() {
  if (!els.bgm) return;

  els.bgm.pause();
  els.bgm.currentTime = 0;
  state.currentTrack = "";
}

function toggleMusic() {
  state.musicEnabled = !state.musicEnabled;
  updateMusicButton();

  if (state.musicEnabled) {
    startMusic(activeMusicTrackKey());
  } else if (els.bgm) {
    els.bgm.pause();
  }
}

function updateMusicButton() {
  els.musicBtn.textContent = state.musicEnabled ? copy.battle.icons.musicOn : copy.battle.icons.musicOff;
  els.musicBtn.classList.toggle("muted", !state.musicEnabled);
  els.musicBtn.setAttribute("aria-label", state.musicEnabled ? copy.battle.musicAriaOn : copy.battle.musicAriaOff);
}

function playSfx(src, volume = 0.8) {
  if (!src) return;

  const sfx = new Audio(src);
  sfx.volume = clamp(volume, 0, 1);
  sfx.play().catch(() => {
    // Ignore blocked autoplay errors.
  });
}

function setChargeMeter(percent = 0, label = copy.battle.chargeLabelIdle) {
  const normalized = clamp(Math.round(percent), 0, 100);
  els.chargeMeter?.style.setProperty("--charge-percent", `${normalized}%`);

  if (els.chargePercentText) {
    els.chargePercentText.textContent = `${normalized}%`;
  }

  if (els.chargeLabel) {
    els.chargeLabel.textContent = label;
  }
}

function resetChargeMeter(label = copy.battle.chargeLabelIdle) {
  setChargeMeter(0, label);
}

function createBadges() {
  els.badgeRow.innerHTML = "";

  bosses.forEach((_, index) => {
    const badge = document.createElement("span");
    badge.className = `badge${index < state.stage ? " done" : ""}`;
    badge.textContent = index + 1;
    els.badgeRow.appendChild(badge);
  });
}

function startGame() {
  window.clearInterval(state.homeTimer);
  state.stage = 0;
  state.playerHp = maxPlayerHp;
  state.power = 35;
  state.paused = false;
  state.locked = false;
  document.body.classList.remove("paused");
  hideStageClearScreen();
  hideModal();
  setScreen("battle");
  loadStage();
  startMusic("battle");
}

function loadStage() {
  const boss = currentBoss();
  const isFinalStage = state.stage === bosses.length - 1;
  const stageBackground = stageBackgrounds[state.stage] || stageBackgrounds[stageBackgrounds.length - 1];

  clearTimers();
  state.bossHp = boss.hp;
  state.defending = false;
  state.locked = false;
  state.chargeStart = 0;
  els.battleScreen.style.setProperty("--stage-bg-image", `url("${stageBackground}")`);
  els.battleScreen.style.setProperty("--stage-bg-y", state.stage === 0 ? "58%" : "50%");

  els.boss.style.setProperty("--boss-color", boss.color);
  const bossImage = bossImageByKind[boss.kind];
  els.boss.style.setProperty("--boss-image", bossImage ? `url("${bossImage}")` : "none");
  els.boss.className = `boss sprite kind-${boss.kind}`;
  els.boss.classList.toggle("has-art", Boolean(bossImage));

  els.stageLabel.textContent = isFinalStage ? copy.battle.finalStage : copy.battle.stageFormat(state.stage + 1);
  els.bossTitle.textContent = boss.name;
  els.bossName.textContent = boss.name;
  els.bossDesc.textContent = copy.battle.bossDescFormat(boss.difficulty, boss.moveName, boss.coreThreat);

  createBadges();
  updateBars();
  resetChargeMeter();
  startTimers();
  startBattleLineLoop();
}

function startTimers() {
  clearTimers();

  state.powerTimer = window.setInterval(() => {
    if (state.paused || state.locked || state.screen !== "battle") return;
    state.power = clamp(state.power + 5, 0, 100);
    updateBars();
  }, 1000);

  scheduleBossAttack();
}

function clearTimers() {
  window.clearTimeout(state.bossTimer);
  window.clearTimeout(state.battleLineTimer);
  window.clearTimeout(state.battleLineHideTimer);
  window.clearInterval(state.powerTimer);
  window.clearInterval(state.chargeTimer);

  state.bossTimer = null;
  state.battleLineTimer = null;
  state.battleLineHideTimer = null;
  state.powerTimer = null;
  state.chargeTimer = null;
}

function clearTransitionTimers() {
  window.clearTimeout(state.resultTransitionTimer);
  window.clearTimeout(state.popupRevealTimer);
  window.clearTimeout(state.stageClearRevealTimer);
  state.resultTransitionTimer = null;
  state.popupRevealTimer = null;
  state.stageClearRevealTimer = null;
}

function scheduleBossAttack() {
  window.clearTimeout(state.bossTimer);

  const ease = stageEaseProfile();
  const stageFactor = state.stage * 80;
  const delay = Math.max(1200, 2200 - stageFactor + ease.attackDelayBonus + Math.random() * 780);

  state.bossTimer = window.setTimeout(() => {
    bossAttack();

    if (!state.locked && state.screen === "battle") {
      scheduleBossAttack();
    }
  }, delay);
}

function bossAttack() {
  if (state.paused || state.locked) return;

  const boss = currentBoss();
  const fxKey = boss.attackFx || boss.kind;
  const ease = stageEaseProfile();
  const specialChance = clamp((0.2 + state.stage * 0.012) * ease.specialChanceScale, 0.12, 0.3);
  const isSpecial = Math.random() < specialChance;
  let damage = (isSpecial ? boss.special : boss.attack) * ease.damageScale;

  if (state.defending) {
    damage *= 0.32;
  }

  damage = Math.max(1, Math.round(damage));
  state.playerHp = clamp(state.playerHp - damage, 0, maxPlayerHp);
  playSfx(sfxTracks.bossAttack, 0.85);

  launchAttackEffect({
    from: els.boss,
    to: els.player,
    type: `boss-${fxKey}`,
    image: attackEffectImageByFx[fxKey],
    strong: isSpecial,
    onImpact: () =>
      flashHit(els.player, els.playerHit, isSpecial ? copy.battle.hitCrit(damage) : copy.battle.hitDamage(damage), isSpecial)
  });

  state.defending = false;
  els.player.classList.remove("guard");
  updateBars();

  if (state.playerHp <= 0) {
    state.locked = true;
    clearTimers();
    window.setTimeout(gameOver, 430);
  }
}

function attack(multiplier = 1) {
  if (state.paused || state.locked || state.screen !== "battle") return;

  const ease = stageEaseProfile();
  const base = 16 + state.stage * 2;
  const powerBonus = Math.round(state.power * 0.28);
  const isCharged = multiplier > 1.01;
  const damage = Math.round((base + powerBonus) * multiplier * ease.playerDamageBoost);
  playSfx(isCharged ? sfxTracks.playerChargeAttack : sfxTracks.playerAttack, isCharged ? 0.92 : 0.84);

  state.bossHp = clamp(state.bossHp - damage, 0, currentBoss().hp);
  state.power = 0;
  state.defending = false;
  els.player.classList.remove("guard");

  launchAttackEffect({
    from: els.player,
    to: els.boss,
    type: multiplier > 1.7 ? "player-wave" : "player-slash",
    image:
      isCharged
        ? "assets/pictures/weapon/advance_sword.png"
        : "assets/pictures/weapon/wooden_sword.png",
    charged: isCharged,
    strong: multiplier > 2.2,
    onImpact: () => flashHit(els.boss, els.bossHit, copy.battle.hitDamage(damage), multiplier > 2.2)
  });

  updateBars();

  if (state.bossHp <= 0) {
    state.locked = true;
    clearTimers();
    window.setTimeout(stageWin, 430);
  }
}

function beginCharge() {
  if (state.paused || state.locked) return;

  state.chargeStart = Date.now();
  setChargeMeter(0, copy.battle.chargeLabelCharging);
  window.clearInterval(state.chargeTimer);

  state.chargeTimer = window.setInterval(() => {
    const held = Date.now() - state.chargeStart;
    const percent = clamp((held / fullChargeMs) * 100, 0, 100);
    setChargeMeter(percent, percent >= 100 ? copy.battle.chargeLabelFull : copy.battle.chargeLabelCharging);
  }, chargeTickMs);
}

function releaseCharge() {
  if (!state.chargeStart) return;

  const held = Date.now() - state.chargeStart;
  const chargePercent = clamp((held / fullChargeMs) * 100, 0, 100);
  const isCharged = chargePercent >= 100;
  state.chargeStart = 0;
  window.clearInterval(state.chargeTimer);
  state.chargeTimer = null;
  resetChargeMeter();
  attack(isCharged ? 2.8 : 1);
}

function defend() {
  if (state.paused || state.locked) return;

  state.defending = true;
  els.player.classList.add("guard");
  state.chargeStart = 0;
  window.clearInterval(state.chargeTimer);
  state.chargeTimer = null;
  setChargeMeter(0, copy.battle.chargeLabelDefend);

  window.setTimeout(() => {
    if (!state.defending) return;

    state.defending = false;
    els.player.classList.remove("guard");
    resetChargeMeter();
  }, 1500);
}

function updateBars() {
  const boss = currentBoss();
  const playerPercent = (state.playerHp / maxPlayerHp) * 100;
  const bossPercent = (state.bossHp / boss.hp) * 100;

  els.playerHpText.textContent = `${state.playerHp} / ${maxPlayerHp}`;
  els.playerHpBar.style.width = `${playerPercent}%`;
  els.powerText.textContent = `${Math.round(state.power)}%`;
  els.powerBar.style.width = `${state.power}%`;
  els.bossHpText.textContent = `${state.bossHp} / ${boss.hp}`;
  els.bossHpBar.style.width = `${bossPercent}%`;
}

function flashHit(target, label, text, strong = false) {
  target.classList.remove("shake");
  label.classList.remove("show");
  void target.offsetWidth;
  target.classList.add("shake");
  window.setTimeout(() => {
    target.classList.remove("shake");
  }, 280);
  triggerScreenShake(strong);
  label.textContent = text;
  label.classList.add("show");
}

function showStageClearScreen(boss) {
  const stageNumber = state.stage + 1;
  els.stageClearTitle.textContent = copy.stageClear.titleFormat(stageNumber);
  els.stageClearMessage.textContent = boss?.cheer || copy.stageClear.defaultMessage;
  clearTransitionTimers();
  els.stageClearScreen.classList.remove("show-screen", "show-card");
  els.stageClearScreen.classList.remove("hidden");

  requestAnimationFrame(() => {
    els.stageClearScreen.classList.add("show-screen");
    state.stageClearRevealTimer = window.setTimeout(() => {
      startMusic("stageClear");
      els.stageClearScreen.classList.add("show-card");
    }, stageClearPopupDelayMs);
  });
}

function hideStageClearScreen() {
  clearTransitionTimers();
  els.stageClearScreen.classList.remove("show-screen", "show-card");
  els.stageClearScreen.classList.add("hidden");
}

function stageWin() {
  state.locked = true;
  clearTimers();

  const boss = currentBoss();
  const isFinal = state.stage === bosses.length - 1;

  if (isFinal) {
    state.stage = bosses.length;
    createBadges();
    showVictoryScreen();
    return;
  }

  state.resultTransitionTimer = window.setTimeout(() => {
    if (state.screen !== "battle" || !state.locked) return;
    showStageClearScreen(boss);
  }, stageResultBufferMs);
}

function nextStage() {
  state.stage += 1;
  state.playerHp = maxPlayerHp;
  state.power = 30;
  hideStageClearScreen();
  hideModal();
  loadStage();
  startMusic("battle");
}

function showVictoryScreen() {
  clearTimers();
  clearTransitionTimers();
  hideStageClearScreen();
  hideModal();
  state.paused = false;
  state.locked = true;
  els.pauseBtn.textContent = copy.battle.icons.pause;
  document.body.classList.remove("paused");
  setScreen("victory");
  startMusic("victory");
  playVictoryScene();
}

function playVictoryScene() {
  els.victoryScreen.classList.remove("scene-play");
  void els.victoryScreen.offsetWidth;
  els.victoryScreen.classList.add("scene-play");
}

function gameOver() {
  state.locked = true;
  clearTimers();
  clearTransitionTimers();
  state.resultTransitionTimer = window.setTimeout(() => {
    showModal({
      type: "over",
      message: copy.gameOver.message,
      popupDelayMs: gameOverPopupDelayMs,
      musicTrackOnPopup: "gameOver",
      actions: [
        { label: copy.gameOver.restart, handler: startGame, btnAction: "restart" },
        { label: copy.gameOver.home, handler: goHome, btnAction: "home" }
      ]
    });
  }, stageResultBufferMs);
}

function togglePause() {
  if (state.screen !== "battle" || state.locked) return;

  state.paused = !state.paused;
  document.body.classList.toggle("paused", state.paused);
  els.pauseBtn.textContent = state.paused ? copy.battle.icons.resume : copy.battle.icons.pause;

  if (state.paused) {
    showModal({
      type: "pause",
      title: copy.pause.title,
      message: copy.pause.message,
      actions: [
        { label: copy.pause.continue, handler: togglePause, btnAction: "continue" },
        { label: copy.pause.home, handler: goHome, btnAction: "home" }
      ]
    });
  } else {
    hideModal();
  }
}

function goHome() {
  clearTimers();
  clearTransitionTimers();
  stopMusic();
  state.paused = false;
  state.locked = false;
  state.chargeStart = 0;
  els.pauseBtn.textContent = copy.battle.icons.pause;
  document.body.classList.remove("paused");
  hideStageClearScreen();
  hideModal();
  setScreen("home");
}

function showModal({ type, title, message, actions, popupDelayMs = 0, musicTrackOnPopup = "" }) {
  clearTransitionTimers();
  els.modalTitle.textContent = title || copy.modal.defaultTitle;
  els.modalMessage.textContent = message;
  els.modal.classList.remove("is-open", "show-popup");
  els.modal.classList.remove("hidden");
  els.modal.classList.toggle("game-over-fullscreen", type === "over");
  els.modal.classList.toggle("final-overlay", type === "final");
  els.reward.classList.toggle("hidden", type !== "final");
  els.modalActions.innerHTML = "";

  const buttonActionFromLabel = (label = "") => {
    if (label.includes("開始")) return "start";
    if (label.includes("下一")) return "next";
    if (label.includes("繼續")) return "continue";
    if (label.includes("首頁")) return "home";
    if (label.includes("重新") || label.includes("再")) return "restart";
    return "";
  };

  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "image-btn";
    const actionKey = action.btnAction || buttonActionFromLabel(action.label);
    if (actionKey) {
      button.dataset.btnAction = actionKey;
    }
    button.setAttribute("aria-label", action.label);
    button.title = action.label;
    button.textContent = action.label;
    button.addEventListener("click", action.handler);
    els.modalActions.appendChild(button);
  });

  requestAnimationFrame(() => {
    els.modal.classList.add("is-open");
    state.popupRevealTimer = window.setTimeout(() => {
      if (musicTrackOnPopup) {
        startMusic(musicTrackOnPopup);
      }
      els.modal.classList.add("show-popup");
    }, popupDelayMs);
  });
}

function hideModal() {
  clearTransitionTimers();
  els.modal.classList.remove("is-open", "show-popup");
  els.modal.classList.add("hidden");
  els.modal.classList.remove("game-over-fullscreen", "final-overlay");
}

els.startBtn.addEventListener("click", startGame);
els.musicBtn.addEventListener("click", toggleMusic);
els.homeBtn.addEventListener("click", goHome);
els.pauseBtn.addEventListener("click", togglePause);
els.defendBtn.addEventListener("click", defend);
els.nextStageBtn.addEventListener("click", nextStage);
els.victoryRestartBtn.addEventListener("click", startGame);
els.victoryHomeBtn.addEventListener("click", goHome);

function bindChargeControl(target) {
  if (!target) return;

  target.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    beginCharge();
  });
  target.addEventListener("pointerup", releaseCharge);
  target.addEventListener("pointerleave", releaseCharge);
  target.addEventListener("pointercancel", releaseCharge);
}

bindChargeControl(els.attackBtn);
bindChargeControl(els.chargeMeter);

window.addEventListener("keydown", (event) => {
  if (state.musicEnabled && state.homeReady && els.bgm?.paused) {
    startMusic(activeMusicTrackKey());
  }

  if (event.key === "Escape") {
    togglePause();
  }

  if (event.code === "Space") {
    event.preventDefault();
    attack();
  }
});

window.addEventListener("pointerdown", () => {
  if (state.musicEnabled && state.homeReady && els.bgm?.paused) {
    startMusic(activeMusicTrackKey());
  }
});

applyUiStrings();
startHomeIntro();
updateMusicButton();
resetChargeMeter();

document.addEventListener("click", (event) => {
  const button = event.target instanceof Element ? event.target.closest("button") : null;
  if (!button) return;
  playSfx(sfxTracks.button, 0.72);
});
