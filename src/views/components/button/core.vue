<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/mixin.styl'
  @import '~@/assets/style/var.styl'
  
  /* 按钮通用样式 */
  .btn {display: inline-block; border-radius: 0; text-align: center; line-height: 1; background-clip: padding-box; transition(all, .2s, linear);}
  .btn .iconfont {color: inherit;}

  /* 按钮-颜色 开始 */
  .btn-0th {background-color: transparent; color: #333;}
  .btn-0th:active {background-color: #eee;}
  .btn-1th {background-color: $text-color-primary; color: #fff;}
  .btn-1th:active {background-color: #c30;}
  .btn-2th {background-color: $text-color-auxiliary; color: #fff;}
  .btn-2th:active {background-color: #093;}
  .btn-3th {background-color: #fff; color: #333;}
  .btn-3th:active {background-color: #eee;}
  .btn-12th {background-color: $text-color-placeholder; color: #fff;}
  .btn-12th:active {background-color: #000;}
  /* 按钮-颜色 结束 */

  /* 按钮-尺寸 开始 */
  .btn-tiny {padding: .08rem .12rem; font-size: .24rem;}
  .btn-small {padding: .16rem .24rem; font-size: .28rem;}
  .btn-medium {padding: .18rem .28rem; font-size: .32rem;}
  .btn-large {padding: .28rem .3rem; font-size: .36rem;}
  .btn-huge {padding: .36rem .3rem; font-size: .36rem;}
  /* 按钮-尺寸 结束 */

  /* 按钮-形状 开始 */
  /* 默认形状为矩形 */
  /* 圆角 */
  /* 圆角rounded，圆角矩形rounded rectangle的缩写 */
  .btn-rounded {border-radius: .3em;}
  /* 胶囊 */
  /* 像胶囊一样的形状 */
  .btn-capsule {border-radius: 2em;}
  /* 按钮-形状 结束 */

  /* 按钮-边框 开始 */
  /* 不支持currentColor关键字的，指定一个默认的颜色 */
  .has-border {border: 1px solid #333; border: 1px solid currentColor;}
  .has-border:active {background: #333; background: currentColor;}
  .has-border:active .btn-text {color: #fff;}
  .has-border:active .iconfont {color: #fff;}
  /* 按钮-边框 结束 */

  /* 按钮-无按下去效果 开始 */
  .btn-no-active:active {background-color: transparent;}
  .btn-no-active:active  .btn-text {color: currentColor;}
  /* 按钮-无按下去效果 结束 */

  /* 按钮-禁用 开始 */
  .btn-disabled,
  .btn-disabled:active {background-color: #ccc !important; color: #fff !important;}
  /* 不支持currentColor关键字的，指定一个默认的颜色 */
  .has-border.btn-disabled:active .btn-text {color: #fff; color: currentColor;}
  /* 按钮-禁用 结束 */

  /* 按钮-块级 开始 */
  .btn-block {display: block; width: 100%;}
  /* 按钮-块级 结束 */

  /* 按钮-有icon 开始 */
  .has-icon {padding: 0 .3rem;}
  .has-icon .btn-icon {vertical-align: middle;}
  .has-icon.btn-tiny {height: .44rem; line-height: .44rem;}
  .has-icon.btn-small {height: .6rem; line-height: .6rem;}
  .has-icon.btn-medium {height: .8rem; line-height: .8px;}
  .has-icon.btn-large {height: .88rem; line-height: .88rem;}
  .has-icon.btn-huge {height: 1.1rem; line-height: 1.1rem;}
  /* 按钮-有icon 结束 */
</style>

<template>
  <!-- 因为与better-scroll配合时，click事件button会执行两次，所以暂时将<button>标签改为<span>标签 -->
  <span class="btn"
      :class="[nthClass, sizeClass, shapeClass, {
        'btn-block': isBlock,
        'has-border': hasBorder,
        'has-icon': hasIcon,
        'btn-disabled': disabled
      }, fontSizeClass, colorClass]"
      @click="handleClick">
      <span class="btn-icon" v-if="hasIcon">
        <slot v-if="$slots.icon" name="icon"></slot>
      </span>
      <label class="btn-text">
        <slot></slot>
      </label>
  </span>
</template>

<script>
export default {
  name: 'VeButton',

  props: {
    nth: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'small',
      validator (value) {
        return [
          'tiny',
          'small',
          'medium',
          'large',
          'huge'
        ].indexOf(value) > -1
      }
    },
    shape: {
      type: String,
      default: '',
      validator (value) {
        return [
          '',
          'rounded',
          'capsule'
        ].indexOf(value) > -1
      }
    },
    hasBorder: {
      type: Boolean,
      default: false
    },
    isBlock: {
      type: Boolean,
      default: false
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fontSizeN: {
      type: Number,
      default: 0
    },
    colorNth: {
      type: Number,
      default: -1
    }
  },

  data () {
    return {
    }
  },

  computed: {
    nthClass () {
      let result = 'btn-' + this.nth + 'th'
      return result
    },
    sizeClass () {
      let result = 'btn-' + this.size
      return result
    },
    shapeClass () {
      let result
      if (this.shape) {
        result = 'btn-' + this.shape
      } else {
        result = ''
      }
      return result
    },
    fontSizeClass () {
      let n = this.fontSizeN
      let result

      if (n >= 24 && n <= 40) {
        result = 'fs-' + n + 'x'
      } else {
        result = ''
      }

      return result
    },
    colorClass () {
      let n = this.colorNth
      let result

      if (n > 0) {
        result = 'color-' + n + 'th'
      } else {
        result = ''
      }

      return result
    }
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
