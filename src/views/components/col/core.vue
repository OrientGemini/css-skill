<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/mixin.styl'
  
  /* flex容器属性 开始 */
  .descendant-flex
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

  /* flex项目属性 开始 */
  /*flex项目份数*/
  .flex-1
    flex-n(1)
  .flex-2
    flex-n(2)
  .flex-3
    flex-n(3)
  .flex-4
    flex-n(4)
  .flex-5
    flex-n(5)
  .flex-6
    flex-n(6)
  .flex-7
    flex-n(7)
  .flex-8
    flex-n(8)
  .flex-9
    flex-n(9)
  .flex-10
    flex-n(10)
  .flex-11
    flex-n(11)
  .flex-12
    flex-n(12)

  /* 规定flex项目自身在垂直方向上的对齐方式 */
  .align-self-start
    align-self-start()
  .align-self-center
    align-self-center()
  .align-self-end
    align-self-end()
  /* flex项目属性 结束 */

  .has-gap-row {padding: .1rem 0;}
</style>

<template>
  <div class="flex-col"
    :class="[
      flexNClass,
      alignSelfClass,
      flexDirectionClass,
      {
        'has-gap-row': hasGapRow
      }
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VeCol',

  props: {
    /* 规定flex项目自身在水平方向上的对齐方式 */
    flexN: {
      type: Number,
      default: 0
    },
    alignSelf: {
      type: String,
      default: 'start'
    },
    hasGapRow: {
      type: Boolean,
      default: false
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
    alignSelfClass () {
      let className
      switch (this.vFlex) {
        case 'start':
          className = 'align-self-start'
          break
        case 'center':
          className = 'align-self-center'
          break
        case 'end':
          className = 'align-self-end'
          break
        default:
          className = ''
          break
      }

      return className
    },
    flexNClass () {
      let className
      let str = '' + this.flexN

      if (this.flexN && str) {
        className = `flex-${str}`
      } else {
        className = ''
      }

      return className
    },
    flexDirectionClass () {
      let className
      switch (this.hFlex) {
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
