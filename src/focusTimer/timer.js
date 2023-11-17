import state from './state.js';
import * as elementos from './elementsButton.js'

export function countDown(){
  clearTimeout(state.countdownId)
  
    if(!state.isRunning){
        return
    }
  let minutes = Number(elementos.minutes.textContent)
  let seconds = Number(elementos.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    return
  }

  updateDisplay(minutes, seconds)
  state.countdownId = setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    elementos.minutes.textContent = String(minutes).padStart(2, '0')
    elementos.seconds.textContent = String(seconds).padStart(2, '0')
}
