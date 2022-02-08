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
    <!--<editor-fold desc="抽离Shopinfo组件前代码">-->
<!--    <div class="nearby_item"-->
<!--         v-for="item in nearbyList"-->
<!--         :key="item._id">-->
<!--      <img :src="item.imgUrl" alt="" class="nearby_item_img">-->
<!--      <div class="nearby_content">-->
<!--        <div class="nearby_content_title">{{ item.name }}</div>-->
<!--        <div class="nearby_content_tags">-->

<!--          <span class="nearby_content_tag">月售: {{item.sales}}</span>-->
<!--          <span class="nearby_content_tag">起送: {{item.expressLimit}}</span>-->
<!--          <span class="nearby_content_tag">基础运费: {{item.expressPrice}}</span>-->

<!--        </div>-->
<!--        <p class="nearby_content_highlight">{{ item.slogan }}</p>-->
<!--      </div>-->
<!--    </div>-->
    <!--</editor-fold>-->
    <router-link v-for="item in nearbyList"
                 :to="`/shop/${item._id}`"
                 :key="item._id">
      <ShopInfo :item="item"></ShopInfo>
    </router-link>

  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    // region
    // const nearbyList = [
    //   {
    //     id: 1,
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售1万+', '起送¥0', '基础运费¥5'],
    //     desc: 'VIP尊享满89元减4元运费券（每月3张）'
    //   },
    //   {
    //     id: 2,
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售1万+', '起送¥0', '基础运费¥5'],
    //     desc: 'VIP尊享满89元减4元运费券（每月3张）'
    //   },
    //   {
    //     id: 3,
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
    //     title: '沃尔玛',
    //     tags: ['月售1万+', '起送¥0', '基础运费¥5'],
    //     desc: 'VIP尊享满89元减4元运费券（每月3张）'
    //   }
    // ]
    // endregion

    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
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
  a {
    text-decoration: none;
  }
}
</style>
