import { controlsButtons } from "./elementsButton.js";
import * as actions from "./actionsButtons.js";

export function registerButtons() {

  controlsButtons.addEventListener("click", (event) => {
    const element = event.target.closest('svg');
    
    const action = element.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action](element);
  
  });

}