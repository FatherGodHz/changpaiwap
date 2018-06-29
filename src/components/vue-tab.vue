<template>
  <div class="tab-container">
    <div class="tab-container-box">
      <ul class="tab-title-container">
        <li class="tab-title" v-for="(item,index) in tabPanels" :class="{'active': index+1===currentPage}" :key="index" @click="setPage(index+1)">{{item.title}}</li>
      </ul>
      <div v-if="slidable" class="tabswiper" :class="{'invisible':invisible}" @touchstart="_onTouchStart">
        <div class="tabswiper-wrap" ref="tabswiper-wrap" :class="{'dragging': dragging}"
             :style="{'transform' : 'translate3d(' + translateX + 'px,0, 0)'}" @transitionend="_onTransitionEnd">
          <slot></slot>
        </div>
      </div>
      <div v-else class="tabswiper" :class="{'invisible':invisible}">
        <div class="tabswiper-wrap" ref="tabswiper-wrap" :class="{'dragging': dragging}"
             :style="{'transform' : 'translate3d(' + translateX + 'px,0, 0)'}" @transitionend="_onTransitionEnd">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
// 下面这段非注释,如果不添加eslint将会在编辑器和编译工具报错、
/* eslint-disable */
const JUDGE_INITIAL = 0
const JUDGE_SLIDEING = 1
const JUDGE_SCROLLING = 2
const replaceAll = (str, target, replace) => {
  let reg = '/' + target + '/g'
  reg = eval(reg)
  return str.replace(reg, replace)
}

const addClass = (el, className) => {
  if (!className) {
    return false
  }
  className = className.trim('').replace(/\s+/, ' ').split(' ')
  el.className += ' ' + className.join(' ')
  return true
}

