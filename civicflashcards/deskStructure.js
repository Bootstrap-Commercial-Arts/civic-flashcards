import S from '@sanity/desk-tool/structure-builder'

export default () =>
S.list()
    .title('Content')
    .items([
        S.listItem()
            .title('Global Values')
            .child(
                S.list()
                    .title('Global Values')
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
            ),

        S.listItem()
            .title('House')
            .child(
                S.list()
                    .title('House')
                    .items([
                    S.listItem()
                        .title('Representatives')
                        .child(
                            S.documentTypeList('representative')
                            .title('Representative')
                            .child(),
                        ),
                    S.listItem()
                        .title('House Leadership')
                        .child(
                            S.documentTypeList('houseLeadership')
                            .title('House Leadership Positions')
                            .child(),
                        ),
                    S.listItem()
                        .title('House Committee')
                        .child(
                            S.documentTypeList('houseCommittee')
                            .title('House Committees')
                            .child(),
                        ),
                    ])
            ),
      
        S.listItem()
            .title('Cabinet')
            .child(
                S.list()
                    .title('Cabinet')
                    .items([
                    S.listItem()
                        .title('Cabinet Members')
                        .child(
                            S.documentTypeList('cabinet')
                            .title('Cabinet Members')
                            .child(),
                        )
                    ])
            ),

        S.listItem()
            .title('Supreme Court')
            .child(
                S.list()
                    .title('Supreme Court')
                    .items([
                    S.listItem()
                        .title('Justices')
                        .child(
                            S.documentTypeList('supremeCourt')
                            .title('Justices')
                            .child(),
                        )
                    ])
            )
        
        
        ])