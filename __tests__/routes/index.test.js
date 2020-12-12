const request = require('supertest');
// Full app so we can test the 404
const server = require('../../api/app.js');
const Pool = require('../../data/Pool');

// describe('index router endpoints', () => {
//   beforeAll(() => {});

//   describe('GET /', () => {
//     it('should return json with api:up', async () => {
//       const res = await request(server).get('/test');

//       expect(res.status).toBe(200);
//       expect(res.body.api).toBe('up');
//     });
//   });
// });

describe('users endpoints', () => {
  describe('GET /users', () => {
    it('should return all users', async () => {
      const res = await request(server).get('/users');
      expect(res.status).toBe(200);
    });
  });

  describe('GET /user/1', () => {
    it('should return the test user', async () => {
      const res = await request(server).get('/user/1');
      expect(res.status).toBe(200);
    });
  });
});

afterAll(async (done) => {
  await Pool.end();
  done();
});
