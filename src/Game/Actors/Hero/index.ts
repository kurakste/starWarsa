import Events from '../../../interfaces/Events';
import GameObjTypes from '../../../interfaces/gameObjTypes';
import Actor from '../Actors';

  class MainHero extends Actor{

  constructor(xpos: number, ypos: number) {
    super();
    this.width = 50;
    this.height = 50;
    this.xpos = xpos;
    this.ypos = ypos;
    this.subscribes = [Events.Keyboard, Events.Clock, Events.Draw ];
    this.type = GameObjTypes.mainGameActor;
    this.spriteXOffset = 0;
    this.spriteYOffset = 0;
    this.spriteHeight = 90;
    this.spriteWidth = 100;
    this.vSpeed = 10;
    this.hSpeed = 10;
  };

  public keyboardHandler(e: KeyboardEvent) {
    console.log('from Main hero keyboard handler', e);
    e.type === 'keydown' && e.key ==='ArrowRight' && this.moveLeft();
    e.type === 'keydown' && e.key ==='ArrowLeft' && this.moveRight();
    e.type === 'keydown' && e.key ==='ArrowUp' && this.moveUp();
    e.type === 'keydown' && e.key ==='ArrowDown' && this.moveDown();
  }

  

}

export default MainHero;