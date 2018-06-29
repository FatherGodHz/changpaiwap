<template>
  <div class="list-box">
    <div class="user-header">
      <span class="user-name">{{user.name}}</span><span class="user-court">{{user.court}}</span><span
      class="user-phone">({{user.phone}})</span>
    </div>
    <tab :tabPanels="tabPanels" :current-page="3" :slidable="false" class="tab-box">
      <div class="tab-content-container">
        <card :list="list[0].list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list[1].list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list[2].list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list[3].list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list[4].list"></card>
      </div>
    </tab>
  </div>
</template>

<script>
import tab from '../components/vue-tab'
import card from '../components/vue-card'
import Axios from '../http/httpAxios'

export default {
  name: 'Login',
  components: {
    tab,
    card
  },
  data () {
    return {
      tabPanels: [
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
          alert(error.message)
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
          alert(error.message)
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
          alert(error.message)
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
    .tab-box {
      position: fixed;
      top: 1.78rem;
      margin-top: .03rem;
      bottom: 0;
      .tab-content-container {
      }
    }
  }
</style>
