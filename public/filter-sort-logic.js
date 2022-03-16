//FORM SUBMIT SCRIPT

    //Set up vars
    let sortFormData;
    let filterFormObject = new Object();
    let filterFormData = '';
    let filterArray = [];
    let encodedFilterData;
    let typeArray = [];
    let typeData;
    let newQueryString;

    //Deck Select form submit
    const formD = document.forms.deckSelectForm;
    function deckSelectSubmit(event) {
        event.preventDefault();
        const formData = new FormData(deckSelectForm);
        for(var pair of formData.entries()) {
            typeArray.push(`"${pair[0]}"`);
        };
        typeData = typeArray.join('+');
        window.location.href=`${location.origin}?type=${typeData}&popup=no`;
    };

    formD.addEventListener('submit', deckSelectSubmit);

    //Sort & Filter form submit
    const formFS = document.forms.filterSortForm;
    function filterSortSubmit(event) {
        //capture form data
        event.preventDefault();
        
        //check minMax filters for empty fields & replace with null
        let minMaxFields = document.querySelectorAll('.min-max');
        minMaxFields.forEach(function(fieldGroup) {
            var fields = fieldGroup.getElementsByTagName("input");
            for (let field of fields) {
                if(isNaN(field)){
                    field.setAttribute('type', 'text');
                    field.setAttribute('value', 'null');
                };
            }
        });
        

        const formData = new FormData(filterSortForm);
        for(var pair of formData.entries()) {
            if(pair[1] != '') {
                if(pair[0] === 'sort') {
                    sortFormData = `sort=${pair[1]}`;
                }
                else if(pair[0] === 'type') {
                    typeData = `type=${pair[1]}`.replaceAll('" "', '"+"');
                }
                else {
                    if(!(filterFormObject[pair[0]])) {
                        filterFormObject[pair[0]] = [];
                        filterFormObject[pair[0]].push(pair[1]);
                    } else if(filterFormObject[pair[0]]) {
                        filterFormObject[pair[0]].push(pair[1]);
                    };
                };
            };
        };
        // mutate filterFormObject into readable format and save as filterFormData
        const loopNestedObj = (obj) => {
            Object.keys(obj).forEach(key => {
                if(typeof obj[key] === 'object') {
                    if(obj[key][0] == 'checkbox') {
                        if(obj[key][1]) {
                            let cleanedValue = obj[key].slice(1);
                            let valueString = cleanedValue.join('" || "');
                            filterArray.push(`(${key} == "${valueString}")`);
                        };
                    } else if(obj[key][0] == 'minMax') {
                        if(isNaN(obj[key][1]) && !isNaN(obj[key][2])) {
                            filterArray.push(`${key} <= ${obj[key][2]}`);
                        } else if(!isNaN(obj[key][1]) && isNaN(obj[key][2])){
                            filterArray.push(`${key} >= ${obj[key][1]}`);
                        }else if(!isNaN(obj[key][1]) && !isNaN(obj[key][2])){
                            filterArray.push(`(${key} >= ${obj[key][1]} , ${key} <= ${obj[key][2]})`);
                        };
                    };
                };
            });
            encodedFilterData = encodeURI(filterArray.join(' , '));
            filterFormData = `filter=${encodedFilterData}`;
            
        };

        loopNestedObj(filterFormObject);

        //create new URL params
        console.log(`SORT: ${sortFormData} | FILTER: ${filterFormData} | TYPE: ${typeData}`);
        if(!(sortFormData) && !(encodedFilterData)) {
            newQueryString = `${typeData}`;
        } else if(sortFormData && !(encodedFilterData)) {
            newQueryString = `${typeData}&${sortFormData}`;
        } else if (!(sortFormData) && encodedFilterData) {
            newQueryString = `${typeData}&${filterFormData}`;
        } else if (sortFormData && encodedFilterData) {
            newQueryString = `${typeData}&${filterFormData}&${sortFormData}`;
        };
    window.location.href=`${location.origin}?${newQueryString}&popup=no`;
    };

    formFS.addEventListener('submit', filterSortSubmit);







// SORT & FILTER DATA MATCHING SCRIPT

    //Set up layout vars for filter & sort menu
    var twoColumns = document.getElementById("two-columns");

    //potential sort/filter fields
    var potentialSort = [{field:'name', value:'name+asc', label:'Name (a-z)'}, 
                            {field:'name', value:'name+desc', label:'Name (z-a)'},
                            {field:'party', value:'party+asc', label:'Party'},
                            {field:'memberSince', value:'memberSince+asc', label:'Member Since'},
                            {field:'reelectionYear', value:'reelectionYear+asc', label:'Reelection Year'},
                            {field:'state', value:'state+asc', label:'State'},
                            {field:'succession', value:'succession+asc', label:'Order of Succession'}
                        ];
    var potentialFilter = [{field:'nominatedBy', value: 'nominatedBy', label:'Nominated By', display:'checkbox', data:[]},
                            {field:'party', value: 'partyName->.partyName', label:'Party', display:'checkbox', data:[]},
                            {field:'memberSince', value: 'memberSince', label:'Member Since', display:'minMax', data:[]},
                            {field:'segalCoverScore', value: 'segalCoverScore', label:'Segal Cover Score', display:'minMax', data:[]},
                            {field:'state', label:'State', value: '.stateName', display:'checkbox', data:[]},
                            {field:'confirmationCommittee', value: 'confirmationCommittee[]->.senateCommitteeName', label:'Confirmation Committee', display:'checkbox', data:[]}
                        ];

    //create found data vars
    var matchedSort = [];
    var matchedFilter = [];
    
    //go over data & match potential sort/filter fields with found fields
    var sortFilterMatching = function(result){
        for (const [key, value] of Object.entries(result)) {
            
            //Sort Matching
            potentialSort.forEach(sortField => {
                if(key == sortField.field){
                    if (!matchedSort.includes(sortField)){
                        matchedSort.push(sortField);
                    };
                };
            });

            //Filter Matching
            potentialFilter.forEach(filterField => {
                if(key == filterField.field){
                    if (!matchedFilter.includes(filterField)){
                        let matchedData = filterField;
                        matchedData.data = new Set;
                        matchedData.data.add(value);
                        matchedFilter.push(matchedData);
                    } else {
                        let i = matchedFilter.indexOf(filterField);
                        matchedFilter[i].data.add(value);
                    }
                    
                };
            });
        };
    };

    console.log(matchedFilter);


var uniqueResults = function(){
    matchedFilter.forEach((matchedField) => {
        matchedField.matchedData = Array.from(matchedField.data);
    });
};