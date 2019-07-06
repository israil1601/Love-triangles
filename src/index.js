/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  const result = []

  preferences.forEach((iLove, index) => {
      const myNum = index + 1
      const third = preferences[iLove - 1]    

      if (preferences[third - 1] === myNum && third !== iLove) {
          result.push([myNum, iLove, third])
      }
  });

  return result.length / 3
}


