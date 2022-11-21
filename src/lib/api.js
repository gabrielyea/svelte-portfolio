import { error, json } from '@sveltejs/kit'

const base = 'http://something.com'

/**
 *
 * @param {any} send
 */
async function send({method, path, data, token}) {
  const opts = { method, headers:{}}

  console.log('testing send with', method, path, data, token)
  if (!method) {
    throw error(404, "testing error")
  }

  return json({data: 'hello there'})
}

/**
 * @param {any} path
 * @param {any} token
 */
export function get(path, token) {
  return send({method: 'GET', path, token})
}
