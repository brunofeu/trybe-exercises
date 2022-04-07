import TournamentDAO from "../models/TournamentDAO";

class TournamentService {
  constructor (private tournamentDAO = new TournamentDAO()) {}

  public async getAll() {
    const tournaments = await this.tournamentDAO.getAll();
    return tournaments;
  }

  public async getByYear(year: string) {
    const tournament = await this.tournamentDAO.getByYear(year);
    return tournament;
  }
}

export default TournamentService;