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

describe('Favorites list', () => {
  test('should render “Favorites go here!” text if there are no games added', async () => {
    
  })
  test('should allow user to add games to a favorites list by clicking a heart button', async () => {
    
  })
  test('should render a list of game cards that the user has favorited', async () => {
    
  })
})