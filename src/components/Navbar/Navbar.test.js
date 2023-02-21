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

describe ('Navbar', () => {
  test('should render website name and logo', async () => {
    render(<App />)
    expect(await screen.findByText('Free Games Finder')).toBeVisible()
    expect(await screen.findByRole('img')).toHaveAttribute('alt', 'logo')
  })
  
  test('should render category dropdown button', async () => {
    render(<App />)
    expect(await screen.findByText('Category')).toBeVisible()
  })
  
  test('should render categories after clicking dropdown button', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Category'))
    expect(await screen.findByText('Shooter')).toBeVisible()
    expect(await screen.findByText('MMOARPG')).toBeVisible()
    expect(await screen.findByText('ARPG')).toBeVisible()
  })
  
  test('should render game cards that fit the selected category', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Category'))
    await userEvent.click(await screen.findByText('Shooter'))
    expect(await screen.findByText('Overwatch 2')).toBeVisible()
    expect(await screen.findByText('Call of Duty: Warzone')).toBeVisible()
  })

  test('should render platform button', async () => {
    render(<App />)
    expect(await screen.findByText('Platform')).toBeVisible()
  })
  
  test('should render platforms after clicking dropdown button', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Platform'))
    expect(await screen.findByText('Windows')).toBeVisible()
    expect(await screen.findByText('Browser')).toBeVisible()
  })

  test('should render game cards that fit the selected platform', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Platform'))
    await userEvent.click(await screen.findByText('Windows'))
    expect(await screen.findByText('Overwatch 2')).toBeVisible()
    expect(await screen.findByText('Call of Duty: Warzone')).toBeVisible()
  })
  
  test('should render new releases button', async () => {
    render(<App />)
    expect(await screen.findByText('New Releases')).toBeVisible()
  })
  
  test('should render newly released game cards', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('New Releases'))
    expect(await screen.findByText('Warlander')).toBeVisible()
    expect(await screen.findByText('Kartrider: Drift')).toBeVisible()
  })
  
  test('should render a search bar', async () => {
    render(<App />) 
    expect(await screen.findByText('Search')).toBeVisible()
  })
  
  test('should render a button for favorites list', async () => {
    render(<App />)
    expect(await screen.findByText('Favorites')).toBeVisible()
  })
  test('should route user to their favorites list when clicked', async () => {
    render(<App />)
    await userEvent.click(await screen.findByText('Favorites'))
    expect(await screen.findByText('Favorites go here!')).toBeVisible()
  })
})