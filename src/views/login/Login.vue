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
             v-model="password"
             autocomplete="new-password">
    </div>
    <div class="wrapper_login-button" @click="handleLogin">登录</div>
    <div class="wrapper_login-link" @click="handleRegisterClick">立即注册</div>

    <Toast v-if="show" :message="toastMessage"></Toast>

  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

// 处理登录相关逻辑
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      // 发送请求前进行校验 用户名和密码是否为空
      const { user, password } = data
      if (user === '' || password === '') {
        showToast('用户名或密码不能为空')
      } else {
        // 发送请求
        const result = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })
        if (result?.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' }) // 路由实例的push方法
        } else {
          showToast('登录失败')
        }
      }
      // // 发送请求
      // const result = await post('/api/user/login', {
      //   username: data.username,
      //   password: data.password
      // })
      // if (result?.errno === 0) {
      //   localStorage.isLogin = true
      //   router.push({ name: 'Home' }) // 路由实例的push方法
      // } else {
      //   showToast('登录失败')
      // }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return {
    username, password, handleLogin
  }
}

// 处理去注册相关逻辑
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}

export default {
  name: 'Login',
  components: {
    Toast
  },
  // setup函数是代码执行的一个流程
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()

    return {
      username, password, show, toastMessage, handleLogin, handleRegisterClick
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

  &_login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: .04rem;
    color: #F9F9F9;
    font-size: .16rem;
    text-align: center;
  }

  &_login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }

}
</style>
