<template>
  <div class="content-box">
    <!--预约情况-->
    <div v-show="DialogYyqk" class="dialog-box">
      <div class="box">
        <i class="icon-close" v-on:click="DialogYyqk = false"></i>
        <div class="yyqk-box">
          <ul class="title-box">
            <li>姓名</li>
            <li>手机号</li>
            <li>预约日期</li>
            <li>预约码</li>
          </ul>
          <ul class="con-box">
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>15258092978</span>
              <span>2015-08-20 10:00</span>
              <span>4523</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--电话录音-->
    <div v-show="DialogDhly" class="dialog-box">
      <div class="box">
        <i class="icon-close" v-on:click="DialogDhly = false"></i>
        <div class="dhly-box">
          <ul class="title-box">
            <li>姓名</li>
            <li>录音时间</li>
            <li>录音</li>
          </ul>
          <ul class="con-box">
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
            <li>
              <span>张晓晓</span>
              <span>2015-08-20 10:00</span>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="title">
      重庆市九龙坡区锦虹一路1号7幢11-3号的房屋{{$route.params.id}}
    </div>
    <div class="container-first">
      <div class="yyqk box" v-on:click="DialogYyqk = true">
        <i></i>
        <div class="tit">预约情况</div>
      </div>
      <div class="dhly box" v-on:click="DialogDhly = true">
        <i></i>
        <div class="tit">电话录音</div>
      </div>
    </div>
    <div class="container-second">
      <i></i><b>钥匙情况：</b><span>钥匙入库</span>
    </div>
    <div class="container-third">
      <i></i>
      <div class="box">
        <div class="tit">车辆情况</div>
        <div class="son"><span>车辆出库时间：</span><span>2018-06-26 11:15</span></div>
        <div class="son"><span>车辆入库时间：</span><span>2018-06-28 11:15</span></div>
        <div class="son">
          <span>天&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数：</span><span>2天</span>
        </div>
      </div>
    </div>
    <div class="container-fourth" v-on:click="changeHandlingStatus">
      房产是否要搬运 （是）
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      DialogYyqk: false,
      DialogDhly: false
    }
  },
  methods: {
    changeHandlingStatus () {
      console.log('1')
    }
  }
}
</script>

