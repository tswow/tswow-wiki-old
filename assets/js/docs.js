/** Sections hack */

function basename(path) {
    return path.split('/').reverse()[0];
}

function dirname(path) {
    return path.split('/').slice(0,-1).join('/')
}

$(document).ready(function() {
    $('.doc-title').attr('id','doc-title')
    let dir = dirname(page_url);
    doc_pages
        .filter(x=>dirname(x.url) == dir)
        .sort()
        .forEach(x=>{
            const is_cur_page = x.url == page_url
            $('#doc-menu').append(`
            <li>
                <a href="/pretty-docs${x.url}" ${is_cur_page ? 'style="font-weight: bold;"' : ''}> ${x.title} </a>
                <ul ${is_cur_page ? 'id="submenu"':''} class="nav doc-sub-menu"></ul>
            </li>
            `)
        })
    $("h2,h1,h3,h4")
        .each((_,node) => {
            node = $(node)
            if(node.parent().parent().attr('class') !== 'doc-content') {
                return;
            }

            node.css('font-weight','bold')
                .css('border-bottom-style','solid')
                .css('border-width','1px')
                .css('margin-bottom','20px')
                .css('padding-bottom','2px')
                .css('border-color','#d7d7d7')

            $('#submenu').append(`<li><a href=#${node.attr('id')}>${node.text()}</a></li>`)
        })
})