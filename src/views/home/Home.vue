<template>
  <div class="wrapper">
    <StaticPart></StaticPart>
    <Nearby></Nearby>
  </div>

  <!-- 底部 -->
  <Docker></Docker>
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'

export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: .5rem;
  left: 0;
  padding: 0 .18rem .1rem .18rem;
  overflow-y: auto;
}
</style>
