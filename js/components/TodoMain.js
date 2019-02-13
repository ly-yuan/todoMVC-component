;(function(window){
  const template = `<!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class editing when editing and completed when marked as completed -->
      <li 
        class="completed"
        v-for="item in todos" >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done">
          <label>{{item.title}}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
      </li>
    </ul>
  </section>`

  const TodoMain = {
    template,
    // props: ['todos'],//不推荐这么写
    props:{    //prop验证 推荐这样来定义 props，更严谨
      todos:{
        type:Array,
        // required:true, //必须给
        default:function(){
          return []  // prop 默认值
        }
      },
      data(){
        return{
          
        }
      }
    }
  }

  window.TodoMain = TodoMain
})(window)