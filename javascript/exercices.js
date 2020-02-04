const anagrammes = (stringA, stringB) => {
  
  const re = /([A-Za-z])\w+/g;
  
  const sortA = stringA.split('').sort().join('').toLocaleLowerCase().match((re)|| []).join('');
  const sortB = stringB.split('').sort().join('').toLocaleLowerCase().match((re)|| []).join('');
  
  return sortA === sortB;
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */

};


class Stack {
  
  constructor(){
    this.items =[];
    this.index = 0;
  }
  
  push(element){
    this.items[this.index] = element;
    this.index++;
  }
  
  pop(){
    this.index--;
    return this.items[this.index]
  }
  
  
  peek(){
    return this.items[this.index-1];
  }
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */
};


const fizzBuzz = (n) => {
  
  for (let i = 1; i<= n ; i++ ) {
    if (i%15 == 0){
      console.log("fizzbuzz")
    }
    else if(i%3==0) {
      console.log("fizz")
    }
    else if(i%5==0){
      console.log("buzz")
    }
    else{
      console.log(i)
    }
  }


};

const spirale = (n) => {
  
   let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;

    }

    return result;
    
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */

};


const puissance4 = (grid) => {
  
  // for (var i = 0; i<=3; i++) {
  //     for (var j = 0; j<=4; j++) {
  //       let memoire = puissance4(i, j);
  //       let compteur = 0;
  //       if (puissance4(i, j)==memoire){
  //         compteur++
  //         memoire= puissance4(i, j);
  //         if (compteur==4){
  //           // console.log(1);
  //           return 1;
  //         }
  //         else{
  //           // console.log(false)
  //         }
  //       }
  //     } 
  // }
  
  
  const tab= puissance4(this.element);
  
  
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack,
}