import Vue from "vue";
import Firebase from "./plugins/firebase";

import { appConfig, messagingConfig } from "./configs/firebase-config";

Vue.use(Firebase, {
  appConfig,
  messagingConfig
});
