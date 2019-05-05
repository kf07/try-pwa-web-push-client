export class WebPush {
  constructor({ firebaseMessaging, publicKey }) {
    this._usable = firebaseMessaging !== null;
    this._messaging = firebaseMessaging;

    if (this.usable === false) {
      return this;
    }
    this._messaging.usePublicVapidKey(publicKey);
    return this;
  }

  get usable() {
    return this._usable;
  }
}
