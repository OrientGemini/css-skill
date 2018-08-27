<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~@/assets/style/var.styl'
  
  .question-4 { padding-bottom: .6rem;
    .list-row { padding: .2rem; }
  }

  .checkbox input:checked, 
  .checkbox input:not(checked),
  .radio input:checked, 
  .radio input:not(checked) { display: none !important; }

  .checkbox label, .radio label { display: inline-block; position: relative; }
  .checkbox input:checked + label, 
  .checkbox input:not(checked) + label,
  .radio input:checked + label, 
  .radio input:not(checked) + label { padding-left: .5rem; vertical-align: middle; line-height: .28rem; cursor: pointer; }

  .checkbox input:not(checked) + label:before { content: ""; display: inline-block; position: absolute; left: 0; bottom: .01rem; 
    border: .02rem solid #CFCFCF; width: .24rem; height: .24rem; margin-right: .01rem;
  }
  .checkbox input:checked + label:before {
    content: "\2713";
    border: .02rem solid #3E3E3E; color: #3E3E3E; font-size: .28rem; text-align: center; line-height: .24rem; font-weight: bold;
  }

  .radio input:not(checked) + label:after { content: ""; position: absolute; left: 0; bottom: .01rem;
    display: inline-block; border: .02rem solid #CFCFCF; height: .24rem; width: .24rem;
    font-size: .28rem; line-height: .15rem; font-weight: bold;
  }
  .radio label:after { border-radius: .8rem; }
  .radio input:checked + label:after { border-color: #3E3E3E; background-color: #3E3E3E; box-shadow: inset 0 0 0 .02rem #FFFFFF; }
</style>

<template>
  <div class="question-4">
    <ve-list-row tag="ul">
      <ve-list-col v-for="(item, index) in inputList"
        :key="item.id"
        :col-count=3>
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
</script>
