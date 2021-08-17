export default {
    title: 'House Committee',
    name: 'houseCommittee',
    type: 'document',
    fields: [
      {
          name: 'CommitteeName',
          title: 'House Committee Name',
          type: 'string'
        },
        {
            name: 'committeeChair',
            title: 'Committee Chair',
            type: 'reference',
                to: [
                    {type:'representative'}
                ]
          },
          {
            name: 'rankingMembers',
            title: 'Ranking Members',
            type: 'array',
                of: [
                    {type: 'reference',
                        to: [
                            {type:'representative'}
                        ]
                    }
                ]
          },
          {
            name: 'members',
            title: 'Members',
            type: 'array',
                of: [
                    {type: 'reference',
                        to: [
                            {type:'representative'}
                        ]
                    }
                ]
          }
    ]
  }