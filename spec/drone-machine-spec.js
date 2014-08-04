var should = chai.should();

describe('DroneMachine', function(){
  var droner;

  beforeEach(function(){
    //droner = DroneMachine.create();
    droner = new DroneMachine();
  });

  it('can be created', function(){
    droner.should.exist;
  });

})
