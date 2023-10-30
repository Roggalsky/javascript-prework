function playGame(playerInput){
	clearMessages();

	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}
	function getMoveName(argMoveId){
		if(argMoveId == 1){
		return 'kamień';
		} else if (argMoveId == 2){
			return 'papier';
		} else if (argMoveId == 3){
			return 'nozyce';
		}else {
			return 'nie umiesz grać';
		}
	}
	function displayResult(argComputerMove, argPlayerMove) {
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		if (argComputerMove == argPlayerMove) {
			printMessage('Remis');
		} else if (
			(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
			(argComputerMove == 'papier' && argPlayerMove == 'nozyce') ||
			(argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
		) {
			printMessage('Ty wygrywasz!');
		} else {
			printMessage('Ty przegrywasz!');
		}
	}

	//**let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	//console.log('Gracz wpisał: ' + playerInput);
	let playerMove =getMoveName(playerInput)
	printMessage('Twój ruch to: ' + playerMove);
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	let computerMove = getMoveName(randomNumber)
	printMessage('Ruch komputera to: ' + computerMove);
	displayResult(computerMove, playerMove)	
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click' , function(){
	playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
  });
