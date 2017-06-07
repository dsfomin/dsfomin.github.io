function playGuess1() {
  var answer = parseInt(Math.random() * 100);
   var attempt = 1;
   do {
   var popytka = +prompt("С каким количеством попыток хотите сыграть?");
   } while (popytka <= 0);
   var popytka_now = popytka;
   while (attempt <= popytka) {
   var userAnswer = prompt("Угадайте число от 0 до 100, у вас всего " + popytka + " попыток. Осталось(-ась) " + popytka_now);
    userAnswer = parseInt(userAnswer);
     if (userAnswer > answer) {
      alert("Ваш ответ слишком большой.");
     } else if (userAnswer < answer) {
     alert("Ваш ответ слишком маленький.");
   } else if (userAnswer == answer) {
   alert("Вы угадали!Поздравляю!");
   break;
   } else {
   alert("Необходимо ввести число!");
   }
  attempt++;
  popytka_now--;
   }
   if (attempt > popytka) {
   alert("К сожалению вы не угадали. Было загадано число: " + answer);
   }

 }
