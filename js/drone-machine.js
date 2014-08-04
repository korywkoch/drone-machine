// @TODO: 
// - Remove npm & bower packages from source control.
// - Implement template compilation in grunt
// - Implement channel
// - Implement master gain nodes, etc. 

(function($, UnderScore, exports){
  exports.DroneMachine = new Class({
    
    init: function(containerId){
      this.containerId = containerId || 'DroneMachine';
      this.template  = UnderScore.template(
        $('#ChannelTemplate').html()
      );
      this.container = $('#' + this.containerId);
      this.container.append(this.template);
      this.knobify();
    },

    knobify: function(){
      $('.dial input').knob({
        'fgColor': '#888888' 
      }); 
    }

  });
}(jQuery, _, this));
