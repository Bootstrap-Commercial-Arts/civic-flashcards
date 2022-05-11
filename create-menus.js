//Filter menu item creation
var createFilterMenu = function(){
    //Filter Wrap
    var filterWrap = document.createElement("div");
    filterWrap.setAttribute("id", "filter-wrap")

    //Filter title
    var filterTitle = document.createElement("h3");
    filterTitle.innerHTML = 'Filter';
    filterWrap.append(filterTitle);

    //Dropdown group
    matchedFilter.forEach(entry => {
        var dropdownGroup = document.createElement("div");
        dropdownGroup.setAttribute("class", "dropdown-group");
        filterWrap.append(dropdownGroup);

            //Group Header
            var dropdownHeader = document.createElement("div");
            dropdownHeader.setAttribute("class", "dropdown-header")
            dropdownGroup.append(dropdownHeader)

                //Group title
                var dropdownGroupTitle = document.createElement("h4");
                dropdownGroupTitle.innerHTML = entry.label;
                dropdownHeader.append(dropdownGroupTitle);


            //Group items
            var dropdownGroupItems = document.createElement("div");
            dropdownGroupItems.setAttribute("class", "dropdown-group-items");
            dropdownGroup.append(dropdownGroupItems);

                //individual items according to field type
                    if(entry.display === 'checkbox'){
                        //create hidden display type input
                        var hiddenDisplayType = document.createElement("input");
                        hiddenDisplayType.setAttribute("type","hidden");
                        hiddenDisplayType.setAttribute("name", entry.field);
                        hiddenDisplayType.setAttribute("value", entry.display)                            
                        dropdownGroupItems.append(hiddenDisplayType);
                        Object.values(entry.matchedData).forEach(function(singleEntry){  
                            //create item
                            var dropdownItem = document.createElement("div");
                            dropdownItem.setAttribute("class", "dropdown-item checkbox");
                            dropdownGroupItems.append(dropdownItem);
                            //create input
                            var input = document.createElement("input");
                            input.setAttribute("type", "checkbox");
                            input.setAttribute("value", singleEntry);
                            input.setAttribute("id", singleEntry);
                            input.setAttribute("name", entry.field);
                            dropdownItem.append(input);
                            //create label
                            var label = document.createElement("label");
                            label.setAttribute("for", singleEntry);
                            label.innerHTML = singleEntry;
                            dropdownItem.append(label)
                        });
                    } else if(entry.display === 'minMax'){
                        //create hidden display type input
                        var hiddenDisplayType = document.createElement("input");
                        hiddenDisplayType.setAttribute("type","hidden");
                        hiddenDisplayType.setAttribute("name", entry.field);
                        hiddenDisplayType.setAttribute("value", entry.display)                            
                        dropdownGroupItems.append(hiddenDisplayType);
                        //create item
                            var dropdownItem = document.createElement("div");
                            dropdownItem.setAttribute("class", "dropdown-item min-max");
                            dropdownGroupItems.append(dropdownItem);
                        //create min input
                            var minInput = document.createElement("input");
                            minInput.setAttribute("type", "number");
                            minInput.setAttribute("name", entry.field);
                            minInput.setAttribute("id", `min-${entry.field}`);
                            dropdownItem.append(minInput);
                        //create 'to' span
                            var to = document.createElement("span");
                            to.innerHTML = 'to';
                            dropdownItem.append(to);
                        //create max input
                            var maxInput = document.createElement("input");
                            maxInput.setAttribute("type", "number");
                            maxInput.setAttribute("name", entry.field);
                            maxInput.setAttribute("id", `max-${entry.field}`);
                            dropdownItem.append(maxInput);
                    } else if(entry.display === 'range'){
                        //create hidden display type input
                        var hiddenDisplayType = document.createElement("input");
                        hiddenDisplayType.setAttribute("type","hidden");
                        hiddenDisplayType.setAttribute("name", entry.field);
                        hiddenDisplayType.setAttribute("value", entry.display)                            
                        dropdownGroupItems.append(hiddenDisplayType);
                        let rangeMax = Math.max.apply(null, entry.matchedData);
                        let rangeMin = Math.min.apply(null, entry.matchedData);
                        //create item
                        var dropdownItem = document.createElement("div");
                        dropdownItem.setAttribute("class", "dropdown-item range");
                        dropdownGroupItems.append(dropdownItem);
                        //create min label
                        var minLabel = document.createElement("span");
                        minLabel.innerHTML = rangeMin;
                        dropdownItem.append(minLabel);
                        //create input
                        var input = document.createElement("input");
                        input.setAttribute("type", "range");
                        input.setAttribute("value", entry.display);
                        input.setAttribute("name", entry.field)
                        dropdownItem.append(input);
                        //create max label
                        var maxLabel = document.createElement("span");
                        maxLabel.innerHTML = rangeMax;
                        dropdownItem.append(maxLabel);
                    } else if(entry.display === 'boolean'){
                        //create hidden display type input
                        var hiddenDisplayType = document.createElement("input");
                        hiddenDisplayType.setAttribute("type","hidden");
                        hiddenDisplayType.setAttribute("name", entry.field);
                        hiddenDisplayType.setAttribute("value", entry.display)                            
                        dropdownGroupItems.append(hiddenDisplayType);
                        //create item
                        var dropdownItem = document.createElement("div");
                        dropdownItem.setAttribute("class", "dropdown-item checkbox");
                        dropdownGroupItems.append(dropdownItem);
                        //create input
                        var input = document.createElement("input");
                        input.setAttribute("type", "checkbox");
                        input.setAttribute("value", "true");
                        input.setAttribute("id", entry.field);
                        input.setAttribute("name", entry.field);
                        dropdownItem.append(input);
                        //create label
                        var label = document.createElement("label");
                        label.setAttribute("for", entry.field);
                        label.innerHTML = `Has ${entry.label}`;
                        dropdownItem.append(label)
                    };
                
    });
    //assign hidden 'type' input
    let typeInput = document.getElementById("hidden-type");
    typeInput.setAttribute("value", params.type)

    twoColumns.prepend(filterWrap);

    //create collapse for big input groups
    let inputGroups = document.querySelectorAll(".dropdown-group-items");
    inputGroups.forEach(inputGroup => {
        if(inputGroup.childElementCount > 10) {
            inputGroup.setAttribute("style", "display: none")
            let header = inputGroup.previousSibling;
            //Toggle button
            var dropdownToggle = document.createElement("h4");
            header.setAttribute("class", "toggle dropdown-header")
            dropdownToggle.innerHTML = "+";
            header.append(dropdownToggle);
        };
    });
};

