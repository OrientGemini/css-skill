<style scoped lang="stylus" rel="stylesheet/stylus">
  .list-col {
    float: left;
    &.col-2 { width: 50%; }
    &.col-3 { width: 33.33333333%; }
    &.col-4 { width: 25%; }
    &.col-5 { width: 20%; }
    &.col-6 { width: 16.66666667%; }

    &.col-2:nth-child(2n+1),
    &.col-3:nth-child(3n+1),
    &.col-4:nth-child(4n+1),
    &.col-5:nth-child(5n+1),
    &.col-6:nth-child(6n+1) { clear: left; }
  }
</style>

<script>
export default {
  name: 'VeListCol',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    colCount: {
      type: Number,
      default: 0
    }
  },

  computed: {
    colCountClass () {
      let className

      if (this.colCount && this.colCount > 0) {
        className = `col-${this.colCount}`
      } else {
        className = ''
      }

      return className
    },
    gap () {
      let parent = this.$parent
      while (parent && parent.$options.componentName !== 'VeListRow') {
        parent = parent.$parent
      }
      return parent ? parent.gap : 0
    },
    unit () {
      let parent = this.$parent

      while (parent && parent.$options.componentName !== 'VeListRow') {
        parent = parent.$parent
      }

      return parent ? parent.unit : 'px'
    }
  },

  render (h) {
    let classList = []
    let style = {}

    if (this.gap) {
      style.paddingLeft = this.gap / 2 + this.unit
      style.paddingRight = style.paddingLeft
    }

    if (this.colCountClass) {
      classList.push(this.colCountClass)
    }

    return h(this.tag, {
      class: ['list-col', classList],
      style
    }, this.$slots.default)
  }
}
</script>
