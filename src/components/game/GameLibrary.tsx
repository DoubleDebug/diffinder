import game1 from '../../data/1.json';
import game2 from '../../data/2.json';
import game3 from '../../data/3.json';

export function getGame(index: number): DifferenceMetadata {
  switch (index) {
    case 1:
      return game1;
    case 2:
      return game2;
    case 3:
      return game3;
    default:
      return game1;
  }
}

export { game1, game2, game3 };
