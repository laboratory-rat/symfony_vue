<template>
  <div>
    <!-- <form-wizard>
      <tab-content title="Email">
        <email-step />
      </tab-content>
    </form-wizard>-->
    <form-wizard>
      <tab-content>
        <step-email />
      </tab-content>
      <tab-content title="Additional Info">My second tab content</tab-content>
      <tab-content title="Last step">Yuhuuu! This seems pretty damn simple</tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import StepEmail from "./wizard-step/email.step.component";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  components: {
    FormWizard,
    TabContent,
    StepEmail
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.vform-box {
  .button-box {
    margin-top: 80px;
  }
}
</style>