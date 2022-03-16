// FETCH QUERY SCRIPT
if(params.type) {
    //Set up query vars
    const projectId = '6dyl9k59';
    const apiDate = 'v2022-01-01';
    const dataSet = 'production';
    const encodedProjection = encodeURIComponent(`_type == 'cabinet' => {_type, name, 'confirmationCommittee': confirmationCommittee[]->.senateCommitteeName, position, succession, cardLink, cardLink2, cardBackImage}, _type == 'representative' => {_type, name, state->, party->, district, assumedOffice, 'leadershipPositions': leadershipPositions[]->.houseLeadershipName, 'committeeAssignments': committeeAssignments[]->.CommitteeName, cardLink, cardBackImage}, _type == 'supremeCourt' => {_type, circuitAssignments[], name, memberSince, nominatedBy, position, segalCoverScore, cardLink, cardBackImage}, _type == 'senator' => {_type, name, party->, state->, leadershipPositions[], 'committeeAssignments': committeeAssignments[]->.senateCommitteeName, reelectionYear, cardLink, assumedOffice, cardBackImage}`);
    const type = params.type.replaceAll(' ', ', ');
    const decodedFilter = decodeURI(params.filter);
    const protoFilter = decodedFilter.replaceAll('_', ' == ');
    const filter = protoFilter.replaceAll(',', '&&')

    let leftFilter;
    let rightFilter;
    let encodedFilter;
      
    //check for filter parameters
    function createFilter(){
        if(params.filter) {
            leftFilter = `[_type in [${type}] && ${filter}]`;
        } else {
            leftFilter = `[_type in [${type}]]`;
        }
        return leftFilter;
    };

    createFilter();

    //check for sorting parameters, then create encoded filter
    function createSort() {
        if(params.sort) {
            const sort = params.sort.replaceAll('_', ' ')
             rightFilter = `order(${sort})`;
             encodedFilter = encodeURIComponent(`${leftFilter} | ${rightFilter}`);
        } else {
             encodedFilter = encodeURIComponent(leftFilter);
        }
        return encodedFilter;
    }

    createSort();

    //fetch data & call the createCard, create menu functions

/*
    fetch(`https://${projectId}.api.sanity.io/${apiDate}/data/query/${dataSet}?query=*${encodedFilter}{${encodedProjection}}`)
    .then(res => res.json())
    .then(cardData => cardData.result.forEach((item)=>{
        cardGrid.append(createCard(item));
        sortFilterMatching(item);
    }))
    .then(() => {
        createFilterMenu();
        createSortMenu();
    });
    main.append(cardGrid)
*/

    fetch(`https://${projectId}.api.sanity.io/${apiDate}/data/query/${dataSet}?query=*${encodedFilter}{${encodedProjection}}`)
    .then(res => res.json())
    .then(res => {
        res.result.forEach((item)=>{
            cardGrid.append(createCard(item));  
            sortFilterMatching(item);  
        });
        uniqueResults();
        createFilterMenu();
        createSortMenu();
        toggleSet();
    });
    main.append(cardGrid);
    
};