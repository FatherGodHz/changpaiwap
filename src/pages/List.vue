<template>
  <div class="list-box">
    <div class="user-header">
      <span class="user-name">{{user.name}}</span><span class="user-court">{{user.court}}</span><span
      class="user-phone">({{user.phone}})</span>
    </div>
    <tab :tabPanels="tabPanels" :current-page="3" :slidable="false" class="tab-box">
      <div class="tab-content-container">
        <card :list="list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list"></card>
      </div>
      <div class="tab-content-container">
        <card :list="list"></card>
      </div>
    </tab>
  </div>
</template>

<script>
import tab from '../components/vue-tab'
import card from '../components/vue-card'

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
        name: '刘茗兮',
        court: '浙江省杭州市中级人民法院',
        phone: '15258092978'
      },
      list: [
        {
          title: '重庆市九龙坡区锦虹一路1号7幢11-3号的房屋',
          image: '../../static/test.jpg',
          status: 0
        },
        {
          title: '重庆市九龙坡区锦虹一路1号7幢11-3号的房屋',
          image: '../../static/test.jpg',
          status: 1
        },
        {
          title: '重庆市九龙坡区锦虹一路1号7幢11-3号的房屋',
          image: '../../static/test.jpg',
          status: 2
        },
        {
          title: '重庆市九龙坡区锦虹一路1号7幢11-3号的房屋',
          image: '../../static/test.jpg',
          status: 3
        },
        {
          title: '重庆市九龙坡区锦虹一路1号7幢11-3号的房屋',
          image: '../../static/test.jpg',
          status: 0
        },
        {
          title: '重庆市九龙坡区锦虹一路1号7幢11-3号的房屋',
          image: '../../static/test.jpg',
          status: 0
        },
        {
          title: '重庆市九龙坡区锦虹一路1号7幢11-3号的房屋',
          image: '../../static/test.jpg',
          status: 0
        }
      ]
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
