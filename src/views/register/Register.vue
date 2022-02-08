<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper_img">
    <div class="wrapper_input">
      <input type="text"
             class="wrapper_input_content"
             placeholder="请输入用户名"
             v-model="username">
    </div>
    <div class="wrapper_input">
      <input type="password"
             class="wrapper_input_content"
             placeholder="请输入密码"
             autocomplete="new-password"
             v-model="password">
    </div>
    <div class="wrapper_input">
      <input type="password"
             class="wrapper_input_content"
             placeholder="确认密码"
             v-model="ensure">
    </div>
    <div class="wrapper_register-button" @click="handleRegister">注册</div>
    <div class="wrapper_register-link" @click="handleLoginClick">已有账号去登录</div>

    <Toast v-if="show" :message="toastMessage"></Toast>

  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

// 处理注册相关数据逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensure: ''
  })
  const handleRegister = async () => {
    try {
      const { user, password, ensure } = data
      // 发送请求前，判断输入的用户名、密码、确认密码 不能为空
      if (user === '' || password === '' || ensure === '') {
        showToast('输入内容不能为空')
      } else {
        // 发送请求
        const result = await post('/api/user/register', {
          username: data.username,
          password: data.password
        })
        if (result?.errno === 0) { // 成功
          router.push({ name: 'Login' })
        } else {
          showToast('注册失败')
        }
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensure } = toRefs(data)
  return {
    username, password, ensure, handleRegister
  }
}

// 处理已有账号去登录相关逻辑
const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: {
    Toast
  },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, ensure, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()

    return {
      username, password, ensure, show, toastMessage, handleRegister, handleLoginClick
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../style/viriables";

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &_img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }

  &_input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: .06rem;

    &_content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &_register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: #F9F9F9;
    font-size: .16rem;
    text-align: center;
  }

  &_register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }

}
</style>
