import { controlsCards } from "./elemtos.js";
import * as actions from "./actionsCards.js";

export function registerControls() {

  controlsCards.addEventListener("click", (event) => {
    const element = event.target.closest('svg');
    
    const action = element.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action](element);
    
  });

}

registerControls();
