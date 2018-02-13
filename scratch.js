let x = -3;

function checkValue(y) {
  return y > 15;
}

switch (true) {
  case 15:
    console.log('> 15');
    break;
  case x > 5:
    console.log('> 5');
    break;
  default:
    console.log('<= 5');
}
