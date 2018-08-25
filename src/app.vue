<style scoped lang="stylus" rel="stylesheet/stylus">
  @import './assets/style/mixin.styl'
  /*.app {position: fixed; top: 0; right: 0; bottom: 0; left: 0; overflow: hidden;}*/
  .view {position: relative; transition: all .5s cubic-bezier(.55,0,.1,1); }
  .slide-left-enter,
  .slide-right-leave-active,
  .slide-left-leave-active,
  .slide-right-enter
    overflow: hidden
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    opacity: 0

  .slide-left-enter,
  .slide-right-leave-active
    translate-3d(100%, 0, 0)
  .slide-left-leave-active,
  .slide-right-enter
    translate-3d(-100%, 0, 0)
</style>
<template>
  <div id="app" class="app">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      transitionName: 'slide-left'
    }
  },

  /* 监听路由的路径，可以通过不同的路径去选择不同的切换效果 */
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>
