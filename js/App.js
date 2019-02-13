;(function(window,AppFooter,TodoHeader,TodoMain,TodoFooter){
  const template = `
    <div>
    <section class="todoapp">

     <!--
      单向数据流：
        父组件中数据变动会传导给 props
        但是反之不会（子组件不能修改 props 数据）
        引用类型除外（不建议使用）
        在子组件中，无论是普通数据还是引用类型数据都不能重新赋值
        xx = xx 重新赋值
        xx.xx = xx 对象修改
      -->

      <!--
        监听组件内部的 tianjia 事件
        当组件内部的 tianjia 事件触发(this.$emit('tianjia', value))的时候
        就会调用父组件的 addTodo 方法
        事件不需要强制监听，带有解耦的性质
      -->

      <todo-header @tianjia="addTodo"></todo-header>
      <todo-main :todos="todos"></todo-main>
      <todo-footer></todo-footer>
    </section>
    <app-footer></app-footer>
    </div>
  `
  const App = {
    template,
    components:{
      AppFooter,
      TodoHeader,
      TodoMain,
      TodoFooter
    },
    data(){
      return{
        todos: [
          {
            title: '吃饭',
            done: false
          },
          {
            title: '睡觉',
            done: true
          }
        ]
      }
    },
    methods:{
      addTodo(inputText){
        this.todos.push({
          title: inputText,
          done: false
        })
      }
    }
  }
  window.App = App
})(window,AppFooter,TodoHeader,TodoMain,TodoFooter)