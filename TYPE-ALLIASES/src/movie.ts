// Definieer de interface voor een film
interface Movie {
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    duration: number;
    reviews: Review[]; // Een film kan meerdere beoordelingen hebben
}
 // Definieer een type alias voor een verzameling films
type MovieCollection = Movie[];

// Definieer de interface voor een beoordeling
interface Review {
    rating: number;
    comment?: string; // Optionele opmerking bij de beoordeling
}
// Functie om het gemiddelde van beoordelingen voor een film te berekenen
function averageRatingForMovie(movie: Movie): number {
    if (movie.reviews.length === 0) {
        return 0;
}

const totalRating = movie.reviews.reduce((sum, review) => sum + review.rating, 0);
return totalRating / movie.reviews.length;
}

// Functie om de best beoordeelde films te vinden (met een gemiddelde beoordeling hoger dan 4)
function topRatedMovies(collection: MovieCollection): Movie[] {
return collection.filter((movie) => averageRatingForMovie(movie) > 4);
}

// Voorbeeldgebruik
const movies: MovieCollection = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        releaseYear: 2010,
        genre: "Science Fiction",
        duration: 148,
        reviews: [
            { rating: 4.5, comment: "Een geweldige film!" },
            { rating: 5, comment: "Fantastische plot!" },
        ],
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseYear: 1994,
        genre: "Drama",
        duration: 142,
        reviews: [
            { rating: 5, comment: "Meesterwerk!" },
            { rating: 4.5 },
        ],
    },
    {
        title: "Rio Lobo",
        director: "Howard Hawks",
        releaseYear: 1970,
        genre: "Western",
        duration: 114,
        reviews: [
            { rating: 3.4 },
            { rating: 3.5 },
        ],
    },
    // Voeg meer films en beoordelingen toe
];

console.log("Best beoordeelde films:");
const topMovies = topRatedMovies(movies);
topMovies.forEach((movie) => {
console.log(`${movie.title} (${movie.releaseYear}) - Gemiddelde beoordeling: ${averageRatingForMovie(movie)}`);
});





