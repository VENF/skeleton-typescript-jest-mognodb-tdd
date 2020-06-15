import { agent as request } from 'supertest';
import Setup from '../src/stup-test/test-setup';
import { users } from '../mock/users';
//------------------Database--------------//
//Setup.inicialize('get')
//------------------Database--------------//

//------------------Fill database--------------//
async function fillDatabase(data: Array<object>) {
  await request(Setup.app).post('/users').send(data[0]);
  await request(Setup.app).post('/users').send(data[1]);
}
//------------------Fill database--------------//

//beforeAll(async () => {
//await fillDatabase(users);
//})

const GetEndpoint = (endpoint: string) => {
  xit(`INSERT USERS${endpoint}`, async (done) => {
    const total = await request(Setup.app).get(endpoint);
    expect(total.status).toBe(200);
    done();
  });
};

//------------------GET tests--------------//
//GETEndpoint('/users')

test('index[POST]', () => {
  const text = 'is running';
  expect(text).toMatch(/is running/);
});
