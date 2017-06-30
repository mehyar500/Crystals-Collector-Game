
//Generate random number for the player to match
	$( document ).ready(function(){
		var randomN=Math.floor(Math.random()*101+19)
		console.log(randomN)
		$('#number').text(randomN);

//Variables for 4 random numbers array, total, wins and losses	
	var randomNumbers = []
	var total= 0;	
	var wins= 0;
	var losses = 0;
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);		


//Random numbers for each jewel
function fourRandomNumbers(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		randomNumbers.push(num);
	}
	console.log(randomNumbers) 
}

fourRandomNumbers();


//Resets the game
function reset(){
        randomN=Math.floor(Math.random()*101+19);
        console.log(randomN)
        $('#number').text(randomN);
        randomNumbers = [];
        fourRandomNumbers();
        total= 0;
        $('#Combined').text(total);
        } 

//Add the wins to the total
function youWon(){
	alert("You won!!!");
		wins++;	
		$('#numberWins').text(wins);
		reset();
}

//Add the losses to the total
function youLost(){
	alert ("You lose!!");
		losses++;
		$('#numberLosses').text(losses);
		reset();
}



//Click function for jewels
		$('#one').on ('click', function(){
			total = total + randomNumbers[0];
			console.log("New total= " + total);
			$('#Combined').text(total);	

					// win/lose conditions
					if (total == randomN){
						youWon();
					}
					else if ( total > randomN){
						youLost();
					}		
		})	

		$('#two').on ('click', function(){
			total = total + randomNumbers[1];
			console.log("New total= " + total);
			$('#Combined').text(total);	

					if (total == randomN){
						youWon();
					}
					else if ( total > randomN){
						youLost();
					}	
		})	

		$('#three').on ('click', function(){
			total = total + randomNumbers[2];
			console.log("New total= " + total);
			$('#Combined').text(total);

						//win/lose conditions
						if (total == randomN){
						youWon();
					}
					else if ( total > randomN){
						youLost();
					}	
		})	

		$('#four').on ('click', function(){
			total = total + randomNumbers[3];
			console.log("New total= " + total);
			$('#Combined').text(total);	

				
						if (total == randomN){
						youWon();
					}
					else if ( total > randomN){
						youLost();
					}
		});  	

});	
	
