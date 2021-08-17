export default {
    name: 'representative',
    title: 'United States Representatives',
    type: 'document',
    fields: [
        {
          name: 'representativeName',
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