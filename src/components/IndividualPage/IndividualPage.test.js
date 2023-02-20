import { rest } from 'msw'
import { setupServer } from 'msw/node'
import multipleGames from '../../mocks/data/multipleGames.json'
import singleGame from '../../mocks/data/singleGame.json'

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

describe('Individual page', () => {

  test('should render individual game title', async () => {

  })

  test('should render individual game screenshots', async () => {

  })

  test('should render individual game description', async () => {

  })

  test('should render individual game platform', async () => {

  })

  test('should render individual game category', async () => {

  })

  test('should render play game button', async () => {

  })

  test('should route to official game page', async () => {

  })

  test('should render suggested titles cards', async () => {

  })

  test('should route from individual game page to a suggested game title', async () => {

  })

  test('should render review section', async () => {

  })
})