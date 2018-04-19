import { SqrtPipe } from './app.sqrt.pipe';

describe('App.SqrtPipe', () => {
  it('create an instance', () => {
    const pipe = new SqrtPipe();
    expect(pipe).toBeTruthy();
  });
});
