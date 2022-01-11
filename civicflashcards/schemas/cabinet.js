export default {
    name: 'cabinet',
    title: 'United States Cabinet',
    type: 'document',
    fields: [
        {
            name: 'cabinetName',
            title: 'Cabinet Member Name',
            type: 'string'
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'confirmationCommittee',
            title: 'Confirming Committee',
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
            name: 'succession',
            title: 'Order of Succession',
            type: 'number'
          },
          {
            name: 'cardLink',
            title: 'Wiki Link',
            type: 'url'
          },
          {
            name: 'cardLink2',
            title: 'Department Link',
            type: 'url'
          },
          {
            name: 'cardBackImage',
            title: 'Card Back Image',
            type: 'image'
          }
      ]
  }
