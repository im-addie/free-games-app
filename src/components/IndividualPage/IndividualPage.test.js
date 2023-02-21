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

describe('Individual page', () => {
  test('should render individual game title', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Overwatch 2')).toBeVisible()
  })

  test('should render individual game screenshots', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByRole('img')).toBeVisible()
  })

  test('should render individual game description', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('The tale of the hero organization Overwatch continues in Overwatch 2.')).toBeVisible()
  })

  test('should render individual game platform', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Windows')).toBeVisible()
  })

  test('should render individual game category', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Shooter')).toBeVisible()
  })

  test('should render play game button', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Play Game')).toBeVisible()
  })

  test('should route to official game page', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    await userEvent.click(await screen.findByText('Play Game'))
  })

  test('should render suggested titles section', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Suggested titles')).toBeVisible()
  })

  test('should route from individual game page to a suggested game title', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    await userEvent.click(await screen.findByText('Call of Duty: Warzone'))
    expect(await screen.findByText('Activision')).toBeVisible()
    expect(await screen.findByText('Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.')).toBeVisible()
  })

  test('should render review section', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Reviews')).toBeVisible()
  })

  test('should render minimum system requirements', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Minimum system requirements')).toBeVisible()
    expect(await screen.findByText('NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series')).toBeVisible()
  })

  test('should render publisher', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Activision Blizzard')).toBeVisible()
  })

  test('should render developer', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('Blizzard Entertainment')).toBeVisible()
  })

  test('should render release date', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Overwatch 2'))
    expect(await screen.findByText('2022-10-04')).toBeVisible()
  })
})