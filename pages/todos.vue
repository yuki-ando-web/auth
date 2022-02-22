<template>
<div> 
    
  <input type="text" placeholder="タイトル"   v-model="addTitle">
  <textarea placeholder="内容"   v-model="addContent">

  </textarea>

  <button type=button v-on:click="addTodo">新規投稿</button>
<ul>
  <li v-for="todo in todos" v-bind:key="">

 <div>{{ todos }}</div>
 <!-- <div>{{ this.$store.state.todos.todos.title }}</div> -->

  </li>
</ul>
 <nuxt-Link to="/itiran">一覧ページ</nuxt-Link>
</div>
</template>

<script>
import Vuex from 'vuex'

export default {
  data:  function () {
    return{
    addTitle:'',
    addContent:'',
    // sutatus:""
    }
  },
  computed: {
    todos()  {
        return this.$store.state.todos.todos  
  }
  },
  methods: {
    addTodo:function(){
      this.$store.commit('todos/add',{title:this.addTitle,content:this.addContent})
      console.log(this.addTitle)
      console.log(this.addContent)
      this.addTitle =""
      this.addContent =""
    },
  }
}
</script>

<style>
input {
  border: solid 1px;
  background-color: rgb(255, 255, 180)
}
textarea {
  border: solid 1px;
  background-color: rgb(255, 255, 180)
}
</style>