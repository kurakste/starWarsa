import Events from '../../../../interfaces/Events';
import GameObjTypes from '../../../../interfaces/gameObjTypes';
import DamageableActors from '../DamageableActors';
import Fire from '../../Fire';
import MainGameUnit from '../../../mainGameUnit';
import directions from '../../../../interfaces/Direction';
class MainHero extends DamageableActors {

  constructor(game: MainGameUnit, xpos: number, ypos: number, ) {
    super(game, xpos, ypos, 50, 50);
    this.subscribes.push(Events.Keyboard);
    this.type = GameObjTypes.mainGameActor;
    this.spriteXOffset = 0;
    this.spriteYOffset = 0;
    this.spriteHeight = 90;
    this.spriteWidth = 100;
    this.vSpeed = 10;
    this.hSpeed = 10;
  };

  public keyboardHandler(e: KeyboardEvent) {
    e.type === 'keydown' && e.key ==='ArrowRight' 
      && !this.checkIsThereTheGameBoarder(directions.right) && this.moveLeft();
    e.type === 'keydown' && e.key ==='ArrowLeft'
      && !this.checkIsThereTheGameBoarder(directions.left) && this.moveRight();
    e.type === 'keydown' && e.key ==='ArrowUp' 
      && !this.checkIsThereTheGameBoarder(directions.up) && this.moveUp();
    e.type === 'keydown' && e.key ==='ArrowDown' 
      && !this.checkIsThereTheGameBoarder(directions.down)&& this.moveDown();
    e.type === 'keydown' && e.key ===' ' && this.fire();
  }

  public borderCollisionHandler(dir: directions) {
    // rewrite parent method;
  }

  fire() {
    const fire = new Fire(this.game, this.xpos + 5, this.ypos - 42, 1);
    this.game.addObjectOnField(fire);
  }

  private checkIsThereTheGameBoarder(dir: directions) {
    const workMatrix = {
      [directions.down]: () => this.ypos + this.height >= this.game.height,
      [directions.up]: () => this.ypos <=0,
      [directions.left]: () => this.xpos<=0,
      [directions.right]: () => this.xpos + this.width>=this.game.width,
    }
    return workMatrix[dir]();
  }
}

export default MainHero;