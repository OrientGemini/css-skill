<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/mixin.styl'
  
  /* flex容器属性 开始 */
  .flex-row
    width: 100%
    flex-box()

  /* 规定flex项目在水平方向上的对齐方式 */
  .align-items-start
    align-items-start()
  .align-items-center
    align-items-center()
  .align-items-end
    align-items-end()

  /* 规定flex项目在垂直方向上的对齐方式 */
  .justify-content-start
    justify-content-start()
  .justify-content-center
    justify-content-center()
  .justify-content-end
    justify-content-end()

  /* 规定flex项目的方向为row */
  .flex-direction-row
    flex-direction-row()
  /* 规定flex项目的方向为column */
  .flex-direction-column
    flex-direction-column()
  /* flex容器属性 结束 */

  .has-gap-col {padding: 0 .3rem;}
  .height-60x {min-height: .60rem;}
  .height-88x {min-height: .88rem;}
  .height-100x {min-height: 1rem;}
  .height-110x {min-height: 1.1rem;}
</style>

<template>
  <div class="flex-row"
    :class="[
      justifyContentClass,
      alignItemsClass,
      heightNClass,
      flexDirectionClass,
      {
        'has-gap-col': hasGapCol
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VeRow',

  props: {
    /* 规定flex项目在水平方向上的对齐方式 */
    justifyContent: {
      type: String,
      default: ''
    },
    /* 规定flex项目在垂直方向上的对齐方式 */
    alignItems: {
      type: String,
      default: 'stretch'
    },
    hasGapCol: {
      type: Boolean,
      default: false
    },
    heightN: {
      type: Number,
      default: 0
    },
    flexDirection: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
    }
  },

  computed: {
    alignItemsClass () {
      let className
      switch (this.alignItems) {
        case 'start':
          className = 'align-items-start'
          break
        case 'center':
          className = 'align-items-center'
          break
        case 'end':
          className = 'align-items-end'
          break
        default:
          className = ''
          break
      }

      return className
    },
    justifyContentClass () {
      let className
      switch (this.justifyContent) {
        case 'start':
          className = 'justify-content-start'
          break
        case 'center':
          className = 'justify-content-center'
          break
        case 'end':
          className = 'justify-content-end'
          break
        default:
          className = ''
          break
      }

      return className
    },
    heightNClass () {
      let className
      let str = '' + this.heightN

      if (this.heightN && str) {
        className = `height-${str}x`
      } else {
        className = ''
      }

      return className
    },
    flexDirectionClass () {
      let className
      switch (this.flexDirection) {
        case 'row':
          className = 'flex-direction-row'
          break
        case 'column':
          className = 'flex-direction-column'
          break
        default:
          className = ''
          break
      }

      return className
    }
  }
}
</script>
