<template>
  <div class="login-box">
    <div class="login-logo">
      <img src="../../static/login_tit.png">
    </div>
    <form class="login" @submit.stop.prevent="login">
      <label>
        <i class="icon icon-user"></i>
        <input type="tel" v-model="username" placeholder="请输入手机号">
      </label>
      <label>
        <i class="icon icon-password"></i>
        <input type="password" v-model="password" placeholder="请输入密码">
      </label>
      <button class="btn-submit" type="submit">登&nbsp;&nbsp;录</button>
    </form>
  </div>
</template>

<script>
import Qs from 'qs'
import Axios from '../http/httpAxios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      msg: '',
      token: ''
    }
  },
  mounted () {
    this.$store.commit('title', 'Login')
  },
  methods: {
    login () {
      let self = this
      Axios({
        method: 'post',
        url: '/api/judge/authorizations',
        data: {
          username: this.username,
          password: this.password
        },
        transformRequest: [function (data) {
          data = Qs.stringify(data)
          return data
        }],
        withCredentials: false
      }).then(function (response) {
        if (response.data.access_token) {
          self.$store.commit('login', response.data.access_token)
          let redirect = decodeURIComponent(self.$route.query.redirect || '/')
          self.$router.push({
            path: redirect
          })
        }
      })
        .catch(function (error) {
          self.$vux.toast.text(error.message, 'middle')
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .login-box {
    height: 100%;
    background: url("../../static/login_bg.jpg") center top no-repeat;
    background-size: cover;
    .login-logo {
      width: 3.81rem;
      height: 3.16rem;
      margin: 0 auto;
      padding-top: 1.65rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login {
      width: 8.19rem;
      margin: 0 auto;
      padding-top: 1.05rem;
      label {
        width: 100%;
        height: 1.11rem;
        display: block;
        background-color: #fff;
        border-radius: 50px;
        margin-bottom: 0.7rem;
        .icon {
          float: left;
          margin-left: .71rem;
          margin-top: .32rem;
          height: .48rem;
          width: .44rem;
          background: center top no-repeat;
          background-size: contain;
        }
        .icon-user {
          background-image: url("../../static/icon_user.png");
        }
        .icon-password {
          background-image: url("../../static/icon_password.png");
        }
        input {
          background: none;
          border: 0;
          height: 100%;
          float: left;
          margin-left: .48rem;
          font-size: .41rem;
        }
      }
      .btn-submit {
        width: 100%;
        height: 1.27rem;
        border-radius: 50px;
        background-color: #3ab2c7;
        border: 0;
        color: #fff;
        font-size: 0.48rem;
      }
    }
  }
</style>
