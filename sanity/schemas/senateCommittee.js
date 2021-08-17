export default {
  title: 'Senate Committee',
  name: 'senateCommittee',
  type: 'document',
  fields: [
    {
      name: 'senateCommitteeName',
      type: 'string',
      title: 'Senate Committee Name'
    },
    {
      name: 'committeeChair',
      title: 'Committee Chair',
      type: 'reference',
          to: [
              {type:'senator'}
          ]
    },
    {
      name: 'rankingMembers',
      title: 'Ranking Members',
      type: 'array',
          of: [
              {type: 'reference',
                  to: [
                      {type:'senator'}
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
                      {type:'senator'}
                  ]
              }
          ]
    }
]
}