var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.IndexController = Ember.ArrayController.extend({
    todoCount: 3, //Ember.computed.alias('model.length'),
    
    actions: {
        addTodo: function(inputText){
            console.log("addTodo!");
            var todo = this.store.createRecord('todo',{text: inputText, done: false});
            todo.save();
            this.set('newTodoText', '');
        },
        
        clearCompleted: function(){
            console.log('clearCompleted!');
            var completed = this.filterBy('done',true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
               
        }
    }
});

App.IndexRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('todo');
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