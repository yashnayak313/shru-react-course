import type { MovieInterface } from "../interfaces/Movie";
import { MovieCard } from "./MovieCard";

interface MovieListProps {
  movies: MovieInterface[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
        <div className="relative">
            <ul className="flex overflow-x-scroll overflow-y-visible 
            space-x-4 px-4 md:px-6 py-4 scrollbar-hide relative">
                {movies.map((movie: MovieInterface, index) => (
                    <li key={movie.id}>
                        <MovieCard movie={movie} rank={index + 1} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MovieList;
