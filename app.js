/**
 * The starting point of the application.
 *
 * @author Dennis Fredsson
 * @version 1.0
 */

const fetch = require('node-fetch')

const CATFACT_API_URL = 'https://catfact.ninja/fact'
const BORED_API_URL = 'https://www.boredapi.com/api/activity'

runApplication()

async function getAPIData (url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

async function runApplication () {
  catfactObj = await getAPIData(CATFACT_API_URL)
  activityObj = await getAPIData(BORED_API_URL)

  console.log('Random cat fact: ' + catfactObj.fact + '\n')

  console.log('Random activity: ' + activityObj.activity + '\n')
}
