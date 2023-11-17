import './src/cards/eventsCards.js'

import * as focusTimer from "./src/focusTimer/index.js"
import states from "./src/focusTimer/state.js"

focusTimer.start(states.minutes,states.seconds)