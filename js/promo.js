require(['./js/knockout-3.5.1.js'], function(ko) {
  ko.components.register("promo-start-widget", {
    viewModel: function(params) {
      console.log("init promo-start-widget");
      this.helloWorld = "Hello, World!!!";
    },
    template: {require: 'text!html/promo-start-widget.html'},
  });
  
  ko.applyBindings();
});
