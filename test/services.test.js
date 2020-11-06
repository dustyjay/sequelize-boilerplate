import { expect, server, BASE_URL } from './setup';

describe('Services page', () => {
  it('shows a welcome text', (done) => {
    server
      .get(`${BASE_URL}/services`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Welcome to Express API template');
        done();
      });
  });
});
