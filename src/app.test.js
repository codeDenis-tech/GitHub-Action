const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('/testNod endpoint', () => {
	  i('shouldreturn a response', async () >{
		      const sponse = await reest.get('/testNode');
		      expect(response.status).toBe(200);
		      expect(response.text).toBe('Yes the testNode endpont wokdt = require');
		    });
});
