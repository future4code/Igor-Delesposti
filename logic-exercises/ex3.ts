// A)
// function compareStrings(text: string, text2: string): Boolean {
//     if( text === text2){
//         return true;
//     }

//     return false;
// }

// console.log(compareStrings("escola", "escola"))

//B)

function compareStrings(text: string, text2: string): Boolean {
  if (text.toLowerCase() === text2.toLowerCase()) {
      return true;
  }

  return false;
}

console.log(compareStrings("EScola", "escola"))