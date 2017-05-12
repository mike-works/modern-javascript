class Mike {
  yo() {return 'hi';}
  foo = 'bar'
}

function* go() {
  yield 1;
  yield 2;
}

document.write((new Mike()).foo);
let it = go();
document.write(it.next().value);
document.write(it.next().value);


export default Mike;