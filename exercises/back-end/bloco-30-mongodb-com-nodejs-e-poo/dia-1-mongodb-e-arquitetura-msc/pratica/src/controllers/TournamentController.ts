import { Request, Response } from "express";
import { ITournament } from "../schemas/TournamentsSchema";
import TournamentService from "../services/TournamentService";

class TournamentController {
  constructor(private tournamentService = new TournamentService()) {}

  public getAll = async (req: Request, res: Response) => {
    try {
      const tournaments = await this.tournamentService.getAll();
      return res.status(200).json(tournaments)
    } catch (error) {
      return res.status(500).json('server Error')
    }
  }

  public getByYear = async (req: Request, res: Response) => {
    const { year } = req.params;
    try {
      const tournament = await this.tournamentService.getByYear(year);

      if (!tournament) return res.status(404).json('not found')
      return res.status(200).json(tournament)
    } catch (error) {
      return res.status(500).json('server Error')
    }
  }
}

export default TournamentController;