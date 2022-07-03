const bodyparse = require("body-parser");
const cors = require("cors");




// on require sql du package.
const mysql = require('mysql2');

// on stock toutes les données necessaires pour une connection a la DB.
const connection= mysql.createConnection({
  host: '127.0.0.1',
  user: 'majid',
  password: 'majid',
  database: 'database_music'
});


// on requiere le package express qui permet de communiquer avec la base de données.
const express = require("express");

// on stock la fonction express dans la constant app.
const app = express();

// on definie le port
const port=3001;

// permet d'utiliser fetch vers un serveur externe.
app.use(cors())

// pour eviter d'avoir les données en brute corps et vos en-têtes ne sont pas dans l'objet Root, on doir manipuler chaque champs individuellement.
app.use(bodyparse.urlencoded({extended:true}))

// app.get permet de specifier l'url en premier paramatre, en deuxieme paramatre en parenthses la requette et la reponse
app.get("/albums/:id", (request, response) => {

//on prend la requette, le parameter passe dans l'url et le nom du parameter et on le stck dans la variable name;
let id = request.params.id;

//on prend la variable connection define plus haut et on concatene la requette sql. Query prend 2 parametre, le premier et la requette et le le message d'erreur et la reponse en lignes.
connection.query('select artists.id as "artistId", artists.name as "artistName", albums.name as "albumName", albums.description as "albumDescription", cover, release_date, tracks.name as "trackName", track_no, duration, mp3 from artists inner join albums on artists.id = albums.artist_id inner join tracks on albums.id = tracks.album_id where albums.id ='+id+';', (err, res ) => {
    if(err) throw err;

    // on recupere la reponse en format json
  response.send(res)

  });

})

app.get("/artistes/:name", (request, response) => {
  let name = request.params.name
  connection.query('select * from artists  where artists.name like \'%'+name+'%\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });
})

app.get("/artistes/albums/:id", (request, response) => {
  const id = request.params.id
  connection.query('select artists.name as "artistsName", artists.description as "artistsDescription", a.id as "albumId", a.name as "albumName", cover, bio, photo from artists inner join albums a on artists.id = a.artist_id where artists.id ='+id+';', (err,res) => {
    if(err) throw err;
    console.log(err)
    response.send(res)

  });
})


  app.get("/genres/:id", (request, response) => {
    const genre = request.params.id
    connection.query('select albums.id as "albumsID", artists.id as "artists.id", albums.name as "albumsName", cover_small as "cover_small", artists.name as "artistName" from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.id ='+genre+';', (err,res) => {
      if(err) throw err;
      response.send(res)


    });

  })

app.get("/", (request, response) => {
  connection.query('select albums.id, albums.name as "albumName", cover, artists.id as "artistId", artists.name as "artistName" from albums inner join artists  on albums.artist_id = artists.id order by RAND() limit 8;', (err,res) => {
    if(err) throw err;
    response.send(res)
    
  });


})

// on declare qu'il ecoute sur le port declarer plus haut.
app.listen(port, () => {
  console.log(`running at port ${port}`);
});







