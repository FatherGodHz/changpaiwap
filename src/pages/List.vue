<template>
  <div class="list-box">
    <div v-transfer-dom>
      <x-dialog v-model="isChangePassword" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <group title="密码修改">
            <x-input title="请输入密码" type="text" placeholder="" v-model="password" :min="6" :max="12"></x-input>
            <x-input title="请确认密码" v-model="password2" type="text" placeholder="" :equal-with="password"></x-input>
          </group>
          <div @click="changePwd">
            <x-button type="warn">确认修改</x-button>
          </div>
        </div>
        <div @click="isChangePassword = false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
    <div class="user-header">
      <span class="user-name">{{user.name}}</span><span class="user-court">{{user.court}}</span><span
      class="user-phone">({{user.phone}})</span>
    </div>
    <div class="user-changeInfo">
      <span class="changePwd" @click="isChangePassword = true">修改密码</span><span class="logout" @click="logout">退出</span>
    </div>
    <tab :line-width=0 active-color='#3eb2c9' bar-active-color="#ffffff" v-model="index">
      <tab-item class="vux-center" v-for="(item, index) in list2" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" height="auto" :show-dots="false">
      <swiper-item v-for="(item, index) in list2" :key="index">
        <div class="tab-swiper vux-center">
          <card :list="list[index].list"></card>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Axios from '../http/httpAxios'
import card from '../components/vue-card'
import {
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  XDialog,
  TransferDomDirective as TransferDom,
  XInput,
  Group,
  XButton,
  Cell
} from 'vux'

export default {
  name: 'List',
  directives: {
    TransferDom
  },
  components: {
    card,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    XDialog,
    XInput,
    Group,
    XButton,
    Cell
  },
  data () {
    return {
      isChangePassword: false,
      password: '',
      password2: '',
      index: 0,
      list2: [
        '房产',
        '机动车',
        '土地',
        '资产',
        '股权'
      ],
      user: {
        name: null,
        court: null,
        phone: null
      },
      list: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]
    }
  },
  created () {
    this.getCategory()
    this.getList()
    this.getUser()
  },
  methods: {
    async changePwd () {
      let self = this
      self.$vux.loading.show({
        transition: '',
        text: '处理中...'
      })
      await Axios({
        method: 'put',
        url: '/api/judge/user/changePwd',
        params: {
          password: self.password,
          password_confirmation: self.password2
        },
        withCredentials: false
      }).then(function (response) {
        self.$vux.toast.text(response.data.message, 'middle')
      })
        .catch(function (error) {
          self.$vux.toast.text(error.message, 'middle')
        })
      self.$vux.loading.hide()
      self.isChangePassword = false
      self.password = ''
      self.password2 = ''
    },
    logout () {
      this.$store.commit('logout')
      this.$router.push({
        path: '/login'
      })
    },
    getUser () {
      let self = this
      Axios({
        method: 'get',
        url: '/api/judge/user',
        withCredentials: false
      }).then(function (response) {
        self.user = response.data
      })
        .catch(function (error) {
          self.$vux.toast.text(error.message, 'middle')
        })
    },
    getCategory () {
      let self = this
      Axios({
        method: 'get',
        url: '/api/judge/index',
        withCredentials: false
      }).then(function (response) {
        self.tabPanels = response.data.data
      })
        .catch(function (error) {
          self.$vux.toast.text(error.message, 'middle')
        })
    },
    getList () {
      let self = this
      Axios({
        method: 'get',
        url: '/api/judge/index/list',
        withCredentials: false
      }).then(function (response) {
        self.list = response.data.data
      })
        .catch(function (error) {
          self.$vux.toast.text(error.message, 'middle')
        })
    }
  }
}
</script>

<style scoped lang="scss">
  .list-box {
    width: 100%;
    height: 100%;
    background-color: #dff3f7;
    position: relative;
    .user-changeInfo {
      height: .95rem;
      line-height: .7rem;
      width: 100%;
      position: fixed;
      top: 1.43rem;
      left: 0;
      background-color: #fff;
      span {
        margin-left: .4rem;
        padding-left: .52rem;
      }
      .changePwd {
        background: url("../../static/icon_changepwd.png") left center no-repeat;
        background-size: .4rem .4rem;
      }
      .logout {
        background: url("../../static/icon_logout.png") left center no-repeat;
        background-size: .4rem .4rem;
      }
    }
    .user-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 1.43rem;
      line-height: 1.6rem;
      background-color: #fff;
      span {
        margin-right: .38rem;
      }
      .user-name {
        color: #373737;
        font-size: .48rem;
        margin-left: .4rem;
      }
      .user-court {
        font-size: .32rem;
        color: #828282;
      }
      .user-phone {
        color: #828282;
      }
    }
    .vux-tab-wrap {
      position: fixed;
      width: 100%;
      top: 2.41rem;
      height: .95rem;
      padding: 0;
      .vux-tab-selected {
        font-weight: bold;
      }
      .vux-tab-item {
        background: #fff;
        line-height: .95rem;
        font-size: .38rem;
        color: #000;
      }
      .vux-tab-item:not(:last-child) {
        margin-right: .03rem;
      }
    }
    .vux-slider {
      position: fixed;
      top: 3.7rem;
      bottom: 0;
      width: 100%;
      .vux-swiper-item {
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
      }
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

</style>

<style lang="less" scoped>
  .dialog-demo {
    .vux-close {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      color: #999;
      width: 24px;
      height: 24px;
      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 11px;
        width: 24px;
        height: 1px;
        background-color: currentColor;
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
    .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      /*height: 350px;*/
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
    .weui-btn {
      width: 100%;
      border-radius: 0;
      background-color: #e7252c;
    }
  }
</style>

<style>
  .list-box .vux-tab-container {
    height: .95rem;
  }

  .vux-swiper {
    height: 100% !important;
  }

  .list-box .scrollable {
    padding-bottom: 0;
  }

  .list-box .vux-tab {
    background: none;
    height: .95rem;
  }

  .weui-label {
    font-size: 14px;
  }

  .weui-label {
    color: #999;
  }

  .img-box .weui-cells__title {
    font-size: 16px;
    color: #000000;
  }
</style>
