//FILL FILTER & SORT FORM WITH OBJECT FROM QUERY PARAMETERS

//Filter fill
let fillFilterForm = function(filterObject) {
    for (const [key, value] of Object.entries(filterObject)){
        var stringValue = value.toString();
        if(value == true) {
            //handles boolean values
            var filterBy = document.getElementById(key);
            filterBy.checked = true;
        } if(stringValue.includes('=')) {
            //handles min-max values
            if(typeof(value) == 'string') {
                if(value.includes('>')) {
                    let minNumber = value.slice(3);
                    filterBy = document.getElementById(`min-${key}`);
                    filterBy.value = minNumber;
                } else if(value.includes('<')) {
                    let maxNumber = value.slice(3);
                    filterBy = document.getElementById(`max-${key}`);
                    filterBy.value = maxNumber;
                }
            } else {
                let minNumber = value[0].slice(3);
                let minFilterBy = document.getElementById(`min-${key}`);
                minFilterBy.value = minNumber;
                let maxNumber = value[1].slice(3);
                let maxFilterBy = document.getElementById(`max-${key}`);
                maxFilterBy.value = maxNumber;
            }
        } else {
             //handles string-value checkboxes
            if(typeof(value) == 'string') {
                var filterBy = document.getElementById(value);
                filterBy.checked = true;
            } else if(typeof(value) == 'object') {
                value.forEach((item) => {
                    console.log(item)
                    var filterBy = document.getElementById(item);
                    filterBy.checked = true;
                });
            }
        }
    }
}


//Sort fill
let fillSortForm = function() {
    var sortString = params.sort.replace(' ', '+');
    var sortBy = document.getElementById(sortString);
    sortBy.checked = true;
}


                //var filterBy = document.querySelector(`[name='${key}']`)
