import { Genre } from "../../core/domain/model/genre.model";


export interface IGenreRepositoryPort {
  getAllGenres(page: number, pageSize: number): Promise<{ genres: Genre[]; total: number }>;
  getGenreByReference(genreReference: string): Promise<Genre>;
  createGenre(genre: Genre): Promise<Genre>;
  updateGenre(genreReference: string, updatedGenre: Genre): Promise<Genre>;
  deleteGenre(genreReference: string): Promise<boolean>;
  getGenreByName(name: string): Promise<Genre>
}