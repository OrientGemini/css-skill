<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/var.styl'
  
  .question-3 { padding-bottom: .6rem;
  }
</style>

<template>
  <div class="question-3">
    <tab></tab>
    <div class="tab-content">
      <div class="train">
        <ve-list-row>
          <ve-list-col v-for="item in trainList"
            :col-count=2
            :key="item.id">
              <div class="train-row">
                <div v-text="item.fromTime"></div>
                <div v-text="item.trainNum"></div>
                <div v-text="item.toTime"></div>
              </div>
              <ve-list-row class="seat-row">
                <ve-list-col v-for="subitem in item.seats"
                  :col-count=2
                  :key="subitem.id">
                  <span v-text="subitem.name"></span>
                  <span v-text="subitem.price"></span>
                </ve-list-col>
              </ve-list-row>
            </ve-list-col>
        </ve-list-row>
      </div>
    </div>
  </div>
</template>

<script>
import tab from './tab'
import VeListRow from '../components/list-row'
import VeListCol from '../components/list-col'
import trainList from './train-list'

export default {
  name: 'Question3',

  components: {
    tab,
    VeListRow,
    VeListCol
  },

  data () {
    return {
      trainList: trainList
    }
  },

  methods: {
  }
}
</script>
