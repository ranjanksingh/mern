/*const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
it('gets the test endpoint',async () => {
    const response = await request.get('/movies')
    console.log(response.body)
    console.log(response.body.length)
    expect(response.status).toBe(200)
    expect(response.body.length).toBe(4)
    
});
*/
it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
});
