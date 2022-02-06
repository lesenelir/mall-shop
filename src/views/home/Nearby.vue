<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <!--<editor-fold desc="正常HTML结构书写">-->
    <!--    <div class="nearby_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="nearby_item_img">-->
    <!--      <div class="nearby_content">-->
    <!--        <div class="nearby_content_title">沃尔玛</div>-->
    <!--        <div class="nearby_content_tags">-->
    <!--          <span class="nearby_content_tag">月售1万+</span>-->
    <!--          <span class="nearby_content_tag">起送¥0</span>-->
    <!--          <span class="nearby_content_tag">基础运费¥5</span>-->
    <!--        </div>-->
    <!--        <p class="nearby_content_highlight">VIP尊享满89元减4元运费券（每月3张）</p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="nearby_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="nearby_item_img">-->
    <!--      <div class="nearby_content">-->
    <!--        <div class="nearby_content_title">沃尔玛</div>-->
    <!--        <div class="nearby_content_tags">-->
    <!--          <span class="nearby_content_tag">月售1万+</span>-->
    <!--          <span class="nearby_content_tag">起送¥0</span>-->
    <!--          <span class="nearby_content_tag">基础运费¥5</span>-->
    <!--        </div>-->
    <!--        <p class="nearby_content_highlight">VIP尊享满89元减4元运费券（每月3张）</p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="nearby_item">-->
    <!--      <img src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" class="nearby_item_img">-->
    <!--      <div class="nearby_content">-->
    <!--        <div class="nearby_content_title">沃尔玛</div>-->
    <!--        <div class="nearby_content_tags">-->
    <!--          <span class="nearby_content_tag">月售1万+</span>-->
    <!--          <span class="nearby_content_tag">起送¥0</span>-->
    <!--          <span class="nearby_content_tag">基础运费¥5</span>-->
    <!--        </div>-->
    <!--        <p class="nearby_content_highlight">VIP尊享满89元减4元运费券（每月3张）</p>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--</editor-fold>-->

    <div class="nearby_item" v-for="item in nearbyList" :key="item.id">
      <img :src="item.imgUrl" alt="" class="nearby_item_img">
      <div class="nearby_content">
        <div class="nearby_content_title">{{ item.title }}</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag"
                v-for="(innerItem, innerIndex) in item.tags"
                :key="innerIndex"
          >
            {{ innerItem }}
          </span>
        </div>
        <p class="nearby_content_highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 3,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]

    return {
      nearbyList
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/viriables";

.nearby {
  &_title {
    margin: .16rem 0 .14rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  &_item {
    display: flex;

    &_img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }

  &_content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 0.01rem solid $content-bgColo;

    &_title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }

    &_tags {
      margin-top: .18rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }

    &_tag {
      margin-right: .16rem;
    }

    &_highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}
</style>
