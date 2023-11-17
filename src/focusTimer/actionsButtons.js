import * as timer from "./timer.js";
import * as elementos  from "./elementsButton.js";
import state from "./state.js";

function defineIcon(iconSvg, color1) {
    let pathOne = iconSvg.querySelector(".path1")
    pathOne.style.fill = color1;
  }

  function resetColor() {
      let resetOne = elementos.controlsButtons.querySelectorAll(".path1");
    
      for (let i = 1; i < 4; i++) {
        resetOne[i].style.fill = "#323238";
      }
    }

  let testeStttus;
  export function playAction(iconSvg) {
  let testeClass;
 let minutes = Number(elementos.minutes.textContent)
  if(testeStttus != iconSvg.dataset.action && !testeClass){
    document.documentElement.classList.remove('running')
    resetColor()
  }
    testeClass = document.documentElement.classList.toggle("running")

    if (testeClass && minutes > 0 && state.isRunning == false){
    state.isRunning = true
    timer.countDown()
      defineIcon(iconSvg, "#02799D")
   }else{
    state.isRunning = false
    resetColor()
    elementos.controlsButtons.querySelector(".path1").style.fill = "#323238"
   }
}

export function stopAction(iconSvg) {
  let minutes = Number(elementos.minutes.textContent)
  let testeClass;
  if(testeStttus != iconSvg.dataset.action && !testeClass){
    document.documentElement.classList.remove('running')
    resetColor()
    elementos.controlsButtons.querySelector(".path1").style.fill = "#323238"

    testeClass = document.documentElement.classList.toggle("running")

    if (testeClass && minutes > 0){
        defineIcon(iconSvg, "#02799D")
        setTimeout(resetColor, 200)
     }
  }

  state.isRunning = false;
  document.documentElement.classList.remove("running")
  state.minutes = 0;
  state.seconds = 0;
  timer.updateDisplay(state.minutes, state.seconds)


  
}

export function incrementoAction(iconSvg) {
  let testeClass;
  if(testeStttus != iconSvg.dataset.action && !testeClass){
    document.documentElement.classList.remove('running')
    resetColor()

    testeClass = document.documentElement.classList.toggle("running")

    if (testeClass){
        defineIcon(iconSvg, "#02799D")
        setTimeout(resetColor, 200)
        if(state.isRunning == true){
          setTimeout(() => {elementos.controlsButtons.querySelector(".path1").style.fill = "#02799D"}, 200)
        }
     }
  }

  state.minutes = state.minutes + 5;
  timer.updateDisplay(state.minutes, state.seconds)
}

export function decrementoAction(iconSvg) {
  let testeClass;
  if(testeStttus != iconSvg.dataset.action && !testeClass){
    document.documentElement.classList.remove('running')
    resetColor()

    testeClass = document.documentElement.classList.toggle("running")

    if (testeClass){
        defineIcon(iconSvg, "#02799D")
        setTimeout(resetColor, 200)
     }
  }


  if (state.minutes > 0) {
    state.minutes = state.minutes - 5;
    timer.updateDisplay(state.minutes, state.seconds)
  }
}
