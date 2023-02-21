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

describe('Homepage', () => {
  test('should render multiple game cards', async () => {
    render(<App />)

    expect(await screen.findByText('Overwatch 2')).toBeVisible()
    expect(await screen.findByText('Diablo Immortal')).toBeVisible()
    expect(await screen.findByText('Lost Ark')).toBeVisible()
  })
  
  test('should render game title', async () => {
    render(<App />)

    expect(await screen.findByText('Overwatch 2')).toBeVisible()
    expect(await screen.findByText('Diablo Immortal')).toBeVisible()
    expect(await screen.findByText('Lost Ark')).toBeVisible()
  })
  
  test('should render game category', async () => {
    render(<App />)

    const shooter = await screen.findAllByText('Shooter')
    const MMOARPG = await screen.findAllByText('MMOARPG')
    const ARPG = await screen.findAllByText('ARPG')

    expect(shooter[0]).toBeVisible()
    expect(MMOARPG[0]).toBeVisible()
    expect(ARPG[0]).toBeVisible()
  })
  
  test('should render game platform', async () => {
    render(<App />)

    const windows = await screen.findAllByText('PC (Windows)')

    expect(windows[0]).toBeVisible()
  })
  
  test('should render game thumbnails', async () => {
    render(<App />)

    const img = await screen.findAllByRole('img')
    expect(img[0]).toBeVisible()
  })

  test('should route from homepage to an individual game page', async () => {
    render(<App />)

    await userEvent.click(await screen.findByText('Overwatch 2'))

    expect(await screen.findByText('System requirements:')).toBeVisible()
  })
})