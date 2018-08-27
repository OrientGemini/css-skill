<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/var.styl'
  @import './styled-checkbox-1.styl'
  @import './styled-checkbox-2.styl'
  
  .question-4 { padding-bottom: .6rem;
    .list-row { padding: .2rem;/* background: $bg-color-lightest;*/ }
    .table-container { padding-top: .2rem; }
    .table { /*border: .02rem solid $border-color-base;*/ width: 100%;
      .caption { padding: .15rem; background: $bg-color-auxiliary; color: $text-color-lightest; }
      thead { background: $bg-color-lightest; color: $text-color-auxiliary;
        th { padding: .06rem; font-weight: normal; }
      }
      tbody {
        td { padding: .06rem; }
        tr { border-top: .01rem solid $border-color-base;/* padding: .06rem;*/ }
        tr:nth-child(even) { background: $bg-color-lightest; }
        tr:nth-child(odd) { background: $bg-color-base; }
      }
    }
  }
</style>

<template>
  <div class="question-4">
    <ve-list-row tag="ul" class="bg-color-lightest">
      <ve-list-col v-for="(item, index) in inputList"
        :key="item.id"
        :col-count=3
        tag="li">
        <div class="checkbox" v-if="index <= 2">
          <input type="checkbox" :id="'checkbox-' + index">
          <label :for="'checkbox-' + index" v-text="item.language"></label>
        </div>
        <div class="radio" v-if="index > 2">
          <input type="radio" :id="'radio-' + index">
          <label :for="'radio-' + index" v-text="item.language"></label>
        </div>
      </ve-list-col>
    </ve-list-row>
    <ve-list-row tag="ul">
      <ve-list-col :col-count=3 tag="li">
        <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1">
        <label for="styled-checkbox-1">Checkbox</label>
      </ve-list-col>
      <ve-list-col :col-count=3 tag="li">
        <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2" checked>
        <label for="styled-checkbox-2">CSS Only</label>
      </ve-list-col>
      <ve-list-col :col-count=3 tag="li">
        <input class="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value3" disabled>
        <label for="styled-checkbox-3">A disabled checkbox</label>
      </ve-list-col>
      <ve-list-col :col-count=3 tag="li">
        <input class="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value4">
        <label for="styled-checkbox-4">Fourth option</label>
      </ve-list-col>
    </ve-list-row>
    <div class="table-container">
      <table class="table">
        <caption class="caption">编程语言排行榜</caption>
        <thead>
          <tr>
            <th>编程语言</th>
            <th>2016</th>
            <th>2011</th>
            <th>2006</th>
            <th>2001</th>
            <th>1996</th>
            <th>1991</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JavaScript</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>3</td>
            <td>30</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import inputList from './input-list'
import VeListRow from '../components/list-row'
import VeListCol from '../components/list-col'

export default {
  name: 'Question4',

  components: {
    VeListRow,
    VeListCol
  },

  data () {
    return {
      inputList: inputList
    }
  }
}
/*
 * pure css simulate checkbox/radio
 * + selector
 * nth-child(odd)、nth-child(even)
 */
</script>
