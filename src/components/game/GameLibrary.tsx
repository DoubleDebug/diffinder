import game1 from '../../data/1-library-bookshelf.json';
import game2 from '../../data/2-chalet-mountains.json';
import game3 from '../../data/3-ai-robots.json';
import game4 from '../../data/4-christmas-tree.json';
import game5 from '../../data/5-traditional-people.json';
import game6 from '../../data/6-dolphin.json';
import game7 from '../../data/7-aquarium.json';
import game8 from '../../data/8-crater.json';
import game9 from '../../data/9-panorama-mountain.json';
import game10 from '../../data/10-christmas-village.json';

export function getGame(index: number): DifferenceMetadata {
  switch (index) {
    case 1:
      return game1;
    case 2:
      return game2;
    case 3:
      return game3;
    case 4:
      return game4;
    case 5:
      return game5;
    case 6:
      return game6;
    case 7:
      return game7;
    case 8:
      return game8;
    case 9:
      return game9;
    case 10:
      return game10;
    default:
      return game1;
  }
}

export function getAllGames(): DifferenceMetadata[] {
  const games = [
    game1,
    game2,
    game3,
    game4,
    game5,
    game6,
    game7,
    game8,
    game9,
    game10,
  ];
  games.sort((a, b) => b.order - a.order);
  return games;
}
