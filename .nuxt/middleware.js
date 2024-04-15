const middleware = {}

middleware['cors'] = require('../middleware/cors.js')
middleware['cors'] = middleware['cors'].default || middleware['cors']

export default middleware
