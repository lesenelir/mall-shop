<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Toast',
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })
  // 登录、请求失败处理函数（显示相关内容）
  const showToast = (message) => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 3000)
  }

  const { show, toastMessage } = toRefs(toastData)

  return { show, toastMessage, showToast }
}

</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: #FFF;
}
</style>
