import { rest } from 'msw'
import { setupWorker } from 'msw'
import multipleGames from './data/multipleGames.json'
import overwatch2 from './data/overwatch2.json'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  rest.get('https://www.freetogame.com/api/games', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(multipleGames)) // respond using a mocked JSON body
  }),
  rest.get('https://www.freetogame.com/api/game?id=452', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(overwatch2)) // respond using a mocked JSON body
  })
)