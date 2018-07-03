<template>
  <div class="list-box">
    <div class="user-header">
      <span class="user-name">{{user.name}}</span><span class="user-court">{{user.court}}</span><span
      class="user-phone">({{user.phone}})</span>
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
import { Tab, TabItem, Swiper, SwiperItem } from 'vux'

export default {
  name: 'Login',
  components: {
    card,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
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
    .user-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 1.75rem;
      line-height: 1.75rem;
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
      top: 1.78rem;
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
      top: 3.05rem;
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

</style>