//Sort menu item creation
var createSortMenu = function(){

    //Sort Wrap
    var sortWrap = document.createElement("div");
    sortWrap.setAttribute("id", "sort-wrap")


    //Sort title
    var sortTitle = document.createElement("h3");
    sortTitle.innerHTML = 'Sort';
    sortWrap.append(sortTitle);

    //Dropdown group
    matchedSort.forEach(entry => {
        var dropdownItem = document.createElement("div");
        dropdownItem.setAttribute("class", "dropdown-item radio");
        sortWrap.append(dropdownItem);
        
        //create input
        var input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("value", entry.value);
        input.setAttribute("id", entry.value);
        input.setAttribute("name", "sort");
        dropdownItem.append(input);
        
        //create label
        var label = document.createElement("label");
        label.setAttribute("for", entry.value);
        label.innerHTML = entry.label;
        dropdownItem.append(label)
    });
    
    twoColumns.append(sortWrap);
};



//Toggle function script

var toggleSet = function(){
    var toggles = document.getElementsByClassName("toggle");

    var toggleFunction = function(e) {
        if (e.target.parentElement.nextSibling.style.display == "block"){
            e.target.parentElement.nextSibling.style.display = "none"
        } else {
            e.target.parentElement.nextSibling.style.display = "block"
        }
    };

    for (const toggle of toggles) {
        toggle.addEventListener('click', toggleFunction);
      }
}