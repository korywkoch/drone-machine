(function($, _, exports){
  exports.Channel = new Class({
    
    init: function(args){
      args = args || {};
      this.container = args.container || $('#DroneMachine');
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
