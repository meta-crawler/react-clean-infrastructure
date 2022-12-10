import Board from 'domain/src/useCases/Board';
import Session from 'domain/src/useCases/Session';

export default (repositories: any) => {
  return {
    session: new Session(repositories.session),
    board: new Board(repositories.board),
  };
};
