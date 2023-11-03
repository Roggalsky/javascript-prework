{let playerWins = 0;
let computerWins = 0;

	const playGame = function (playerInput){
		clearMessages();

		const printMessage = function (msg){
			const div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
	}
	const getMoveName =function (argMoveId){
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
	const displayResult = function (argComputerMove, argPlayerMove) {
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		if (argComputerMove == argPlayerMove) {
			printMessage('Remis');
		} else if (
			(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
			(argComputerMove == 'papier' && argPlayerMove == 'nozyce') ||
			(argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
		) {
			printMessage('Ty wygrywasz!');
			playerWins++;
		} else {
			printMessage('Ty przegrywasz!');
			computerWins++;
		}
		document.getElementById('result').innerHTML = playerWins + ' - ' + computerWins;
	}

	//**let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	//console.log('Gracz wpisał: ' + playerInput);
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	const playerMove =getMoveName(playerInput);
	//printMessage('Twój ruch to: ' + playerMove);
	const computerMove = getMoveName(randomNumber);
	//printMessage('Ruch komputera to: ' + computerMove);
	
	//console.log('Wylosowana liczba to: ' + randomNumber);
	displayResult(computerMove, playerMove)	;
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
}