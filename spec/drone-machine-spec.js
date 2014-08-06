var should = chai.should();

describe('DroneMachine', function(){
  var droner;

  beforeEach(function(){
    droner = new DroneMachine();
  });

  it('when created', function(){
    droner.should.exist;
  });
  
});

describe('Channel', function(){
  var channel; 

  beforeEach(function(){
    channel = new Channel();
  });

  describe('when initialized with no container', function(){
    it('should use a default container.', function(){
      channel.container.should.exist;
    }); 
  }); 

});


