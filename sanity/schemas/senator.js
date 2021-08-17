export default {
    name: 'senator',
    title: 'United States Senators',
    type: 'document',
    fields: [
        {
          name: 'senatorName',
          title: 'Senator Name',
          type: 'string'
        },
        {
            name: 'party',
            title: 'Party',
            type: 'reference',
              to: [
                {type:'partyList'}
              ]
          },
          {
            name: 'state',
            title: 'State',
            type: 'reference',
              to: [
                {type:'statesList'}
              ]
          },
          {
            name: 'leadershipPositions',
            title: 'Leadership Positions',
            type: 'array',
              of: [
                {
                  type: 'string',
                }
              ]
          },
          {
            name: 'assumedOffice',
            title: 'Assumed Office',
            type: 'number'
          },
          {
            name: 'reelectionYear',
            title: 'Reelection Year',
            type: 'number'
          },
          {
            name: 'cardLink',
            title: 'Link',
            type: 'url'
          },
          {
            name: 'cardBackImage',
            title: 'Card Back Image',
            type: 'image'
          }
      ]
  }