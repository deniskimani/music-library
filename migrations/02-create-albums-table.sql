DROP TABLE IF EXISTS Artists;
DROP TABLE IF EXISTS Albums;

CREATE TABLE Artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL
);

CREATE TABLE Albums (
  album_id SERIAL,
  artist_id SERIAL,
  name VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  PRIMARY KEY(album_id),
  CONSTRAINT fk_artist
    FOREIGN KEY(artist_id)
        REFERENCES Artists(id)
        ON DELETE CASCADE
);