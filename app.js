var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.IndexController = Ember.Controller.extend({
    todoCount: 3, //Ember.computed.alias('model.length'),
    
    actions: {
        addTodo: function(inputText){
            console.log("addTodo!");
            var todo = this.store.createRecord('todo',{text: inputText, done: false});
            todo.save();
            this.set('newTodoText', '');
        },
        
        //not work yet.... I don't know why....
        clearCompleted: function(){
            console.log('clearCompleted!');
            var x = this.store.find('todo',{done: true});
            console.log('hello');
               
        }
    }
});

App.IndexRoute = Ember.Route.extend({
    model: function(){
        return this.store.findAll('todo');
    }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Todo = DS.Model.extend({
    text: DS.attr('string'),
    done: DS.attr()
});

App.Todo.FIXTURES = [
    {
        id:1, 
        text: "learn ember.js",
        done: false
    },
    {
        id: 2,
        text: "eat lunch",
        done: false
    },
    {
        id: 3,
        text: "drink coffee",
        done: false
    }
];