const MAX_RESULTS = 25

function removeTrailingAnchor(str) {
    let last = str.lastIndexOf('#')
    if(last < 0) return str;
    return str.substring(0,last);
}

function click_search_result(evt) {
    let linkHref = removeTrailingAnchor(evt.getAttribute('href'))
    let windowHref = removeTrailingAnchor(window.location.href)
    if(windowHref.endsWith(linkHref)) {
        const searchResults = $('.search-results');
        searchResults.hide();
        const docWrapper = $('.doc-wrapper,.cards-section');
        docWrapper.show();
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function(){
    $('<div class="search-results"> <table class="table table-bordered search-results-table"> <tbody class="search-result-items"> </tbody> </table></div>')
        .insertBefore('.doc-wrapper,.cards-section')
    $('.searchbar').on('input',function() {
        const searchResults = $('.search-results');
        const searchResultItems = $('.search-result-items')
        const docWrapper = $('.doc-wrapper,.cards-section');

        // hack: dodging the self-inflicted hack of setting tables to 85%
        $('.search-results-table').css('width','100%')
        searchResultItems.empty();
        searchResultItems.append('<tr> <th class="search-results-td">Search Result</th> <th class="search-results-td">Category</th> <th class="search-results-td">Preamble</th> </tr>')
        if(this.value.length == 0) {
            searchResults.hide();
            docWrapper.show();
        } else {
            let searchTerms = this.value.split(' ')
            searchResults.show();
            docWrapper.hide();
            let totalResults = 0;
            // todo: display these better
            for(const [category,values] of Object.entries(search_results)) {
                if(!values) continue;
                for(const [id,{description,url}] of Object.entries(values)) {
                    if(!searchTerms.find(x=>!id.toLowerCase().includes(x.toLowerCase()))) {
                        if(totalResults < MAX_RESULTS) {
                            searchResultItems.append(`
                            <tr>
                                <td class="search-results-td">
                                    <a onclick = "return click_search_result(this);" href="${BASE_URL}/${url}">${id}</a>
                                </td>
                                <td class="search-results-td">
                                    ${category}
                                </td>
                                <td class="search-results-td">
                                    ${description}
                                </td>
                            </tr>`)
                        }
                        totalResults++;
                    }
                }
            }
        }
    });
});