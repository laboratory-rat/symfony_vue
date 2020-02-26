<template>
  <div>
    <button @click="counter++">I am button {{counter}}</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    counter: 0
  })
};
</script>