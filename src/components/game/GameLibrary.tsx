import game1 from '../../data/1-cabin-house.json';
import game2 from '../../data/2-library-bookshelf.json';
import game3 from '../../data/3-ai-robots.json';
import game4 from '../../data/4-christmas-tree.json';
import game5 from '../../data/5-still-life.json';
import game6 from '../../data/6-dolphin.json';
import game7 from '../../data/7-crater.json';
import game8 from '../../data/8-traditional-people.json';
import game9 from '../../data/9-panorama-mountain.json';
import game10 from '../../data/10-christmas-village.json';
import game11 from '../../data/11-forest-lake.json';
import game12 from '../../data/12-garden-girl.json';

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
  game11,
  game12,
];

export function getGame(index: number): DifferenceMetadata {
  const game = games.find((g) => g.id === index);
  if (game) return game as DifferenceMetadata;
  return game1 as DifferenceMetadata;
}

export function getAllGames(): DifferenceMetadata[] {
  games.sort((a, b) => b.order - a.order);
  return games as DifferenceMetadata[];
}
