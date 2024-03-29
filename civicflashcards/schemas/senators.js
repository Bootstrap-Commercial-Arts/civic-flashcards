export default {
    name: 'senator',
    title: 'United States Senators',
    type: 'document',
    fields: [
        {
          name: 'name',
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
                  type: 'reference',
                  to: [
                    {type: 'senateLeadership'}
                  ]
                }
              ]
          },
          {
            name: 'committeeAssignments',
            title: 'Committee Assignments',
            type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'senateCommittee'}
                  ]
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