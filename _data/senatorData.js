const groq = require('groq')

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '6dyl9k59',
  dataset: 'production',
  apiVersion: 'v2021-03-25', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

async function getPosts () {
    const filter = groq`*[_type == 'senator'] | order(senatorName asc)`
    const projection = groq`{
        senatorName,
        "partyData":party->partyName,
        "stateData":state->stateAbbr,
        leadershipPositions[],
        "committeeData": *[_type == 'senateCommittee' && references(^._id)].senateCommitteeName,
        assumedOffice,
        reelectionYear,
        cardLink,
        "cardBackData":cardBackImage.asset->url
      }`

}

    module.exports = getPosts

