import {Catalog} from "./src/components/catalog.js"

const renderPost = item => `
    <a  
        href="post.html?id=${item.id}"
        class="post">
        
        <span class="post__title">
            ${item.title}
        </span>

        <span class="post__body">
            ${item.body}
        </span>
    </a>
`

const getPosts = async ({limit, page}) => {
    try {
        const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
        const total = responsePosts.headers.get('x-total-count');
        const items = await responsePosts.json();
        return {items, total};
    } catch (e) {
        console.log(e);
    }
}

const renderPhoto = item => `
    <a href="photos/${item.id}"
       class="photo">
       
        <span class="photo__title"> ${item.title} </span>

        <img src=${item.url}
             class="photo__image">
    </a>`

const getPhotos = async ({limit, page}) => {
    try {
        const responsePhotos = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);
        const total = responsePhotos.headers.get('x-total-count');
        const items = await responsePhotos.json();
        return {items, total};
    } catch (e) {
        console.log(e);
    }
}

const init = () => {
    const catalog = document.getElementById('catalog')
    new Catalog(catalog, {
        renderItem: renderPost,
        getItems: getPosts
    }).init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
