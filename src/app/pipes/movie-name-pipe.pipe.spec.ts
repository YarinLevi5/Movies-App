import { MovieNamePipe } from './movie-name-pipe.pipe';

describe('MovieNamePipePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieNamePipe();
    expect(pipe).toBeTruthy();
  });
});
