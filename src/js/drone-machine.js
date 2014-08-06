// @TODO: 
// - Refactor appropriate values to config.json
// - Implement template compilation in grunt
// - Implement channel, (events, panning)
// - Implement master gain nodes, etc. 

(function($, _, exports){
  exports.DroneMachine = new Class({
    
    init: function(containerId){
      this.containerId = containerId || 'DroneMachine';
      this.container = $('#' + this.containerId);
      this.createChannels();
    },

    createChannels: function(){
      this.channels = new Array();
      this.channels.push(
        new Channel(this.container) 
      );
    },

    knobify: function(){
      $('.dial input').knob({
        'fgColor': '#888888' 
      }); 
    }

  });
}(jQuery, _, this));
