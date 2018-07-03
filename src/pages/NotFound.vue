<template>
  <div class="notfound">
    <div class="etext">啊啊啊~404黑洞出现了！<br>太倒霉了，万年一遇的黑洞被你碰上了！</div>
    <router-link to="/">
      <button class="backList">返回首页</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .notfound {
    width: 100%;
    height: 100%;
    background: url('../../static/error_bg.png') center top no-repeat #02a8ac;
    background-size: contain;
  }

  .etext {
    text-align: center;
    color: #fff;
    width: 8.41rem;
    font-size: 0.44rem;
    line-height: 0.6rem;
    margin: 0 auto;
    padding-top: 9.21rem;
  }

  .backList {
    margin: 1.17rem auto 0 auto;
    width: 3rem;
    display: block;
    height: 1rem;
    background-color: #fff;
    color: #000;
    border: 0;
    border-radius: 50px;
    font-size: .38rem;
  }
</style>
