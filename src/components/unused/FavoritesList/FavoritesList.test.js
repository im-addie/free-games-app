import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import multipleGames from '../../mocks/data/multipleGames.json'
import singleGame from '../../mocks/data/singleGame.json'
import App from '../../App'

// declare which API requests to mock
const server = setupServer(
  rest.get('https://www.freetogame.com/api/games', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(multipleGames)) // respond using a mocked JSON body
  }),
  rest.get('https://www.freetogame.com/api/game?id=540', (req, res, ctx) => { // capture "GET /greeting" requests
  return res(ctx.json(singleGame)) // respond using a mocked JSON body
}))

// establish API mocking before all tests
beforeAll(() => server.listen())// reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers()) // (i.e. for testing one-time error scenarios)
afterAll(() => server.close()) // clean up once the tests are done

describe('Favorites list', () => {
  test('should render “Favorites go here!” text if there are no games added', async () => {
    render (<App />)
    await userEvent.click(await screen.findByText('Favorites'))
    expect(await screen.findByText('Favorites go here!')).toBeVisible()
  })
  test('should allow user to add games to a favorites list by clicking a heart button', async () => {
    render (<App />)

  })
  test('should render a list of game cards that the user has favorited', async () => {
    render (<App />)

  })
})