<style scoped lang="scss">
  .content-box {
    position: relative;
    padding: 0 .32rem;
    width: auto;
    height: 100%;
    background-color: #dff3f7;
    .dialog-box {
      position: absolute;
      width: 9.59rem;
      top: 1.45rem;
      height: 80%;
      left: 50%;
      margin-left: -4.76rem;
      background-color: #fff;
      z-index: 9;
      .box {
        width: 100%;
        height: 100%;

        position: relative;
        .icon-close {
          background: url("../../static/icon_close.png") center top no-repeat;
          background-size: .57rem .57rem;
          position: absolute;
          left: 0;
          top: -.285rem;
          width: .57rem;
          height: .57rem;
          display: block;
          z-index: 9;
        }
        .dhly-box {
          width: 100%;
          height: 100%;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;
          .con-box {
            width: 100%;
            text-align: center;
            li {
              height: .95rem;
              line-height: .95rem;
              border-bottom: 1px solid #dff3f7;
              display: flex;
              span:nth-child(1) {
                flex: 1;
              }
              span:nth-child(2) {
                flex: 1.4;
              }
              span:nth-child(3) {
                flex: .6;
              }
              span:not(:last-child) {
                font-size: .2rem;
                border-right: 1px solid #dff3f7;
              }
              span:last-child {
                background: url("../../static/icon_ly.png") center center no-repeat;
                background-size: .44rem .44rem;
              }
            }
          }
          .title-box {
            width: 100%;
            text-align: center;
            height: 1.11rem;
            line-height: 1.11rem;
            display: flex;
            border-bottom: 2px solid #dff3f7;
            font-size: .35rem;
            li:nth-child(1) {
              flex: 1;
            }
            li:nth-child(2) {
              flex: 1.4;
            }
            li:nth-child(3) {
              flex: .6;
            }
            li:not(:last-child) {
              border-right: 1px solid #dff3f7;
            }
          }
        }
        .yyqk-box {
          width: 100%;
          height: 100%;
          overflow: scroll;
          -webkit-overflow-scrolling: touch;
          .con-box {
            width: 100%;
            text-align: center;
            li {
              height: .95rem;
              line-height: .95rem;
              border-bottom: 1px solid #dff3f7;
              display: flex;
              span:nth-child(1) {
                flex: .7;
              }
              span:nth-child(2) {
                flex: 1.2;
              }
              span:nth-child(3) {
                flex: 1.5;
              }
              span:nth-child(4) {
                flex: .6;
              }
              span:not(:last-child) {
                font-size: .2rem;
                border-right: 1px solid #dff3f7;
              }
              span:last-child {
                color: #ff9600;
              }
            }
          }
          .title-box {
            width: 100%;
            text-align: center;
            height: 1.11rem;
            line-height: 1.11rem;
            display: flex;
            border-bottom: 2px solid #dff3f7;
            font-size: .35rem;
            li:nth-child(1) {
              flex: .7;
            }
            li:nth-child(2) {
              flex: 1.2;
            }
            li:nth-child(3) {
              flex: 1.5;
            }
            li:nth-child(4) {
              flex: .6;
            }
            li:not(:last-child) {
              border-right: 1px solid #dff3f7;
            }
          }
        }
      }
    }
    .title {
      line-height: 1.46rem;
      font-size: .41rem;
      color: #373737;
    }
    .container-first {
      width: 9.52rem;
      overflow: hidden;
      margin-bottom: .16rem;
      .box {
        width: 4.68rem;
        height: 2.54rem;
        border-radius: 5px;
        i {
          width: .83rem;
          height: .89rem;
          margin: .38rem auto .35rem auto;
          display: block;
          background: center top no-repeat;
          background-size: .83rem .89rem;
        }
        .tit {
          color: #fff;
          font-size: .44rem;
          text-align: center;
        }
      }
      .yyqk {
        background-color: #f8825c;
        float: left;
        i {
          background-image: url("../../static/icon_yyqk.png");
        }
      }
      .dhly {
        background-color: #9eed63;
        float: right;
        i {
          background-image: url("../../static/icon_dhly.png");
        }
      }
    }
    .container-second {
      width: 9.52rem;
      height: 2.22rem;
      line-height: 2.22rem;
      color: #fff;
      background-color: #00aea6;
      border-radius: 5px;
      margin-bottom: .16rem;
      i {
        margin-left: 1.03rem;
        margin-top: .6rem;
        float: left;
        width: .89rem;
        height: .89rem;
        background: url("../../static/icon_key.png") center top no-repeat;
        background-size: .89rem .89rem;
      }
      b {
        font-size: .44rem;
        float: left;
        font-weight: bold;
        margin-left: .73rem;
      }
      span {
        font-size: .41rem;
        float: left;
      }
    }
    .container-third {
      width: 9.52rem;
      height: 3.81rem;
      background-color: #3092eb;
      border-radius: 5px;
      margin-bottom: .16rem;
      i {
        margin-left: 1.03rem;
        margin-top: .6rem;
        float: left;
        width: .95rem;
        height: .86rem;
        background: url("../../static/icon_car.png") center top no-repeat;
        background-size: .95rem .86rem;
      }
      .box {
        margin-left: .73rem;
        float: left;
        color: #fff;
        .tit {
          margin-top: .65rem;
          font-size: .44rem;
          font-weight: bold;
          line-height: .79rem;
        }
        .son {
          font-size: .35rem;
          line-height: .63rem;
        }
      }
    }
    .container-fourth {
      width: 9.52rem;
      color: #fff;
      height: 1.59rem;
      font-size: .44rem;
      text-align: center;
      line-height: 1.59rem;
      background-color: #3dc2e6;
      border-radius: 5px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
