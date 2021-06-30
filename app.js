let options = {
  rock: {
    value: 1,
    img: 'rock.png'
  },
  paper: {
    value: 2,
    img: 'paper.png'
  },
  scissors: {
    value: 3,
    img: 'scissors.png'
  }
}

function play(playerChoice) {
  let choice = options[playerChoice]
  let compChoice = 'rock'
  // compChoice will eventually equal a function that chooses randomly
  document.getElementById('choice-pic').innerHTML = `<img class="w-100" src="${choice.img}" alt="${playerChoice}">`
}

//document.getElementById('compChoice-pic').innerHTML = `<img class="w-100" src="${options.img}" alt="${compChoice}">`
//document.getElementById("speak-output").innerText = `The ${animalName} says ${animal.says}.`