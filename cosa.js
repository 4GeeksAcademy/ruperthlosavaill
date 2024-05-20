let firstWords = ["Best", "Amazing", "Wonderful"];
let secondWords = ["Gardens", "Houses", "Bathrooms"];
let thirdWords = ["333", "H222", "444"];
let dominioDots = ["com", "es", "ue"];

function generatorAllDomain() {
  for (let firstElement of firstWords) {
    for (let secontElement of secondWords) {
      for (let thirdElement of thirdWords) {
        for (let dominioDotsElement of dominioDots) {
          console.log(
            firstElement + secontElement + thirdElement +  "." + dominioDotsElement
          );
        }
      }
    }
  }
}
generatorAllDomain();  
