import { rest } from 'msw'
import { setupWorker } from 'msw'
import multipleGames from './data/multipleGames.json'
import singleGame from './data/singleGame.json'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  rest.get('https://www.freetogame.com/api/games', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(multipleGames)) // respond using a mocked JSON body
  }),
  rest.get('https://www.freetogame.com/api/game?id=452', (req, res, ctx) => { // capture "GET /greeting" requests
    return res(ctx.json(singleGame)) // respond using a mocked JSON body
  }),
)
