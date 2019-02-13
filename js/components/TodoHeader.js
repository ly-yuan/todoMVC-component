;(function(window){
  const template = `<header class="header">
    <h1>todos</h1>
    <input class="new-todo" 
    placeholder="What needs to be done?" 
    @keyup.enter="addTodo">
  </header>`
  const TodoHeader = {
    template,
    props:[],
    methods:{
      addTodo(e){
        // 拿到文本数据
        // 非空校验
        // 数据没问题后提交给父亲
        // 有父亲自己决定如何使用这个数据
        const input = e.target
        const value = input.value
        if(value.trim().length === 0){
          return
        }

        // 子传父：
        // 1. 发布事件
        // 2. 在使用组件标签上通过 v-on 的方式来监听组件内部发布的自定义事件
        //    绑定事件处理函数
        // 发布一个事件，名字叫 tianjia
        // 给了一个值 value

        // 事件无论如何在这里都发布出去了，谁使用谁关心，不监听也没关系
        this.$emit('tianjia',value)

        // 清空文本框
        input.value = ''
      }
    }
  }

  window.TodoHeader = TodoHeader
})(window)