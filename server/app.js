const cors = require("cors");
//const express = require("express");
//const app = express();
const bodyparse = require("body-parser");

// creer la connection a la db

const mysql = require('mysql');
const connection= mysql.createConnection({
  host: 'localhost',
  user: 'majid',
  password: 'komballe007.',
  database: 'database_music'
});


const express = require("express");

const app = express();

//define port
const port=3001;

app.get("/get-data", (req, res) => {

  res.json({message:'hello'})

})

app.get("/albums", (request, response) => {
  const req=request.query
  connection.query('select * from albums inner join tracks  on albums.id = tracks.album_id inner join genres_albums  on albums.id = genres_albums.album_id inner join genres  on genres_albums.genre_id = genres.id;', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})

app.get("/Artistes", (request, response) => {
  const req=request.query
  connection.query('select * from artists inner join albums on artists.id = albums.artist_id;', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });
})

app.get("/Classical", (request, response) => {
  const req=request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'Classical\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})

app.get("/NewAge", (request, response) => {
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'New Age\' ;', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });



})

app.get("/HipHop", (request, response) => {
  const req=request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'Hip Hop\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})

app.get("/Electronica", (request, response) => {
  const req=request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'Electronica\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})

app.get("/World", (request, response) => {
  const req=request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'World\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})

app.get("/Ambient", (request, response) => {
  const req=request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'Ambient\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})

app.get("/Jazz", (request, response) => {
  const req = request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'Jazz\';', (err, rows) => {
    if (err) throw err;

    response.json({data: rows})

  });

})

app.get("/AltRock", (request, response) => {
  const req=request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'Alt Rock\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})

app.get("/HardRock", (request, response) => {
  const req=request.query
  connection.query('select * from genres_albums inner join albums on genres_albums.album_id = albums.id inner join genres  on genres_albums.genre_id = genres.id inner join artists  on albums.artist_id = artists.id where genres.name = \'Hard Rock\';', (err,rows) => {
    if(err) throw err;

    response.json({data:rows})

  });

})



//app.get("/get-data", (req, res) => {

//res.json({message:'Get JSON Example'})

//})

//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});







