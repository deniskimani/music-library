const express = require('express');
const artistController = require('../controllers/artist');

const artistRouter = express.Router();

artistRouter.post('/', artistController.createArtist);
artistRouter.get('/', artistController.read);
artistRouter.get('/:id', artistController.getArtistById);
artistRouter.put('/:id', artistController.putArtist);
artistRouter.patch('/:id', artistController.updateArtist);
artistRouter.delete('/:id', artistController.deleteArtist);
artistRouter.post('/:id/albums', artistController.createAlbum);

module.exports = artistRouter;
