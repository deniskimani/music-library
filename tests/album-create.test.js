const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('create album', () => {
  describe('/album', () => {
    describe('POST', () => {
      it('creates a new artist and album in the database', async () => {
        const { status, body } = await request(app)
          .post('/artists/:id/albums')
          .send({
            name: 'Tame Impala',
            genre: 'rock',
            year: 2006,
            albumName: 'Rock My Heart',
          });

        expect(status).to.equal(201);
        expect(body.name).to.equal('Rock My Heart');
        expect(body.year).to.equal(2006);
      });
    });
  });
});
