import mongoose from "mongoose";

import { ITournament, TournamentSchema } from "../schemas/TournamentsSchema";

export default class TournamentDAO {
  constructor(public model = mongoose.model('tournaments', TournamentSchema)) {}

  public async getAll(): Promise<ITournament[]> {
    const tournaments = await this.model.find()
    return tournaments;
  }
  
  public async getByYear(year: string): Promise<ITournament[]> {
    const tournament = await this.model.find({ year })
    return tournament;
  }
}