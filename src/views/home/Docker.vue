<template>
  <div class="docker">
    <!--<editor-fold desc="正常HTML结构书写">-->
<!--    <span class="docker_item docker_item&#45;&#45;active">-->
<!--      <div class="iconfont">&#xe600;</div>-->
<!--      <div class="docker_title">首页</div>-->
<!--    </span>-->
<!--    <span class="docker_item">-->
<!--      <div class="iconfont">&#xe6af;</div>-->
<!--      <div class="docker_title">购物车</div>-->
<!--    </span>-->
<!--    <span class="docker_item">-->
<!--      <div class="iconfont">&#xebbc;</div>-->
<!--      <div class="docker_title">订单</div>-->
<!--    </span>-->
<!--    <span class="docker_item">-->
<!--      <div class="iconfont">&#xe78b;</div>-->
<!--      <div class="docker_title">我的</div>-->
<!--    </span>-->
    <!--</editor-fold>-->

    <div
      v-for="(item, index) in dockerList"
      :key="item.icon"
      :class="{'docker_item': true, 'docker_item--active': index === 0}"
      class="docker_item"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker_title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe600;', text: '首页' },
      { icon: '&#xe6af;', text: '购物车' },
      { icon: '&#xebbc;', text: '订单' },
      { icon: '&#xe78b;', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/viriables";

.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColo;
  color: $content-fontcolor;
  // & 符号 代表 .docker
  &_item { // .docker_item
    flex: 1;
    text-align: center;

    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }

    &--active { // .docker_item--active
      color: #1FA4FC;
    }
  }

  &_title {
    font-size: .1rem;
    transform: scale(.5 .5);
    transform-origin: center top;
  }
}
</style>
