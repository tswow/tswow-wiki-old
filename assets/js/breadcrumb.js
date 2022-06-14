document.addEventListener("DOMContentLoaded", function(){
    // Fix breadcrumbs
    const breadcrumb_tag = $('.breadcrumb');
    const breadcrumbs = window.location.href
        .split(BASE_URL)[1]
        .split('/')
        .map(x=>x.split('#')[0])
        .filter(x=>!x.endsWith('index.html'))
        .filter(x=>x.length>0);

    if(breadcrumbs.length == 0) {
        return;
    }

    breadcrumb_tag
        .append(`<li><a href="${BASE_URL}">Home</a></li>`)
    let last = breadcrumbs.pop();
    breadcrumbs.forEach((x,i)=>{
        breadcrumb_tag
            .append(`<li><a href="${BASE_URL}/${breadcrumbs.slice(0,i+1).join('/')}">${x}</a></li>`)
    })
    if(last) {
        breadcrumb_tag.append(`<li class="active">${last}</li>`)
    }
});