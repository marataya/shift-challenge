// Код
function generateSteps() {
  var steps = [];
  for (i = 0; i < 3; i++) {
    steps.push((function (i) { return function() { console.log(i) } })(i));
  }
  return steps;
}
var myStep = generateSteps();

// Требуемый вывод
myStep[0]() // 0
myStep[1]() // 1
myStep[2]() // 2

