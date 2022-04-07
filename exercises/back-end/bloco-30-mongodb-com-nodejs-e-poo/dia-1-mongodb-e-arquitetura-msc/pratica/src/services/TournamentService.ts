import TournamentDAO from "../models/TournamentDAO";

class TournamentService {
  constructor (private tournamentDAO = new TournamentDAO()) {}

  public async getAll() {
    const tournaments = await this.tournamentDAO.getAll();
    console.log('tournaments')
    return tournaments;
  }
}

export default TournamentService;