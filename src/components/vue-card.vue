<template>
  <div class="card-box">
    <div class="card" v-for="(item,index) in list" :key="index">
      <router-link :to="{ name: 'Content', params: { id: item.id }}">
        <img :src="axios.defaults.baseURL + item.image">
        <div class="info">
          <div class="title">{{item.title}}</div>
          <div class="status">{{status[item.status]}}</div>
          <div class="button">查看详情</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-card',
  props: {
    list: Array,
    default: []
  },
  data () {
    return {
      status: [
        '排期中',
        '可预约',
        '预约结束',
        '拍卖结束'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .card-box {
    padding: 0 .3rem;
    width: auto;
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .card {
      width: 9.52rem;
      height: 3.33rem;
      margin: 0 auto .32rem auto;
      img {
        width: 3.98rem;
        height: 3.33rem;
        float: left;
      }
      .info {
        padding: .38rem;
        width: 4.78rem;
        height: 2.57rem;
        float: right;
        background-color: #fff;
        position: relative;
        .title {
          line-height: .48rem;
          font-size: .35rem;
        }
        .status {
          color: #828282;
          height: .89rem;
          line-height: .89rem;
          font-size: .25rem;
          position: absolute;
          bottom: 1.11rem;
        }
        .button {
          color: #fff;
          width: 4.78rem;
          height: .73rem;
          text-align: center;
          font-size: .29rem;
          line-height: .73rem;
          background-color: #e7252c;
          position: absolute;
          bottom: .38rem;
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
