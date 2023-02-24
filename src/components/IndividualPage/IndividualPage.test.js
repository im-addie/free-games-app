import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import multipleGames from '../../mocks/data/multipleGames.json'
import overwatch2 from '../../mocks/data/overwatch2.json'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

// declare which API requests to mock
const server = setupServer(
  rest.get('https://www.freetogame.com/api/games', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(multipleGames)) // respond using a mocked JSON body
  }),
  rest.get('https://www.freetogame.com/api/game?id=540', (req, res, ctx) => { // capture "GET /greeting" requests
  return res(ctx.json(overwatch2)) // respond using a mocked JSON body
}))

// establish API mocking before all tests
beforeAll(() => server.listen())// reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers()) // (i.e. for testing one-time error scenarios)
afterAll(() => server.close()) // clean up once the tests are done

describe('Individual page', () => {
  test('should render individual game title', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('Overwatch 2')).toBeVisible()
  })

  test('should render individual game screenshots', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    const img = await screen.findAllByRole('img')
    
    expect(img[0]).toBeVisible()
  })

  test('should render individual game description', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('The tale of the hero organization Overwatch continues in Overwatch 2.', {exact: false})).toBeVisible()
  })

  test('should render individual game platform', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('Windows')).toBeVisible()
  })

  test('should render individual game category', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('Shooter')).toBeVisible()
  })

  test('should render play game button', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('play game')).toBeVisible()
  })

  test('should route to official game page', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByRole('link', {name: 'play game'})).toHaveAttribute('href', 'https://www.freetogame.com/open/overwatch-2')

    // Received: href="/540"
  })

  test('should render minimum system requirements', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('System requirements')).toBeVisible()
    expect(await screen.findByText('NVIDIA GeForce GTX 600 series or AMD Radeon HD 7000 series', {exact: false})).toBeVisible()
  })

  test('should render publisher', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('Activision Blizzard')).toBeVisible()
  })

  test('should render developer', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('Blizzard Entertainment')).toBeVisible()
  })

  test('should render release date', async () => {
    render(
      <MemoryRouter initialEntries={['/540']}>
        <App />
      </MemoryRouter>
      )

    expect(await screen.findByText('2022-10-04')).toBeVisible()
  })

  // test('should render suggested titles section', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/540']}>
  //       <App />
  //     </MemoryRouter>
  //     )

  //   expect(await screen.findByText('Suggested titles')).toBeVisible()
  // })

  // test('should route from individual game page to a suggested game title', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/540']}>
  //       <App />
  //     </MemoryRouter>
  //     )

  //   await userEvent.click(await screen.findByText('Call of Duty: Warzone'))
  //   expect(await screen.findByText('Activision')).toBeVisible()
  //   expect(await screen.findByText('Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.')).toBeVisible()
  // })

  // test('should render review section', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/540']}>
  //       <App />
  //     </MemoryRouter>
  //     )

  //   expect(await screen.findByText('Reviews')).toBeVisible()
  // })
})