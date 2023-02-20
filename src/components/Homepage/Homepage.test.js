// inside any *.test.js file
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import multipleGames from '../../mocks/data/multipleGames.json'

// declare which API requests to mock
const server = setupServer(
  rest.get('https://www.freetogame.com/api/games', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(multipleGames)) // respond using a mocked JSON body
  }),
  rest.get('https://www.freetogame.com/api/game?id=452', (req, res, ctx) => { // capture "GET /greeting" requests
  return res(ctx.json(singleGame)) // respond using a mocked JSON body
}))

// establish API mocking before all tests
beforeAll(() => server.listen())// reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers()) // (i.e. for testing one-time error scenarios)
afterAll(() => server.close()) // clean up once the tests are done

describe('Homepage', () => {
  test('should render multiple game cards', async () => {
    
  })
  
  test('should render game title', async () => {

  })
  
  test('should render game category', async () => {

  })
  
  test('should render game platform', async () => {

  })
  
  test('should render game thumbnail', async () => {

  })

  test('should route from homepage to an individual game page', async () => {

  })
})