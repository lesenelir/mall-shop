<template>
  <div class="position">
    <span class="iconfont position_icon">&#xe630;</span>
    暨南大学南海楼
    <span class="iconfont position_notice">&#xe66a;</span>
  </div>

  <div class="search">
    <span class="iconfont">&#xe67d;</span>
    <span class="search_text">会员商店优惠商品</span>
  </div>

  <div class="banner">
    <img src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" class="banner_img">
    <!--      <img src="./assets/imgs/1.png" alt="" class="banner_img">-->
  </div>

  <div class="icons">
    <!--<editor-fold desc="正常HTML结构书写">-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/超市.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">超市便利</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/菜市场.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">菜市场</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/水果店.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">水果店</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/鲜花.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">鲜花绿植</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/医药健康.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">医药健康</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/家居.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">家居时尚</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">烘焙蛋糕</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/签到.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">签到</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">大牌免运</p>-->
    <!--    </div>-->
    <!--    <div class="icons_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/红包.png" alt="" class="icons_item_img">-->
    <!--      <p class="icons_item_desc">红包套餐</p>-->
    <!--    </div>-->
    <!--</editor-fold>-->
    <div class="icons_item" v-for="item in iconsList" :key="item.desc">
      <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" alt="" class="icons_item_img">
      <p class="icons_item_desc">{{ item.desc }}</p>
    </div>
  </div>

  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return {
      iconsList
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/viriables";
@import "../../style/mixins";

.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  color: $content-fontcolor;

  .position_icon { // .position .positio_icon
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }

  .position_notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}

.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;
  font-size: .14rem;

  .iconfont {
    position: relative;
    top: .02rem;
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .19rem;
  }

  &_text {
    display: inline-block;
    font-size: .14rem;
  }
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%; // 防止抖动，图片没加载完，就自动撑开图片区域，防止文字内容下移
  &_img {
    //width: 100%;
    width: 3.39rem;
    height: 0.86rem;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;

  &_item {
    width: 20%;

    &_img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }

    &_desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColo;
}
</style>
