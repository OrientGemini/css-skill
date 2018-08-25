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

<template>
  <div class="list-col"
    :class="[
      colCountClass
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VeListCol',

  props: {
    colCount: {
      type: Number,
      default: 0
    }
  },

  computed: {
    colCountClass () {
      let className

      if (this.colCount && this.colCount > 0) {
        className =  `col-${this.colCount}`
      } else {
        className = ''
      }

      return className
    }
  }
}
</script>
