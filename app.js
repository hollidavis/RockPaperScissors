let options = {
  rock: {
    beats: 'scissors',
    img: 'rock.png'
  },
  paper: {
    beats: 'rock',
    img: 'paper.png'
  },
  scissors: {
    beats: 'paper',
    img: 'scissors.png'
  }
}

function play(playerChoice) {
  let choice = options[playerChoice]
  let compChoice = 'rock'
  // compChoice will eventually equal a function that chooses randomly?

  if (compChoice == choice) {
    document.getElementById('result').innerHTML = '<div class="alert alert-info text-center font-size"> You have tied! </div>'
  } else if (compChoice == choice.beats) {
    document.getElementById('result').innerHTML = '<div class="alert alert-success text-center font-size"> You have won! </div>'
  } else {
    document.getElementById('result').innerHTML = '<div class="alert alert-danger text-center font-size"> You have lost! </div>'
  }

  document.getElementById('choice-output').innerText = `${playerChoice}`.toUpperCase()
  document.getElementById('choice-pic').innerHTML = `<img class="w-100" src="${choice.img}" alt="${playerChoice}">`
}

//Initial Attempt to Solve
// if (choice.value == 1) {
//   console.log('you tied!')
// } else if (choice.value == 2) {
//   console.log('you won!')
// } else if (choice.value == 3) {
//   console.log('you lost!')
// }

//document.getElementById('compChoice-pic').innerHTML = `<img class="w-100" src="${options.img}" alt="${compChoice}">`
//document.getElementById("speak-output").innerText = `The ${animalName} says ${animal.says}.`