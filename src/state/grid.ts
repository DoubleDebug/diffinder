import { createMemo, createSignal } from 'solid-js';
import { getAllGames } from '../components/game/GameLibrary';
const allGames = getAllGames();

export const [getFilter, setFilter] = createSignal<Filter>({
  difficulty: 'all',
  searchQuery: '',
});
export const filteredGames = createMemo(() =>
  allGames
    .filter((game) => {
      if (getFilter().difficulty === 'all') return true;
      return getFilter().difficulty === game.difficulty;
    })
    .filter((game) =>
      game.name.toLowerCase().includes(getFilter().searchQuery.toLowerCase())
    )
);
