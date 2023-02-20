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

describe ('Navbar', () => {
  test('should render website name and logo', async () => {
    
  })
  
  test('should render category dropdown button', async () => {
    
  })
  
  test('should render categories after clicking dropdown button', async () => {
    
  })
  
  test('should render game cards that fit the selected category', async () => {
    
  })

  test('should render platform button', async () => {
    
  })
  
  test('should render platforms after clicking dropdown button', async () => {
    
  })

  test('should render game cards that fit the selected platform', async () => {
    
  })
  
  test('should render new releases button', async () => {
    
  })
  
  test('should render newly released game cards', async () => {
    
  })
  
  test('should render a search bar', async () => {
    
  })
  
  test('should render a heart icon for favorites list', async () => {
    
  })
  test('should route user to favorites list when clicked', async () => {
    
  })
})