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

describe('Search bar', () => {
  test('should render search bar', async () => {
    render(<App />)
    expect(await screen.findByText('Search')).toBeVisible()
  })

  test('should render search results after user types and submits input', async () => {
    render(<App />)
    await userEvent.type(await screen.findByLabelText('Search'), 'Overwatch 2')
    expect(await screen.findByText('Overwatch 2')).toBeVisible()
    expect(await screen.findByText('Windows')).toBeVisible()
    expect(await screen.findByText('Shooter')).toBeVisible()
  })
})