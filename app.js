// function set player list
function setPlayerList(playerName, disabledBtn) {
  const lukaModric = document.getElementById(playerName);
  const playerList = document.getElementById('player-list');
  const li = document.createElement('li');
  li.innerText = lukaModric.innerText;
  playerList.appendChild(li);
  document.getElementById(disabledBtn).disabled = true;
}

document.getElementById('select-btn-1').addEventListener('click', function () {
  setPlayerList('luka-modric', 'select-btn-1')
})
document.getElementById('select-btn-2').addEventListener('click', function () {
  setPlayerList('toni-kroos', 'select-btn-2')
})
document.getElementById('select-btn-3').addEventListener('click', function () {
  setPlayerList('karim-benzema', 'select-btn-3')
})
document.getElementById('select-btn-4').addEventListener('click', function () {
  setPlayerList('dani-carvajal', 'select-btn-4')
})
document.getElementById('select-btn-5').addEventListener('click', function () {
  setPlayerList('rodrygo', 'select-btn-5')
})
document.getElementById('select-btn-6').addEventListener('click', function () {
  setPlayerList('vini-jr', 'select-btn-6')
})


document.getElementById('calculate').addEventListener('click', function () {
  const playerList = document.getElementById('player-list').childNodes.length;
  const mainPlayerList = playerList - 1;

  const perPayerValue = document.getElementById('per-plyer-value').value;
  const perPayerAmount = parseInt(perPayerValue);

  const calculate = mainPlayerList * perPayerAmount;
  const playerExpenses = document.getElementById('player-expenses');
  playerExpenses.innerText = calculate;
  console.log(playerList, perPayerAmount, calculate)
})

document.getElementById('calculate-total').addEventListener('click', function () {
  const playerExpenses = document.getElementById('player-expenses');
  const playerExpensesAmount = parseInt(playerExpenses.innerText);

  const coachValue = document.getElementById('coach-value');
  const coachValueAmount = parseInt(coachValue.value);

  const managerValue = document.getElementById('manager-value');
  const managerValueAmount = parseInt(managerValue.value);

  const totalExpenses = playerExpensesAmount + coachValueAmount + managerValueAmount;

  const total = document.getElementById('total');
  total.innerText = totalExpenses;
})

//console.log(playerList.childNodes.length)


