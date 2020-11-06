import {
  createTables,
  dropTables,
  insertIntoTables,
} from '../src/utils/queryFunctions';
import { expect, server, BASE_URL } from './setup';

before(async () => {
  await createTables();
  await insertIntoTables();
});

after(async () => {
  await dropTables();
});

describe('Services Page', () => {
  it('should return an Array instance', (done) => {
    server
      .get(`${BASE_URL}/services`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.instanceOf(Array);
        done();
      });
  });
  it('should return two service objects', (done) => {
    server
      .get(`${BASE_URL}/services`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).length(2);
        done();
      });
  });
  it('should return a title and description for each object', (done) => {
    server
      .get(`${BASE_URL}/services`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.forEach((m) => {
          expect(m).to.have.property('title');
          expect(m).to.have.property('description');
        });
        done();
      });
  });

  it('posts services', (done) => {
    const data = {
      title: 'Set Design',
      description:
        'As set designers we are in charge of designing and creating the sets that appear in films, campaigns and adverts. Our role involves working with and communicating with directors, producers, costume designers and other members of staff.',
    };
    server
      .post(`${BASE_URL}/services`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.have.property('id');
        done();
      });
  });

  it('returns an object containing required keys', (done) => {
    const data = {
      title: 'Set Design',
      description:
        'As set designers we are in charge of designing and creating the sets that appear in films, campaigns and adverts. Our role involves working with and communicating with directors, producers, costume designers and other members of staff.',
    };
    server
      .post(`${BASE_URL}/services`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.instanceOf(Object);
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('title', data.title);
        expect(res.body.data).to.have.property('description', data.description);
        done();
      });
  });
});
