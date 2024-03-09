export let gameArray = [
  [
    '🌑',
    '🌒',
    '🌒',
    '🌓',
    '🌓',
    '🌔',
    '🌔',
    '🌕',
    '🌕',
    '🌜',
    '🌛',
    '🌕',
    '🌕',
    '🌖',
    '🌖',
    '🌓',
    '🌓',
    '🌒',
    '🌒',
    '🌑',
  ],
  [
    '⭐',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '⭐',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '⭐',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '⭐',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '⭐',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '⭐',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '⭐',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '⭐',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '💧',
    '💧',
    '💧',
    '💧',
    '😎',
    '💧',
    '😎',
    '💧',
    '😎',
    '⭐',
  ],
  [
    '🌑',
    '🌒',
    '🌒',
    '🌓',
    '🌓',
    '🌔',
    '🌔',
    '🌕',
    '🌕',
    '🌜',
    '🌛',
    '🌕',
    '🌕',
    '🌖',
    '🌖',
    '🌓',
    '🌓',
    '🌒',
    '🌒',
    '🌑',
  ],
];

const getPopulation = (array, x, y) => {
  let counter = 0;
  if (array[x - 1][y - 1] === '😎') {
    counter += 1;
  }

  if (array[x][y - 1] === '😎') {
    counter += 1;
  }

  if (array[x - 1][y] === '😎') {
    counter += 1;
  }

  if (array[x + 1][y + 1] === '😎') {
    counter += 1;
  }

  if (array[x + 1][y] === '😎') {
    counter += 1;
  }

  if (array[x][y + 1] === '😎') {
    counter += 1;
  }

  if (array[x - 1][y + 1] === '😎') {
    counter += 1;
  }

  if (array[x + 1][y - 1] === '😎') {
    counter += 1;
  }

  return counter;
};

export const game = (array) => {
  const innerArray = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
      if (gameArray[i][j] === '😎') {
        const counter = getPopulation(gameArray, i, j);
        if (counter < 2 || counter > 3) {
          innerArray[i][j] = '💧';
        } else {
          innerArray[i][j] = '😎';
        }
      }

      if (gameArray[i][j] === '💧') {
        const counter = getPopulation(gameArray, i, j);
        if (counter === 3) {
          innerArray[i][j] = '😎';
        } else {
          innerArray[i][j] = '💧';
        }
      }
    }
  }

  for (let k = 0; k < 10; k++) {
    console.log(innerArray[k].join(' '));
  }

  gameArray = JSON.parse(JSON.stringify(innerArray));
};
