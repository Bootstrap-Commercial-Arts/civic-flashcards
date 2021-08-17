// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import statesList from './states.js'
import partyList from './parties.js'
import senator from './senator.js'
import senateCommittee from './senateCommittee.js'
import representative from './representative.js'
import houseCommittee from './houseCommittee'
import cabinet from './cabinet.js'
import supremeCourt from './supremeCourt.js'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'civicflashcards',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
   senator, senateCommittee, statesList, partyList, representative, houseCommittee, cabinet, supremeCourt
  ]),
})
