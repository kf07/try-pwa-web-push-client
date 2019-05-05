<template>
  <div class="home">
    <h1>Try PWA Push</h1>
    <section>
      <h2>Env Information</h2>

      <p>
        <span>Web Push:</span>
        <span>{{ webPushUsable | usable }}</span>
      </p>
    </section>
    <section>
      <h2>Actions</h2>
      <div>
        <button
          :disabled="!webPushUsable"
          type="button"
          @click="handleClickUse"
        >
          Use web push
        </button>
      </div>

      <p v-if="hasMessage">Message:{{ message }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      message: ""
    };
  },
  filters: {
    usable: flg => (flg === true ? "⭕" : "❌")
  },
  computed: {
    webPushUsable: vm => vm.$_webPush.usable,
    hasMessage: vm => vm.message.length > 0
  },
  methods: {
    async handleClickUse() {
      const result = await this.$_webPush.requestPermission();
      if (result === this.$_webPush.REJECTED) {
        this.message =
          "プッシュ通知は拒否されています。サイト情報を表示からステータスをご確認ください。";
        return;
      }
    }
  }
};
</script>
