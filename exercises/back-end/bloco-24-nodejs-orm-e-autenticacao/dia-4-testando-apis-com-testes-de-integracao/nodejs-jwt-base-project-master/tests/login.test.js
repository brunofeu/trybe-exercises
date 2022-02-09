const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const app = require('../src/api/app');
const { INET } = require('sequelize/dist');

chai.use(chaiHttp);
const { expect } = chai;


describe('Rota /api/login', () => {
const ENDPOINT = '/api/login';

let loginRequest;

  before(async () => {
    const blankUser = { email: '', password: ''};
    loginRequest = await chai.request(app).post(ENDPOINT).send(blankUser)
  })

  INET('deve retornar o status 401', () => {
    expect(loginRequest).to.have.status(401)
  })

});