<template>
  <div class="home">
    <header class="header">
      <h2 class="text-center">
        CSS中的那些雕虫小技-2
      </h2>
    </header>

    <div class="btn-container">
      <ve-button
        :nth="2"
        size="large"
        shape="rounded"
        :is-block="true"
        @click="look">查看</ve-button>
    </div>
  </div>
</template>

<script>

import VeButton from './components/button'

export default {
  name: 'Home',

  components: {
    VeButton
  },

  data () {
    return {
      list: [
        {
          title: '第一张图-1'
        }
      ]
    }
  },

  methods: {
    look () {
      this.$router.push({
        path: '/list'
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .heght-88x {height: .88rem;}

  .home {
    .header {padding: 1rem .3rem 0.6rem;}
    .btn-container {padding: 0.6rem;}
  }
</style>
