//#1
function exponentialValue(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    console.log("Q1:", n1, "and", n2, "are numbers");
  } else {
    console.log("Q1: Either", n1, "or", n2, "or both are not numbers");
  }

  console.log("========================");

  //option 1

  //   for (let i = 1; i <= n2; i++) {
  //     console.log(n1 ** i);
  //   }

  //option 2

  for (let i = n1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      i = i ** j;
      console.log(i);
      i = n1;
    }
  }
}

exponentialValue(3, 8);

console.log("========================");

//#2

const fruit = "apple";

function printFavoriteFruit() {
  console.log(`Q2: My favorite fruit is: ${fruit}`);
}

printFavoriteFruit();

//#3

function exponent(n1, n2) {
  const result = n1 ** n2;
  return result;
}

// console.log(exponent(2, 4));

console.log(result);

//No, it is not possible to access the result variable out side the exponent function because it has a local scope. In other words, it doesn't have a global visibility.
