const db = require('../db/index');

exports.readAlbums = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM Albums');
    // console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getAlbumById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const {
      rows: [album],
    } = await db.query('SELECT * FROM Albums WHERE id = $1', [id]);

    if (!album) {
      return res.status(404).json({ message: `album ${id} does not exist` });
    }

    res.status(200).json(album);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
