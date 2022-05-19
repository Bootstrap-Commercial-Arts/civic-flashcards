// FETCH QUERY SCRIPT
if(params.type) {

    //Set up query vars
    const projectId = '6dyl9k59';
    const apiDate = 'v2022-01-01';
    const dataSet = 'production';
    const projection = `_type == 'cabinet' => {_type, name, 'confirmationCommittee': confirmationCommittee[]->senateCommitteeName, position, succession, cardLink, cardLink2, cardBackImage}, _type == 'representative' => {_type, name, 'stateName': state->stateName, 'stateAbbr': state->stateAbbr, 'party': party->partyName, district, assumedOffice, 'leadershipPositions': leadershipPositions[]->houseLeadershipName, 'committeeAssignments': committeeAssignments[]->CommitteeName, cardLink, cardBackImage}, _type == 'supremeCourt' => {_type, circuitAssignments[], name, 'assumedOffice': memberSince, nominatedBy, position, segalCoverScore, cardLink, cardBackImage}, _type == 'senator' => {_type, name, 'party': party->partyName, 'stateName': state->stateName, 'stateAbbr': state->stateAbbr, 'leadershipPositions': leadershipPositions[]->senateLeadershipName, 'committeeAssignments': committeeAssignments[]->senateCommitteeName, reelectionYear, cardLink, assumedOffice, cardBackImage}`;
    const type = params.type.replaceAll(' ', ', ');
    const filterString = '{' + decodeURI(params.filter).replaceAll('=', ': ').replaceAll('&', ', ').replaceAll('<', '<=').replaceAll('>', '>=') + '}';
    let filterObject;
    let fetchQuery = `[_type in [${type}]] {${projection}}`;
    let encodedQuery;
    let protoFilter = [];
    let filter = '';
    
    
    
        

    //check for filter & sort parameters
    if(params.filter){
        filterObject = JSON.parse(filterString);
        //convert filterObject into GROQ formatting
        for (const [key, value] of Object.entries(filterObject)){
            if(value === true) {
                protoFilter.push(`(defined(${key}))`);
            } else if(value[0].charAt(0) == '<' || value[0].charAt(0) == '>') {
                if(typeof(value) !== 'string'){
                    protoFilter.push(`(${key} ${value[0]} && ${key} ${value[1]})`);
                } else {
                    protoFilter.push(`(${key} ${value})`);
                };
            } else {
                let forEachBuffer = [];
                value.forEach((item) => {
                    forEachBuffer.push(`${key} match "${item}"`)
                });
                let forEachJoined = forEachBuffer.join(' || ')
                protoFilter.push(`(${forEachJoined})`)
            };
        };
        encodedFilterData = protoFilter.join(' && ');
        filter = `${encodedFilterData}`;

        fetchQuery += ` [${filter}]`;
    };
    
    if(params.sort) {
        fetchQuery += ` | order(${params.sort})`;
    };

    encodedQuery = encodeURIComponent(fetchQuery);

    //fetch data & call the createCard, create menu functions
    fetch(`https://${projectId}.api.sanity.io/${apiDate}/data/query/${dataSet}?query=*${encodedQuery}`)
    .then(res => res.json())
    .then(res => {
        res.result.forEach((item)=>{
            cardGrid.append(createCard(item));  
            sortFilterMatching(item);  
        });
        if(res.result.length > 0) {
            main.append(cardGrid);
            uniqueResults();
            createFilterMenu();
            createSortMenu();
            toggleSet();
            if(params.sort) {
                fillSortForm();
            }
            if(params.filter) {
                fillFilterForm(filterObject);
            }
            if(params.type) {
                fillTypeForm();
            }
        }
        else {
            noCards();
        }
    })
};









