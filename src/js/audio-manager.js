(function(exports){
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
