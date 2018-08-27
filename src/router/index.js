import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import List from '@/views/list'
import Question2 from '@/views/question-2'
import Question3 from '@/views/question-3'
import Question4 from '@/views/question-4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/question/2',
      name: 'Question2',
      component: Question2
    },
    {
      path: '/question/3',
      name: 'Question3',
      component: Question3
    },
    {
      path: '/question/4',
      name: 'Question4',
      component: Question4
    }
  ]
})
