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

  get SUCCESS() {
    return "success";
  }

  get FAILED() {
    return "failed";
  }

  get APPROVED() {
    return "approved";
  }

  get REJECTED() {
    return "rejected";
  }

  get NOT_SUPPORTED() {
    return "not_supported";
  }

  async requestPermission() {
    if (this.usable === false) {
      return this.NOT_SUPPORTED;
    }
    const result = await this._messaging
      .requestPermission()
      .then(() => true)
      .catch(err => {
        // エラーのときは拒否されているとき
        console.error(err);
        return false;
      });
    return result ? this.APPROVED : this.REJECTED;
  }
}