const removeClass = (el, className) => {
  if (!className) {
    return false
  }
  className = className.trim('').replace(/\s+/, ' ').split(' ')
  var cls = ' ' + el.className + ' '
  className.forEach(function (item) {
    item = ' ' + item
    cls = replaceAll(cls, item, ' ')
  })
  el.className = cls.trim()
  return true
}
export default {
  props: {
    tabPanels: {
      type: Array,
      default: []
    },
    curPage: {
      type: Number,
      default: 1
    },
    slidable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    curPage: function (val) {
      this.setPage(val)
    }
  },
  data () {
    return {
      lastPage: 1,
      currentPage: this.curPage,
      translateX: 0,
      startTranslateX: 0,
      delta: 0,
      deltaY: 0,
      dragging: false,
      startPos: null,
      startPosY: null,
      transitioning: false,
      slideEls: [],
      invisible: true,
      judge: JUDGE_INITIAL
    }
  },
  mounted () {
    this.$nextTick(function () {
      this._onTouchMove = this._onTouchMove.bind(this)
      this._onTouchEnd = this._onTouchEnd.bind(this)
      this.slideEls = this.$refs['tabswiper-wrap'].children
      this.dragging = true
      this.setPage(this.currentPage)
      let _this = this
      setTimeout(() => {
        _this.dragging = _this.invisible = false
      }, 100)
      window.onresize = () => {
        _this.setPage(_this.currentPage)
      }
    })
  },
  methods: {
    next () {
      var page = this.currentPage
      if (page < this.slideEls.length) {
        page++
        this.setPage(page)
      } else {
        this._revert()
      }
    },
    prev () {
      var page = this.currentPage
      if (page > 1) {
        page--
        this.setPage(page)
      } else {
        this._revert()
      }
    },
    setPage (page) {
      this.lastPage = this.currentPage
      this.currentPage = page
      this.translateX = -[].reduce.call(this.slideEls, function (total, el, i) {
        return i > page - 2 ? total : total + el['clientWidth']
      }, 0)
      this._onTransitionStart()
    },
    _onTouchStart (e) {
      this.startPos = this._getTouchPos(e)
      this.startYPos = this._getTouchYPos(e)
      this.delta = 0
      this.startTranslateX = this.translateX
      this.startTime = new Date().getTime()
      this.dragging = true
      document.addEventListener('touchmove', this._onTouchMove, false)
      document.addEventListener('touchend', this._onTouchEnd, false)
    },
    _onTouchMove (e) {
      this.delta = this._getTouchPos(e) - this.startPos
      this.deltaY = Math.abs(this._getTouchYPos(e) - this.startYPos)
      switch (this.judge) {
        case JUDGE_INITIAL:
          // if (Math.abs(this.delta) > 20 && this.deltaY<25) {//judge to allow/prevent scroll
          if (Math.abs(this.delta) / this.deltaY > 1.5) {
            this.judge = JUDGE_SLIDEING
            e.preventDefault()
            e.stopPropagation()
          } else {
            this.judge = JUDGE_SCROLLING
          }
          break
        case JUDGE_SCROLLING:
          break
        case JUDGE_SLIDEING:
          e.preventDefault()
          e.stopPropagation()
          this.translateX = this.startTranslateX + this.delta
          break
        default:
          break
      }
    },
    _onTouchEnd (e) {
      this.dragging = false
      if (this.judge === JUDGE_SLIDEING) {
        var isQuickAction = new Date().getTime() - this.startTime < 1000
        if (this.delta < -100 || (isQuickAction && this.delta < -15 && this.deltaY / this.delta > -6)) {
          this.next()
        } else if (this.delta > 100 || (isQuickAction && this.delta > 15 && this.deltaY / this.delta < 6)) {
          this.prev()
        } else {
          this._revert()
        }
      }
      this.judge = JUDGE_INITIAL
      document.removeEventListener('touchmove', this._onTouchMove)
      document.removeEventListener('touchend', this._onTouchEnd)
    },
    _revert () {
      this.setPage(this.currentPage)
    },
    _getTouchPos (e) {
      var key = 'pageX'
      return e.changedTouches ? e.changedTouches[0][key] : e[key]
    },
    _getTouchYPos (e) {
      var key = 'pageY'
      return e.changedTouches ? e.changedTouches[0][key] : e[key]
    },
    _onTransitionStart () {
      this.transitioning = true
      if (this._isPageChanged()) {
        this.$emit('tab-change-start', this.currentPage);
        // FIX:remove the height of the hidden tab-items
        [].forEach.call(this.slideEls, (item, index) => {
          if (index === (this.currentPage - 1)) {
            removeClass(item, 'hide-height')
          } else {
            addClass(item, 'hide-height')
          }
        })
      } else {
        this.$emit('tab-revert-start', this.currentPage)
      }
    },
    _onTransitionEnd (e) {
      e.stopPropagation()
      if (e.target.className !== 'tabswiper-wrap') return
      this.transitioning = false
      if (this._isPageChanged()) {
        this.$emit('tab-change-end', this.currentPage)
      } else {
        this.$emit('tab-revert-end', this.currentPage)
      }
    },
    _isPageChanged () {
      return this.lastPage !== this.currentPage
    }
  }
}
</script>

<style scoped lang="scss">
  .tab-container {
    width: 100%;
    .tab-container-box {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .tab-title-container {
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      .tab-title {
        flex: 1;
        height: .95rem;
        position: relative;
        text-align: center;
        line-height: .95rem;
        background-color: #fff;
      }
      .tab-title:not(:last-child) {
        margin-right: .03rem;
      }
      .tab-title.active, .tab-title:active {
        font-weight: bold;
        color: #3eb2c9;
      }
    }
    .invisible {
      visibility: hidden;
    }
    .tabswiper {
      position: absolute;
      top: 1.25rem;
      bottom: 0;
      overflow-y: scroll;
      .tabswiper-wrap {
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: all 0.2s ease;
        flex-direction: row;
        .hide-height {
          height: 0;
        }
      }
      .tabswiper-wrap.dragging {
        transition: none;
      }
    }
  }
</style>
