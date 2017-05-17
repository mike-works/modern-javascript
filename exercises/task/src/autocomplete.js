import { task } from './task';
import { query, wait } from './utils';


export function autocomplete(term) {
  let cancelled = false;
  let p = new Promise((resolve) => {
    task(function* searchForPlace() {
      yield wait(1000);
      if (!cancelled) {
        console.log(`⏳ Beginning search for ${term}`);
        let results = yield query(term);
        console.log(`✅ Completed search for ${term}`);
        resolve(results);
        p.resolved = true;
      }
    });
  });
  p.resolved = false;
  p.term = term;
  p.cancel = () => {
    cancelled = true;
  };
  return p;
}