import { Schema } from 'mongoose';

export interface ITournament {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrinkers: string[],
  bestPlayer: string,
  bestGoalkeeper: string,
  bestYougPlayer: string,
}

export const TournamentSchema = new Schema<ITournament>({
  year: Number,
  hostCountry: String,
  champions: String,
  runnerUp: String,
  editionGoals: Number,
  editionStrinkers: [String],
  bestPlayer: { type: String, required: false },
  bestGoalkeeper: { type: String, required: false },
  bestYougPlayer: { type: String, required: false },
})