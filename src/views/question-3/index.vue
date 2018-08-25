<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/var.styl'
  @import './concave-1.styl'
  @import './concave-2.styl'
  @import './concave-3.styl'
  @import './concave.styl'

  .icon-half-arrow {position: relative; width: 0; height: .5rem; margin: auto; border-left: .02rem solid $border-color-base;}
  .icon-half-arrow.bottom::before {
    content: ""; position: absolute; left: -.02rem; bottom: -.02rem;
    border: .04rem solid $border-color-base;
    border-bottom-color: transparent; border-right-color: transparent;
    transform: skew(0, -60deg);
  }
  
  .question-3 { padding-bottom: .6rem;
    .train-ticket {
      overflow: hidden;
      & > .list-row { margin: 0 -.1rem; padding: .1rem .2rem;
        & > .list-col {
          padding: .1rem;
        }
      }
      .train-row,
      .seat-row { padding: .2rem; }
      .hr { margin: 0 .2rem; }
      .on { position: relative; padding: .1rem .1rem .1rem .6rem;
        .icon-half-arrow { position: absolute;  top: 50%; left: .3rem; margin-top: -.25rem; }
      }
    }
  }
</style>

<template>
  <div class="question-3">
    <tab></tab>
    <div class="tab-content">
      <!-- 火车票 开始 -->
      <div class="train-ticket">
        <ve-list-row tag="ul">
          <ve-list-col v-for="item in trainList"
            tag="li"
            :col-count=2
            :key="item.id">
              <div class="item-inner">
                <div class="train-row concave concave-all">
                  <div class="from">
                    <span class="fs-58x text-color-auxiliary" v-text="item.fromTime"></span>
                    <span class="fs-28x" v-text="item.fromStation"></span>
                  </div>
                  <div class="on">
                    <div class="fs-28x" v-text="item.trainNum"></div>
                    <div class="icon-half-arrow bottom"></div>
                  </div>
                  <div class="to">
                    <span class="fs-58x" v-text="item.toTime"></span>
                    <span class="fs-28x" v-text="item.toStation"></span>
                  </div>
                </div>
                <div class="hr thin-border-top dashed"></div>
                <ve-list-row class="seat-row concave concave-all">
                  <ve-list-col v-for="subitem in item.seats"
                    :col-count=2
                    :key="subitem.id">
                    <span class="fs-20x" v-text="subitem.name"></span>
                    <span class="fs-20x text-color-primary">&yen;</span>
                    <span class="fs-24x text-color-primary" v-text="subitem.price"></span>
                  </ve-list-col>
                </ve-list-row>
              </div>
            </ve-list-col>
        </ve-list-row>
      </div>
      <!-- 火车票 结束 -->
      <!-- 机票 开始 -->
      <div class="plane-ticket">
        
      </div>
      <!-- 机票 开始 -->
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
