const axios = require("axios")
const cache = require("./cache")

const { kanto } = require('./locations.js')
const { results }  = require("./config.js")


let options = {
  baseURL: `${results.protocol}${results.hostName}`,
  timeout: results.timeout
}


exports.fetchData = async (inputKey, endpoint) => {
  let url = `${results.protocol}${results.hostName}${results.versionPath}${endpoint}/${inputKey}/`

  //try to cache data 
  try {
    const cachedResult = cache.get(inputKey)
    if (cachedResult !== null && !cachedResult.isExpired) {
      console.log()
      return cachedResult
    } else
    console.log()

    fetch = await axios.get(url, options) //if unable to cache data, 
                                              //the data will be fetched from the API instead
    


    //if there is an error
    if (fetch.outputCode !== undefined && fetch.statusCode !== 200) {
      const { output, outputText } = fetch
      throw { output, outputText }
    } else {
      const { 
        data: {
          id,
          name,
          types,
          location_area_encounters,
          stats 
        } 
      } = fetch


      encounter_results = await axios.get(location_area_encounters, options)
      let encounter_locations = null
      if (encounter_results) {
        encounter_locations = encounter_results.data
        .map(e => ({
          location_area: e.location_area.name,
          methods: e.version_details
            .map(d => d.encounter_details
              .map(ed =>
                ed.method.name
              )
            )
          }))
        .filter((f) => kanto.includes(f.location_area));
        }


      //data to be saved 
      const pokemon = {
        id,
        name,
        types: types.map(t => ({ type: t.type.name})),
        stats: stats.map(s => ({ stats_name: s.stat.name, result: s.base_stat})),
        encounters: encounter_locations
      }

      //cache data in text file
      cache.set( `${id}-${name}`, pokemon, results.expire)

      return pokemon
    }
  } catch (error) {
    throw error.message
  }
}
