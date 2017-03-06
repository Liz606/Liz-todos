import "todomvc-app-css/index.css"

import Vue from "vue"

var filters={
	all(todos){
		return todos;
	},
	active(todos){
		return todos.filter((todo)=>{return !todo.completed})
	},
	completed(todos){
		return todos.filter((todo)=>{return todo.completed})
	}
}

new Vue({
	el:".todoapp",
	data:{
		msg:"hello world!",
		title:"Liz'todos",
		newTodo:"new todo",
		todos:[{
			content:"vue",
			completed:false
		},{
			content:"vue-list",
			completed:true
		},]
	},
	computed:{
		remain(){
			return filters.active(this.todos).length;
		}
	},
	methods:{
		addTodo(e) {
			if (this.newTodo=="") {return};//当输入框为空，禁止添加todo
			this.todos.push({
				content:this.newTodo,
				completed:false
			});
			this.newTodo = "";
		},
		removeTodo(index) {
			this.todos.splice(index,1);
		}
	}
})

/*new Vue({
	el:".info"
})*/