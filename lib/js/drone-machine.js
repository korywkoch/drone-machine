/*var Class = function(parent){ 
  var klass = function(){
    this.init.apply(this, arguments); 
  };
  klass.prototype.init = function(){}; 
  klass.fn = klass.prototype;

  // Adding a proxy function 
  klass.proxy = function(func){
    var self = this; 
    return(function(){
      return func.apply(self, arguments); 
    });
  }
  
  // Add the function on instances too 
  klass.fn.proxy = klass.proxy;
  return klass;
};*/

var module = this;

(function($){ 

	var mod = function(includes){ 
		var result = function(){
			this.init.apply(this, arguments); 
		};
		result.fn = result.prototype; 
		result.fn.init = function(){};

		result.proxy = function(func){ return $.proxy(func, this); }; 
		result.fn.proxy = result.proxy;
		
		result.include = function(ob){ $.extend(this.fn, ob); }; 
		result.extend = function(ob){ $.extend(this, ob); };
		
		if (includes) { result.include(includes); }
		
		return result; 
	};
	
	module.Class = mod; 
})(jQuery);
;(function(exports){
  exports.AudioManager = new Class({
    
    init: function(){
      this.Context = this.getAudioContextClass(); 
    },

    getAudioContextClass: function(){
      return (exports.AudioContext || 
              exports.webkitAudioContext || 
              exports.mozAudioContext || 
              exports.oAudioContext || 
              exports.msAudioContext); 
    },
  });
}(window));
;(function($, _, exports){
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
;// @TODO: 
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
