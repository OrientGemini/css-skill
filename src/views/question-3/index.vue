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
  
  .question-3 { padding: .88rem 0 .6rem;
    .tab { position: fixed; top: 0; right: 0; left: 0; z-index: 2; }
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
    .hotel-ticket {
      .hotel-list { padding: .2rem 0;
        .item { padding: .2rem;
          &:not(:first-child) { margin-top: .2rem; }
          .thumbnail { padding: .1rem .2rem .1rem 0;
            img { display: block; width: 2rem; height: 2rem; }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="question-3">
    <tab :list="tab.list" @check="tab.check"></tab>
    <div class="tab-content">
      <!-- 火车票 开始 -->
      <div class="train-ticket" v-if="tab.checkedItem.code === '1'">
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
      <!-- 酒店 开始 -->
      <div class="hotel-ticket" v-if="tab.checkedItem.code === '2'">
        <ul class="hotel-list">
          <li class="item bg-color-lightest clearfix" v-for="item in hotelList">
            <div class="thumbnail fl">
              <img src="@/assets/images/thumbnail-1.jpg">
            </div>
            <div class="text">
              <h4 class="text-ellipsis fs-32x text-color-primary" v-text="item.title"></h4>
              <div class="fs-24x text-color-light">
                <div>
                  <span class="text-color-auxiliary">
                    <span v-text="item.score"></span>
                    <span v-text="item.scoreDesc"></span>
                    <span>分</span>
                  </span>
                  <span>
                    <span v-text="item.commentNum"></span>
                    <span>条评论</span>
                  </span>
                </div>
                <div>
                  <span v-text="item.typeDesc"></span>
                  <span class="text-color-primary" v-text="item.recentBooking"></span>
                </div>
                <div v-text="item.desc"></div>
                <ve-row align-items="center">
                  <ve-col :flex=1>
                    <p class="text-color-primary" v-text="item.costPerformance"></p>
                  </ve-col>
                  <ve-col :flex=1 class="text-right">
                    <p>
                      <span class="text-color-primary fs-24x">&yen;</span>
                      <span class="text-color-primary fs-36x" v-text="item.minPprice"></span>
                      起
                    </p>
                  </ve-col>
                </ve-row>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 酒店 开始 -->
    </div>
  </div>
</template>

<script>
import tab from './tab'
import VeRow from '../components/row'
import VeCol from '../components/col'
import VeListRow from '../components/list-row'
import VeListCol from '../components/list-col'
import trainList from './train-list'
import hotelList from './hotel-list'

export default {
  name: 'Question3',

  components: {
    tab,
    VeRow,
    VeCol,
    VeListRow,
    VeListCol
  },

  data () {
    return {
      tab: {
        checkedItem: {},
        list: [
          {
            title: '火车票',
            code: '1',
            checked: false
          },

          {
            title: '酒店',
            code: '2',
            checked: true
          }
        ],
        check: (item) => {
          this.tab.checkedItem = item
        }
      },
      trainList: trainList,
      hotelList: hotelList
    }
  },

  methods: {
  },

  mounted () {
    this.tab.check(this.tab.list[1])
  }
}
</script>
