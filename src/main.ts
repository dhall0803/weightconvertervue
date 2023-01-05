import { createApp, VueElement } from "vue";
import App from "./App.vue";

import { library } from '@fortawesome/fontawesome-svg-core'

import { faWeightScale } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "./assets/main.css";
library.add(faWeightScale)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
