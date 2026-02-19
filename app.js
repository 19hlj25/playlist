import express from "express";
import playlist from "#db/playlist";

const app = express();

export default app;

app.get("/", welcome);

app.get("/playlist", getPlaylist);

app.get("/playlist/:id", getSongByID);

function welcome(req, res) {
  res.send("You've reached the Playlist API!");
}

function getPlaylist(req, res) {
  res.send(playlist);
}

function getSongByID(req, res) {
  const { id } = req.params;
  const song = playlist[id];

  if (!song) {
    res.status(404).send("this is not a valid song");
  }

  res.send(song);
}
