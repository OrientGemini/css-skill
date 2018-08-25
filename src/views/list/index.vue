<style scoped lang="stylus" rel="stylesheet/stylus">
  .list {}
</style>

<template>
  <div class="list">
    <div class="example">
      <ul class="example-list">
        <li class="bg-active-1th"
          v-for="item in list"
          :key="item.id"
          @click="selectItem(item)">
          <ve-row align-items="center"
            :has-gap-col="true"
            :height-n="88">
            <ve-col class="col-1th"
              :flex-n="10"
              :has-gap-row="true">
              <h4 class="text-color-base"
                v-text="item.title"></h4>
            </ve-col>
            <ve-col class="col-2th text-right"
              :flex-n="2"
              :has-gap-row="true">
              <p>
                <i class="iconfont icon-arrow-right-1th"></i>
              </p>
            </ve-col>
          </ve-row>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VeRow from '../components/row'
import VeCol from '../components/col'

export default {
  name: 'List',

  components: {
    VeRow,
    VeCol
  },

  data () {
    return {
      list: [
        {
          title: '第2张图',
          url: 'question/2'
        },
        {
          title: '第3张图',
          url: 'question/3'
        },
        {
          title: '第4张图',
          url: 'question/4'
        },
        {
          title: '第5张图',
          url: 'question/5'
        }
      ]
    }
  },

  methods: {
    selectItem (item) {
      this.$router.push({
        path: item.url
      })
    }
  }
}
</script>
