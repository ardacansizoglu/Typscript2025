// Definieer de interface voor een boek
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    ISBN: string;
}
// Definieer een type alias voor een lijst met boeken
type BookList = Book[];


// Implementeer de functie om een boek van een specifieke auteur te vinden
// Belirli bir yazarın kitabını bulmak için işlevi uygulayın

function findBookByAuthor(books: BookList,authorName: string): Book | null {
    return books.find((book) => book.author === authorName) || null
}
// => isareti functionun gerceklesmesini soyluyor

// Implementeer de functie om boeken te filteren op publicatiejaar
//bu da  kitabin publish yilini bulmak icin 

function filterBooksByYear(books: BookList, year:number): BookList { 
    return books.filter((book) => book.publishedYear === year);//burda loop gerceklesiyor!!
}

// Voorbeeldgebruik
const books: BookList = [
        {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publishedYear: 1951,
        ISBN: "978-0-316-76948-0",
        },

        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publishedYear: 1960,
            ISBN: "978-0-06-112008-4",
        },
        {
            title: "1984",
            author: "George Orwell",
            publishedYear: 1949,
            ISBN: "978-0-452-28423-4",
        },
];


const bookByAuthor = findBookByAuthor(books, "Harper Lee");
console.log("Book by Harper Lee:", bookByAuthor);

const booksPublishedIn1960 = filterBooksByYear(books, 1960);
console.log("Books published in 1960:", booksPublishedIn1960);


