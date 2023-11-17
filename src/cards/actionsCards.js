import * as sounds from "./audioCards.js";
import { controlsCards } from "./elemtos.js"

function stopAudio() {
  sounds.chuvaAudio.pause();
  sounds.lareiraAudio.pause();
  sounds.cafeteriaAudio.pause();
  sounds.florestaAudio.pause();
}

function defineIcon(iconSvg, color1, color2) {
  let pathOne = iconSvg.querySelector("#path1id");
  let pathTwo = iconSvg.querySelector("#path2id");

  pathOne.style.fill = color1;
  pathTwo.style.fill = color2;
}

function resetColors() {
  let resetOne = controlsCards.querySelectorAll(".path1");
  let resetTwo = controlsCards.querySelectorAll(".path2");

  for (let i = 0; i < 4; i++) {
    resetOne[i].style.fill = "#E1E1E6";
    resetTwo[i].style.fill = "#323238";
  }
}

let testeStttus;
export function florestaAction(iconSvg) {
  let testeClass;
  stopAudio();
    if(testeStttus != iconSvg.dataset.action && !testeClass){
      document.documentElement.classList.remove('actionCards')
      resetColors()
    }
    testeStttus = iconSvg.dataset.action
  testeClass = document.documentElement.classList.toggle('actionCards')
  if (testeClass){
    sounds.florestaAudio.play();
    defineIcon(iconSvg, "#02799D", "#ffffff");
  } else {
    resetColors()
  }
  
}

export function chuvaAction(iconSvg) {
  let testeClass;
  stopAudio();
    if(testeStttus != iconSvg.dataset.action && !testeClass){
      document.documentElement.classList.remove('actionCards')
      resetColors()
    }
    testeStttus = iconSvg.dataset.action
  testeClass = document.documentElement.classList.toggle('actionCards')
  if (testeClass){
    sounds.chuvaAudio.play();
    defineIcon(iconSvg, "#02799D", "#ffffff");
  } else {
    resetColors()
  }
}
export function cafeteriaAction(iconSvg) {
  let testeClass;
  stopAudio();
    if(testeStttus != iconSvg.dataset.action && !testeClass){
      document.documentElement.classList.remove('actionCards')
      resetColors()
    }
    testeStttus = iconSvg.dataset.action
  testeClass = document.documentElement.classList.toggle('actionCards')
  if (testeClass){
    sounds.cafeteriaAudio.play();
    defineIcon(iconSvg, "#02799D", "#ffffff");
  } else {
    resetColors()
  }
}
export function lareiraAction(iconSvg) {
  let testeClass;
  stopAudio();
    if(testeStttus != iconSvg.dataset.action && !testeClass){
      document.documentElement.classList.remove('actionCards')
      resetColors()
    }
    testeStttus = iconSvg.dataset.action
  testeClass = document.documentElement.classList.toggle('actionCards')
  if (testeClass){
    sounds.lareiraAudio.play();
    defineIcon(iconSvg, "#02799D", "#ffffff");
  } else {
    resetColors()
  }
}
