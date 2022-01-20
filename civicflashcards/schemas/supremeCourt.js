export default {
    name: 'supremeCourt',
    title: 'United States Supreme Court',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Justice Name',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'nominatedBy',
            title: 'Nominated By',
            type: 'string'
        },
        {
            name: 'memberSince',
            title: 'Member Since',
            type: 'number'
        },
        {
            name: 'circuitAssignments',
            title: 'Circuit Assignments',
            type: 'array',
                of: [
                    {type: 'string'}
                ]
        },
        {
            name: 'segalCoverScore',
            title: 'Segal-Cover Score',
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