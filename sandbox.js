'use strict';

function greetUser() {
  var humanoid = prompt('Are you human?');
  var responseTime = prompt('What time is it?');
  var greeting;

  while(responseTime < 0 || responseTime > 24 || isNaN(responseTime) === true){
    responseTime = prompt('Please enter a number between 0 and 24.');
  }

  if (responseTime > 18) {
    greeting = 'Good evening';
  } else if (responseTime > 12) {
    greeting = 'Good afternoon';
  } else if (responseTime > 0) {
    greeting = 'Good morning';
  } else {
    greeting = 'Welcome';
  }


  if (humanoid === 'yes') {
    var responseName = prompt('What is your name?');
    document.write('<h3>' + greeting + ', ' + responseName + '!' + '</h3>');
  } else {

    document.write('<h3>' + greeting + '! ' + 'You are not allowed in here. Self-destruct initiated!' + '</h3>');
  }
}
function accountInfo() {
  var accountNum = prompt('How many accounts do you want?');
  for (var i = 1; i <= accountNum; i++) {
    var accountAmt = prompt('How much money would you like in account' + i + '?');
    document.write( i + '. $' + accountAmt + ' ');
  }
}
