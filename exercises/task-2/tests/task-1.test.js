import * as taskModule from '../src/task.js';

describe('task.js exports are correct', () => {
  test('getFibSequence export is found', () => {
    expect(typeof taskModule.task).toBe('function');
  });
  test('only one thing exported from the module', () => {
    expect(Object.keys(taskModule).length).toBe(1);
  });
});
