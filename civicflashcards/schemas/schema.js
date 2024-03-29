// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import senator from './senators.js'
import senateCommittee from './senateCommittee.js'
import senateLeadership from './senateLeadership.js'
import statesList from './states.js'
import partyList from './parties.js'
import representative from './representatives.js'
import houseCommittee from './houseCommittee.js'
import houseLeadership from './houseLeadership.js'
import cabinet from './cabinet.js'
import supremeCourt from './supremeCourt.js'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'civicflashcards',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
   senator, senateCommittee, senateLeadership, statesList, partyList, representative, houseCommittee, houseLeadership, cabinet, supremeCourt
  ]),
})
