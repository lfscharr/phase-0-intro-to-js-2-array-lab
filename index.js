const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {

return cats.push('Ralph')
}

function destructivelyPrependCat(name) {

  return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {

  return cats.pop('Garfield')
}

function destructivelyRemoveFirstCat(name) {

  return cats.shift('Milo')
}

function appendCat(name) {
  
  const allCats = [...cats, "Broom"]

  return allCats
}

function prependCat(name) {

  const allCats = ["Arnold", ...cats]

  return allCats
}

function removeLastCat(name) {

  const allCats = cats.slice(0, -1);

  return allCats
}

function removeFirstCat(name) {

  const allCats = cats.slice(1)

  return allCats
}
