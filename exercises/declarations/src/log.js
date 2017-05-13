export function log() {
  let args = [...arguments];
  let logGroup = document.getElementById('log-entries');
  args.forEach((arg) => {
    let li = document.createElement('li');
    try {
      li.innerText = JSON.stringify(arg);
    } catch (e) {
      li.innerText = 'Problem serializing value';
    }
    logGroup.appendChild(li);
  });
}