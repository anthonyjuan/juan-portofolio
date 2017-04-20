process.env.NODE_ENV = 'test';

let chai = require('chai'),
    chaiHTTP = require('chai-http'),
    monggo = require('mongoose'),
    User = require('../models/user'),
    should = chai.should()

chai.use(chaiHTTP);

describe('testing routing get data dan create data from db user', () => {

    // monggo.models.User.collection.drop();

    it('it should GET all the users', (done) => {
      chai.request('http://localhost:3000')
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        done();
      });
    });

    it('it should Post one users', (done) => {
      chai.request('http://localhost:3000')
      .post('/users')
      .send({ name: 'juanjuan',email:'juju@gmail.com', password: '123' })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        done();
      });
    });

    it('it should update one users', (done) => {
      chai.request('http://localhost:3000')
      .put('/users/58f37752cf80e3450062404b')
      .send({ name: 'juanjuan',email:'juju@gmail.com', password: '123' })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.have.property('success').with.equal(true);
        done();
      });
    });

    it('it should delete one users', (done) => {
      chai.request('http://localhost:3000')
      .delete('/users/58f37752cf80e3450062404b')
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(200);
        res.body.should.have.property('success').with.equal(true);
        done();
      });
    });
})