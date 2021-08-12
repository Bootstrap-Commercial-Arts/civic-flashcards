import S from '@sanity/desk-tool/structure-builder'

export default () =>
S.list()
    .title('Content')
    .items([
        S.listItem()
            .title('Global')
            .child(
                S.list()
                    .title('Global')
                    .items([
                    S.listItem()
                        .title('States')
                        .child(
                            S.documentTypeList('statesList')
                            .title('State')
                            .child(),
                    ),
                    S.listItem()
                        .title('Parties')
                        .child(
                            S.documentTypeList('partyList')
                            .title('Party')
                            .child(),
                    )
                    ])
            ),
        
        S.listItem()
            .title('Senate')
            .child(
                S.list()
                    .title('Senate')
                    .items([
                    S.listItem()
                        .title('Senators')
                        .child(
                            S.documentTypeList('senator')
                            .title('Senators')
                            .child(),
                        ),
                    S.listItem()
                        .title('Senate Leadership')
                        .child(
                            S.documentTypeList('senateLeadership')
                            .title('Senate Leadership Positions')
                            .child(),
                        ),
                    S.listItem()
                        .title('Senate Committee')
                        .child(
                            S.documentTypeList('senateCommittee')
                            .title('Senate Committees')
                            .child(),
                        ),
                    ])
            )
      
    
        
        
        ])