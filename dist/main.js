function* guessingGame() {
	// console.log(yield game.say('Hey there!'));
	// console.log(yield game.say('Woah', 'This is cool'));
	// console.log(yield game.ask('Woah', 'This is cool'));
	// console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield game.say('That\'s all folks!', 'THE END'));


	// var rnd = Math.ceil(Math.random()*100);
	// console.log(rnd);

	do {

	var rnd = Math.ceil(Math.random()*100);
	console.log(rnd);

	var repeat = true;
	var guess = yield game.ask("A random number between 0 & 100 has been generated, guess that number!");



	if (parseInt(guess) === rnd) {
		yield game.say("Whoa, good guess, you got it!");
	}
	else if (parseInt(guess) < rnd) {
		yield game.say("Your guess is too low!  The number was " + rnd);
	}
	else {
		yield game.say("Your guess is too high!  The number was " + rnd);
	}

	var playAgain = yield game.choose("Would you like to play again?","Yes","No");
		if (playAgain === "Yes") {
			repeat = true;
		}

		else {
			yield game.say("Goodbye, thanks for playing!");
			repeat = false;
		}

	}while (repeat === true);
}