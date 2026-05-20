const { createApp, ref, computed} = Vue;

const app = createApp({
    setup() {
        const isShowAll = ref(true);

        function showInTheaters() {
            isShowAll.value = !isShowAll.value;
            console.log("PELIS: " + JSON.stringify(movies[1].name));
        }

        function showAll() {
            isShowAll.value = !isShowAll.value;
            console.log("PELIS: " + JSON.stringify(movies[0].name));
        }

        
        return {
            isShowAll,
            showInTheaters,
            showAll,
        };
    },
});

app.mount("#appPelis");

const movies = [
{
"id": 1,
"name": "The Godfather",
"description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
"image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY1982_.jpg",
"rating": 4,
"genres": ["Crime", "Drama"],
"inTheaters": false,
"year": 1972
},
{
"id": 2,
"name": "The Shawshank Redemption",
"description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
"image": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg",
"rating": 4,
"genres": ["Drama"],
"inTheaters": false,
"year": 1994
},
{
"id": 3,
"name": "The Dark Knight",
"description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
"image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
"rating": 3,
"genres": ["Action", "Crime", "Drama"],
"inTheaters": false,
"year": 2008
},
{
"id": 4,
"name": "Inception",
"description": "A thief who enters the dreams of others to steal secrets from their subconscious gets a chance at redemption if he can pull off the impossible: planting an idea instead of stealing one.",
"image": "https://m.media-amazon.com/images/M/MV5BMTMyMzYxMDQ3NV5BMl5BanBnXkFtZTcwNTA1NTcwMw@@._V1_FMjpg_UX300_.jpg",
"rating": 5,
"genres": ["Action", "Sci-Fi", "Thriller"],
"inTheaters": false,
"year": 2010
},
{
"id": 5,
"name": "Pulp Fiction",
"description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
"image": "https://m.media-amazon.com/images/M/MV5BNGM0YzJlZmQtYjEyZC00ZTdlLWExMjYtZmQ1OGNmMjhjYTg1XkEyXkFqcGc@._V1_FMjpg_UY1621_.jpg",
"rating": 4,
"genres": ["Crime", "Drama"],
"inTheaters": false,
"year": 1994
},
{
"id": 6,
"name": "Avatar: The Way of Water",
"description": "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora when an ancient threat resurfaces.",
"image": "https://m.media-amazon.com/images/M/MV5BMWNlMWQyMTQtZjc5MC00NTljLTgxZTctZDZiZTBmODY5MTkyXkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg",
"rating": 3,
"genres": ["Action", "Adventure", "Sci-Fi"],
"inTheaters": true,
"year": 2022
},
{
"id": 7,
"name": "Fight Club",
"description": "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more.", 
"image": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
"rating": 4,
"genres": ["Drama"],
"inTheaters": false,
"year": 1999
},
{
"id": 8,
"name": "Forrest Gump",
"description": "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with a low IQ but a kind heart.",
"image": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_QL75_UY562_CR4,0,380,562_.jpg",
"rating": 5,
"genres": ["Drama", "Romance"],
"inTheaters": false,
"year": 1994
},
{
"id": 9,
"name": "Interstellar",
"description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
"image": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
"rating": 5,
"genres": ["Adventure", "Drama", "Sci-Fi"],
"inTheaters": false,
"year": 2014
},
{
"id": 10,
"name": "Gladiator",
"description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
"image": "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
"rating": 4,
"genres": ["Action", "Adventure", "Drama"], 
"inTheaters": false,
"year": 2000
}
]
