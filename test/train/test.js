const chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const faker = require('faker')
const expect = chai.expect
const app = require('../../app')

describe('Test the Train Controller', () => {
  const train = {
    "name": faker.random.word(), //Name is unique field, so auto genarting
    "from": "Chennai",
    "to": "Tanjore",
    "currentStation": "Chennai",
    "isRunning": true
  }
  it('Create train', (done) => {

    chai.request(app)
      .post('/train')
      .send(train)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.name).to.equal(train.name.toLowerCase())
        done()
      });
  })
  it('Get train', (done) => {
    chai.request(app)
      .post('/train/123')
      .send(train)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done()
      });
  })
})

