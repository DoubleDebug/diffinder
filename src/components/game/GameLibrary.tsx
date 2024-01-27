import game1 from '../../data/1-library-bookshelf.json';
import game2 from '../../data/2-chalet-mountains.json';
import game3 from '../../data/3-ai-robots.json';
import game4 from '../../data/4-christmas-tree.json';
import game5 from '../../data/5-traditional-people.json';
import game6 from '../../data/6-dolphin.json';
import game7 from '../../data/7-crater.json';
import game8 from '../../data/8-panorama-mountain.json';
import game9 from '../../data/9-christmas-village.json';
import game10 from '../../data/10-forest-lake.json';
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

export function getGame(index: number): DifferenceMetadata {
  const game = games.find((g) => g.id === index);
  if (game) return game as DifferenceMetadata;
  return game1 as DifferenceMetadata;
}

export function getAllGames(): DifferenceMetadata[] {
  games.sort((a, b) => b.order - a.order);
  return games as DifferenceMetadata[];
}
