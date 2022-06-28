<template>
  <div style="height:100%;position:reative;">
    <qrcode-stream @decode="decode" @init="logErrors"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";

export default {
  setup() {},

  data() {
    const options = [{ text: "nothing (default)", value: undefined }];

    const selected = options[1];
    return {
      options,
      selected,
      qrvalue: "",
    };
  },

  components: {
    QrcodeStream,
  },

  methods: {
    logErrors(promise) {
      promise.catch(console.error);
    },

    decode(decodedString) {
      this.qrvalue = decodedString;
			console.log(this.qrvalue);
			
    },
  },
};
</script>

<style>
</style>