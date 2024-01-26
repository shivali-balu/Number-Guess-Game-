//styling the result message
let result = document.getElementById("guess-hint") ; 
result.style.fontWeight = "bold" ; 
result.style.fontSize = "20px" ;  

//generate a random number from 1 to 10 
let random = Math.floor(Math.random()*10+1) ; 

//guess count to be initially 0 
let guess_count = 0 ; 
let btn = document.getElementById("btn") ; 
btn.addEventListener('click' , () => { // guess count will be increased when the user clicks the button 
   guess_count++ ; 
   document.getElementById("noOfGuess").innerHTML = "Number of guesses : " + guess_count ; 
}) ; 


//get the user entered numbers in the form of array and print them 
let guessed_numbers = [] ; 

//Game function 
function play() {

  let user_input = +document.getElementById("user-input").value; 
  //4 conditions - 1. if the number beyond limit give alert and reload the page 
  if (user_input == 0 || user_input > 10) {
    alert("Enter only from 1 to 10");
    window.location.reload();
  } 

  // 2. if the number equal to the random number  give won message 
  else if(user_input == random) {
    result.innerHTML = "You won !" ; 
    guessed_numbers.push(user_input) ; 
    document.getElementById("guessednumbers").innerHTML = "Guessed numbers are : " + guessed_numbers ; 
  } 

  
  // 3. if the number greater than  the random number  give high message 
  else if(user_input > random ) {
    result.innerHTML = "Your guess is high !" ; 
    guessed_numbers.push(user_input) ; 
    document.getElementById("guessednumbers").innerHTML = "Guessed numbers are : " + guessed_numbers ; 
  } 

  
  // 4. if the number lesser than  random number  give low  message 
  else{
    result.innerHTML = "Your guess is low !" ; 
    guessed_numbers.push(user_input) ; 
    document.getElementById("guessednumbers").innerHTML = "Guessed numbers are : " + guessed_numbers ; 
  }
  

} 



