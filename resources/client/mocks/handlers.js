import {rest} from 'msw'

export default [
  rest.get('/comment', (req, res, ctx) => {
    return res(
      ctx.json({
        comment: 'it works :)',
      }),
    )
  }),
]
