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
}

export default TournamentController;