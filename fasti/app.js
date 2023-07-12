import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

import route from './routes/index.js';
import model from '';

fastify.register(route)
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`)
})