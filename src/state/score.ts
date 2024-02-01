const LOCAL_STORAGE_SCORE_KEY = 'user-score';

function getScoreMap() {
  const item = localStorage.getItem(LOCAL_STORAGE_SCORE_KEY);
  return item ? JSON.parse(item) : {};
}

export function getScore(imageId: number) {
  const map = getScoreMap();
  if (Object.keys(map).includes(String(imageId))) {
    return map[String(imageId)];
  }
  return 0;
}

export function setScore(imageId: number, score: number) {
  const map = getScoreMap();
  const newScoreMap = {
    ...map,
    [String(imageId)]: score,
  };
  localStorage.setItem(LOCAL_STORAGE_SCORE_KEY, JSON.stringify(newScoreMap));
}

export function resetScore() {
  localStorage.removeItem(LOCAL_STORAGE_SCORE_KEY);
}
