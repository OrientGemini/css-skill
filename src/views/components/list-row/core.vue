<style scoped lang="stylus" rel="stylesheet/stylus">
  .list-row {
    &::after {
      content: "."; clear: both; display: block; overflow: hidden; visibility: hidden; height: 0; font-size: 0;
    }
  }
</style>

<template>
  <div class="list-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VeListRow',

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
  }
}
</script>
