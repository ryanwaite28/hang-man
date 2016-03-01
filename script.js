var tagOne = $('#message');

var game = {
	
	secret: '',
	
	guess: '',
	
	dash: '-',
	
	//mp: $('#mp'),
	
	getSecretWord: function() {
		var theWord = prompt('Input Secret Word').toLowerCase();
		return theWord;
	},
	
	sArray: [],
	
	Encrypt: function() {
		var word = game.getSecretWord();
		sArray = word.split("");
		console.log(word);
		console.log(sArray);
		
		$('#message').text('');
		
		for(var k = 0; k < sArray.length; k++) {
			var thisLetter = sArray[k];
			console.log(k);
			//game.mp.append(thisLetter);
			$('#message').append('<span onclick="game.guessLetter(this.id)" class="hang-letters i-' + thisLetter + '" style="margin: 15px; padding: 15px; border-bottom: 1px solid black;" id="i-' + thisLetter + '">' + thisLetter + '</span>');
		}
		
		$('#letter-count').text(sArray.length);
		
		alert('Click one of the empty lines to guess that letter.');
		
		//game.Guess(word);
	},
	
	Guess: function(str) {
		
		var t = str;
		
		var tries = sArray.length + 2;
        
        for(var i = 0; i < tries; tries--) {
			
			console.log(tries);
         
            var letter = tries[i];
            
            var guess = prompt('Guess a Letter. ' + sArray.length + ' more remaining.');
            
            var index = sArray.indexOf(guess);
            console.log(index);
            
            if( $.inArray(guess, sArray) != -1) {
				alert('Right!');
                console.log("match!");
                sArray.splice(index, 1);
				$('.i-' + guess + '').css('color', 'black');
                console.log(sArray);
            }
            else {
				alert('Wrong.');
                console.log("wrong!");
            }
            
			if(tries <= 1) {
                alert('Game Over; You Lose! The Secret Word Was: \'' + t + '\'.');
				console.log('Lose!');
				//document.write('GAME OVER.');
                return;
            }
            else if(sArray.length == 0) {
                alert('Game Over; You Won! The Secret Word Was: \'' + t + '\'.');
				console.log('Win!');
				//document.write('GAME OVER.');
                return;
            }
			else {
				console.log('else happened');
			}

        }
	},
	
	guessLetter(str) {
		
		console.log(str);
		
		var guess = prompt('Guess a latter.');
		
		var index = sArray.indexOf(guess);
		
		if( $.inArray(guess, sArray) != -1) {
				alert('Right!');
                console.log("match!");
                sArray.splice(index, 1);
				$('.i-' + guess + '').css('color', 'black');
                console.log(sArray);
        }
        else {
				alert('Wrong.');
                console.log("wrong!");
        }
		
	},
	
	creator: 'Ryan'
	
}

function playGame(){
	game.Encrypt();
}

/*

$(document).ready(function(){
	game.Encrypt();
});

*/