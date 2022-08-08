const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (Tina) {
  console.log(cats.push(Tina));
}

function destructivelyPrependCat (Tina) {
  console.log(cats.unshift(Tina));
}

function destructivelyRemoveLastCat () {
  console.log(cats.pop());
}

function destructivelyRemoveFirstCat () {
  console.log(cats.shift());
}

function appendCat (Tina) {
  return [...cats, Tina];
}

function prependCat (Tina) {
  return [Tina, ...cats];
}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}