export default {
    name: 'representative',
    title: 'United States Representatives',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Representative Name',
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
            name: 'district',
            title: 'District',
            type: 'string',
          },
          {
            name: 'leadershipPositions',
            title: 'Leadership Positions',
            type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [
                    {type: 'houseLeadership'}
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
                    {type: 'houseCommittee'}
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