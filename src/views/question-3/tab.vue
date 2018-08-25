<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/mixin.styl'
  @import '~@/assets/style/var.styl'
  
  .tab {
    flex-box()
    width: 100%
    background: $bg-color-auxiliary
    color: $text-color-lightest
  }
  .tab-item {
    flex-n(1)
    .tab-item-inner { position: relative; margin: 0 .44rem; border-top-left-radius: .22rem; border-top-right-radius: .22rem; padding: .2rem 0;
      &::before,
      &::after { content: ''; display: none; position: absolute; bottom: 0; width: .44rem; height: .44rem; }
      &::before { left: -.44rem; }
      &::after { right: -.44rem; }
    }
    &.checked {
      .tab-item-inner { background: $bg-color-primary-lighten-20;
        &::before,
        &::after { display: block; }
        &::before {
          /* 不支持渐变，默认颜色 */
          background: $no-color;
          /* 老语法 */
          background: -webkit-gradient(
                        radial, 0 0, 0, 0 0, 62,
                        from($bg-color-primary-alpha-0),
                        to($bg-color-primary-lighten-20),
                        color-stop(.7, $bg-color-primary-alpha-0),
                        color-stop(.71, $bg-color-primary-lighten-20)
                      ) no-repeat top left;
          /* 新语法 */
          background: -webkit-radial-gradient(
                        top left, circle,
                        $bg-color-primary-alpha-0 70%,
                        $bg-color-primary-lighten-20 71%,
                        $bg-color-primary-lighten-20 0
                      ) no-repeat top left;
          /* 标准语法 */
          background: radial-gradient(
                        circle at top left,
                        $bg-color-primary-alpha-0 70%,
                        $bg-color-primary-lighten-20 71%,
                        $bg-color-primary-lighten-20 0
                      ) no-repeat top left;
        }
        &::after {
          /* 不支持渐变，默认颜色 */
          background: $no-color;
          /* 老语法 */
          background: -webkit-gradient(
                        radial, 100% 0, 0, 100% 0, 62,
                        from($bg-color-primary-alpha-0),
                        to($bg-color-primary-lighten-20),
                        color-stop(.7, $bg-color-primary-alpha-0),
                        color-stop(.71, $bg-color-primary-lighten-20)
                      ) no-repeat top right;
          /* 新语法 */
          background: -webkit-radial-gradient(
                        top right, circle,
                        $bg-color-primary-alpha-0 70%,
                        $bg-color-primary-lighten-20 71%,
                        $bg-color-primary-lighten-20 0
                      ) no-repeat top right;
          /* 标准语法 */
          background: radial-gradient(
                        circle at top right,
                        $bg-color-primary-alpha-0 70%,
                        $bg-color-primary-lighten-20 71%,
                        $bg-color-primary-lighten-20 0
                      ) no-repeat top right;
        }
      }
    }
  }
</style>

<template>
  <div class="tab fs-32x">
    <div class="tab-item"
      v-for="item in list"
      @click="check(item)"
      :class="[
        { 'checked': item.checked }
      ]">
      <div class="tab-item-inner text-center">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',

  data () {
    return {
      list: [
        {
          title: '火车票',
          code: '1',
          checked: true
        },

        {
          title: '机票',
          code: '2',
          checked: false
        }
      ]
    }
  },

  methods: {
    check (item) {
      this.list.map((item) => item.checked = false)
      this.$set(item, 'checked', true)
    }
  }
}
</script>
