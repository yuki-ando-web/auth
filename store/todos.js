export const state = () => ({
  todos: []
  })
  
  export const mutations = {
    add (state,{addTitle,addContent}) {
      state.todos.push({
        title:addTitle,
        // content:addContent,
        // sutatus:ĉŞçĉ
      })
      console.log(addTitle)
      // console.log(addContent)
      console.log(state.todos)
    }
  // remove(state,)
  }