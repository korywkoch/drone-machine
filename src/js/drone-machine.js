// @TODO: 
// - Refactor appropriate values to config.json
// - Implement template compilation in grunt
// - Implement channel, (events, panning)
// - Implement master gain nodes, etc. 

(function($, _, exports){
  exports.DroneMachine = new Class({
    
    init: function(args){
      args = args || {};
      this.el = args.el || '#DroneMachine';
      this.container = $(this.el);
      this.manager = args.manager || new AudioManager();
      this.createChannels();
    },

    createChannels: function(){
      this.channels = new Array();
      this.channels.push(
        new Channel({
          'container': this.container
        }) 
      );
    },

    knobify: function(){
      $('.dial input').knob({
        'fgColor': '#888888' 
      }); 
    }

  });
}(jQuery, _, this));
