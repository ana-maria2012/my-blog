// Define a Todo Model
var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false

	}
});


var TodoView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#item-template').html() ),

	events: {
    	'dblclick label': 'edit',
    	'keypress .edit': 'updateOnEnter',
    	'blur .edit':   'close'
  	},

  	"initialize": function() {
  		this.$el = $('#todo');

  	},

  	"render": function() {
  		this.$el.html(this.template(this.model.attributes));
  		this.input = this.$('.edit');

  		return this;

  	},

  	"edit": function() {

  	},

  	"updateOnEnter": function() {

  	},

  	"close": function() {

  	}
});

// create a view for a todo
var todoView = new TodoView({model: Todo});