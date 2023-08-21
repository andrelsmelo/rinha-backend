const redis = require('redis')

const client = redis.createClient({
  host: 'redis',
  port: 6379
})

client.on('error', err => console.log('Redis Client Error', err))

async function connectToRedis () {
  return new Promise((resolve, reject) => {
    client.on('connect', () => {
      console.log('Connected to Redis server')
      resolve()
    })
    client.on('error', error => {
      console.error('Error connecting to Redis:', error)
      reject(error)
    })
  })
}

connectToRedis()
  .then(() => {
    console.log('Redis connection has been established.')
  })
  .catch(error => {
    console.error('Error connecting to Redis:', error)
  })

module.exports = client
