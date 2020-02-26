<template>
  <div class="bb">
    <div class="vform-box">
      <div class="vform-input-box">
        <label class="vform-input-label">Deine Email Adresse</label>
        <input class="vform-input-field" type="email" />
      </div>
      <div class="button-box">
        <button class="vform-box-next center">Weiter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wizard-step-email",
  data: () => ({}),
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
.bb .vform-box {
  .button-box {
    margin-top: 80px;
  }
}
</style>