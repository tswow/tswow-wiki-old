/** Sections hack */

function basename(path) {
    return path.split('/').reverse()[0];
}

function dirname(path) {
    return path.split('/').slice(0,-1).join('/')
}

const IS_API_PAGE = page_url.includes('/api/')
const IS_TUTORIAL_PAGE = page_url.includes('/tutorials/')

$(document).ready(function() {
    $('.doc-title').attr('id','doc-title')
    let dir = dirname(page_url);
    doc_pages
        .filter(x=>dirname(x.url) == dir)
        .sort()
        .forEach(x=>{
            const is_cur_page = x.url == page_url
            if(IS_API_PAGE) {
                return;
            }

            if(IS_TUTORIAL_PAGE || is_cur_page) {
                $('#doc-menu').append(`
                <li class="doc-sidebar-list">
                    <a href="/test${x.url}" ${is_cur_page ? 'style="font-weight: bold;"' : ''}> ${x.title} </a>
                    <ul ${is_cur_page ? 'id="submenu"':''} class="nav doc-sub-menu"></ul>
                </li>
                `)
            }
        })

    function header_base(node) {
        node.css('font-weight','bold')
            .css('margin-bottom','20px')
            .css('padding-bottom','2px')
        if(!IS_API_PAGE) {
            $('#submenu').append(`<li><a href=#${node.attr('id')}>${node.text()}</a></li>`)
        }
    }

    $(".code-example")
        .each((_,node)=>{
            node = $(node)
            node.children().addClass('code-example-block')
        })
    $(".language-plaintext")
        .each((_,node)=>{
            node = $(node)
            if(node.is("div")) node.removeClass('language-plaintext')
        })

    // todo: move to sass
    if(page_url.includes('api')) {
        $("table,pre")
            .css('width','85%')
    }
    
    // todo: move to sass
    $("h1,h2")
        .each((_,node) => {
            node = $(node)
            if(node.parent().parent().attr('class') !== 'doc-content') {
                return;
            }
            header_base(node);
            node.css('border-bottom-style','solid')
                .css('border-width','1px')
                .css('border-color','#d7d7d7')
        })
    $("h3")
        .each((_,node) => {
            node = $(node)
            if(node.parent().parent().attr('class') !== 'doc-content') {
                return;
            }
            header_base(node)
        })

    if(!IS_API_PAGE) {
        $(".language-plaintext").css('background-color','#646464')
    }

    function updateSidebar() {
        // note: this glitched out scrolling on short pages, needs rewrite to work
        /*
        let list = $('.doc-sidebar-list')

        // sorry 4k people i will get to you eventually
        let BASE_WINDOW_WIDTH = 1680;

        let BASE_X_OFFSET = -200;
        let BASE_SIDEBAR_WIDTH = 350;
        let MAX_DIFF = 150;

        let diff = Math.min(MAX_DIFF,BASE_WINDOW_WIDTH-Math.min(BASE_WINDOW_WIDTH,window.innerWidth))

        let scroll_offset = Math.min(document.scrollTop,80)

        list.css('left',`${BASE_X_OFFSET+diff}px`);
        list.css('width',`${BASE_SIDEBAR_WIDTH-diff}px`);
        list.css('height',`${window.innerHeight-20-scroll_offset}px`)
        */
    }
    document.addEventListener('scroll',updateSidebar);
    window.addEventListener('resize',updateSidebar);
    updateSidebar();
})