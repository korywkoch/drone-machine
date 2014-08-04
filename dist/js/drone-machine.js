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
;(function($, UnderScore, exports){
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
