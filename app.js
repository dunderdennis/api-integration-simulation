/**
 * The starting point of the application.
 *
 * @author Dennis Fredsson
 * @version 1.0
 */

// node package used to make calls to APIs
const fetch = require('node-fetch')

// URL to APIs used in this simulation
const CATFACT_API_URL = 'https://catfact.ninja/fact'
const BORED_API_URL = 'https://www.boredapi.com/api/activity'

// Run the application
runApplication()

/**
 * Makes a call to an API specified by the url parameter, and returns an object containing the response.
 *
 * @param url API url to make call to
 * @returns object containing response data
 */
async function getAPIData (url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

/**
 *  Runs the application, and prints data fetched from each respective API.
 *
 */
async function runApplication () {
  catfactObj = await getAPIData(CATFACT_API_URL)
  activityObj = await getAPIData(BORED_API_URL)

  console.log('\n' + 'Random cat fact: ' + catfactObj.fact + '\n')
  console.log('Random activity: ' + activityObj.activity + '\n')
}
