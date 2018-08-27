<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/var.styl'
  @import './multiple-circles-loader.styl'
  @import './multiple-circles-loader-2.styl'
  
  .question-2 { padding-bottom: .6rem;
    .header { padding: .12rem .4rem;
      .title { display: inline-block; position: relative; margin: 0 .6rem;
        &::before,
        &::after { content: ''; position: absolute; top: 50%; margin-top: -.05rem;
          border-radius: 50%;  width: .1rem; height: .1rem; background: $bg-color-primary;
        }
        &::before { left: -.25rem;
          box-shadow: -.2rem 0 0 0 $bg-color-primary-lighten-40,
            -.4rem 0 0 0 $bg-color-primary-lighten-80;
        }
        &::after { right: -.25rem;
          box-shadow: .2rem 0 0 0 $bg-color-primary-lighten-40,
            .4rem 0 0 0 $bg-color-primary-lighten-80;
        }
      }
    }
    .sublist { padding: .2rem .3rem; color: $text-color-lighter;
      .subitem { position: relative;
        .subtitle { position: relative; }
        &:not(:last-child) { padding-bottom: .5rem; }
        /*&:not(last-child) { padding-bottom: .5rem; background: $bg-color-primary; }*/
        &::before,
        .subtitle::before { content: ''; position: absolute; right: 0; }
        &::before { top: .14rem; height: 100%; border-right: .04rem dashed $text-color-disabled; }
        &:last-child::before { display: none; }
        .subtitle::before { top: .14rem; margin-right: -.06rem; border-radius: 50%;
          width: .16rem; height: .16rem; background: $bg-color-disabled;
        }
        &.passed { color: $text-color-base;
          &::before { border-right-color: $text-color-auxiliary; }
          .subtitle::before { background: $bg-color-auxiliary; }
        }
        &.current { color: $text-color-base;
          &::before { border-right-color: $text-color-auxiliary; }
          .subtitle::before { top: .16rem;
            margin-right: -.04rem; width: .12rem; height: .12rem;
            box-shadow: 0 0 0 .02rem $bg-color-lightest,
                        0 0 0 .04rem $bg-color-auxiliary;
            /*box-shadow: 0 0 0 .02rem $bg-color-lightest,
                        0 0 0 .04rem $bg-color-auxiliary,
                        0 0 0 .06rem $bg-color-lightest,
                        0 0 0 .08rem $bg-color-auxiliary;
            box-shadow: 0 0 0 .02rem $bg-color-lightest,
                        0 0 0 .04rem $bg-color-primary,
                        0 0 0 .06rem $bg-color-lightest,
                        0 0 0 .08rem $bg-color-auxiliary;*/
            background: $bg-color-auxiliary;
          }
        }
      }
    }
  }

 /* .multiple-circles-container { padding: .8rem; }*/
  .multiple-circles {
    margin: .8rem;
    border-radius: 50%; width: .2rem; height: .2rem;
    box-shadow: -.2rem -.3rem 0 0 $bg-color-auxiliary,
    .2rem -.3rem 0 0 $bg-color-auxiliary,
    -.2rem .3rem 0 0 $bg-color-auxiliary,
    .2rem .3rem 0 0 $bg-color-auxiliary;
    background: $bg-color-primary;
  }

  .css-position { position: relative;
    margin: .2rem; border: .2rem solid #f00; padding: .2rem; width: 2rem; height: 2rem;
    box-sizing: border-box;
    background: #0f0;
    .absolute { position: absolute; top: 10px; left: 0; right: 0; bottom: 0; background: #000; }
  }
</style>

<template>
  <div class="question-2">
    <div class="css-position" v-if="true">
      <div class="absolute"></div>
    </div>
    <ul class="list" v-if="true">
      <li v-for="(item, index) in list"
        :key="item.id">
        <header class="header">
          <h4 class="title text-color-primary fs-24x">
            闯关者：
            <span v-text="item.person"></span>
          </h4>
        </header>
        <ul class="sublist bg-color-lightest">
          <li class="subitem"
            v-for="(subitem, subindex) in item.checkpoints"
            :class="[
              {'passed': subitem.passed, 'current': subitem.current}
            ]"
            :key="subitem.id">
            <h5 class="subtitle fs-32x"> 
              第{{numMap[subindex + 1]}}关：
              <span v-text="subitem.place"></span>
            </h5>
            <p class="time-container">
              <time class="time" v-text="subitem.time"></time>
            </p>
          </li>
        </ul>
      </li>
    </ul>
      <div class="multiple-circles" v-if="false"></div>
    <div class="multiple-circles-loader" v-if="false"></div>
    <div class="multiple-circles-loader-2" v-if="false"></div>
  </div>
</template>

<script>
export default {
  name: 'Question2',
  data () {
    return {
      numMap: {
        1: '一',
        2: '二',
        3: '三',
        4: '四'
      },
      list: [
        {
          person: '江静思',
          checkpoints: [
            {
              time: '2017-12-12 09：00',
              place: '上海外滩',
              passed: true,
              current: false
            },
            {
              time: '2017-12-16 12：00',
              place: '北京天安门',
              passed: true,
              current: false
            },
            {
              time: '2017-12-18 15：00',
              place: '深圳大鹏所城',
              passed: false,
              current: true
            },
            {
              time: '2017-12-19 15：00',
              place: '杭州西湖',
              passed: false,
              current: false
            }
          ]
        },

        {
          person: '慕容向华住在桂花冷',
          checkpoints: [
            {
              time: '2017-12-12 09：00',
              place: '莹雪区',
              passed: true,
              current: false
            },
            {
              time: '2017-12-16 12：00',
              place: '碧云区',
              passed: true,
              current: true
            },
            {
              time: '2017-12-18 15：00',
              place: '卧虹区荷花冷',
              passed: false,
              current: false
            },
            {
              time: '2017-12-19 15：00',
              place: '西岭区',
              passed: false,
              current: false
            }
          ]
        }
      ]
    }
  }
}
/*
 * box-shadow  逗号分隔
 * absolute
 * 伪类()、伪元素(https://www.w3.org/TR/selectors-3/#pseudo-elements)
 */
</script>
