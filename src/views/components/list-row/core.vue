<style scoped lang="stylus" rel="stylesheet/stylus">
  .list-row {
    &::after {
      content: "."; clear: both; display: block; overflow: hidden; visibility: hidden; height: 0; font-size: 0;
    }
  }
</style>

<script>
export default {
  name: 'VeListRow',

  componentName: 'VeListRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gap: Number,
    unit: {
      type: String,
      default: 'px'
    }
  },

  computed: {
    style () {
      const style = {}

      if (this.gap) {
        style.marginLeft = `-${this.gap / 2}this.unit`
        style.marginRight = style.marginLeft
      }

      return style
    }
  },

  render (h) {
    return h(this.tag, {
      class: [
        'list-row'
      ],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
