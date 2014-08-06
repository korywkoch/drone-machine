(function($, _, exports){
  exports.Channel = new Class({
    
    init: function(container){
      this.container = container || $('#DroneMachine');
      this.createChannel();
    },

    createChannel: function(){
      this.template = _.template($('#ChannelTemplate').html());
      this.container.append(this.template);
      this.knobify();
    },

    knobify: function(){
      $('.dial input').knob(); 
    }

  });
}(jQuery, _, this));
