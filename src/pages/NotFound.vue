<template>
  <div class="notfound">
    <div class="error"></div>
    <div class="etext">页面不存在！</div>
    <router-link to="/list">
      <button class="backList">返回主页</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .error {
    width: 200px;
    height: 200px;
    margin: 120px auto 10px auto;
    background: url('../../static/error.png') -10px center no-repeat;
    background-size: 100%;
  }

  .etext {
    text-align: center;
    color: #555;
  }

  .backList {
    margin: 2rem auto;
    width: 3rem;
    display: block;
    height: 1rem;
    background-color: #fc7e7f;
    color: #fff;
    border: 0;
  }
</style>
