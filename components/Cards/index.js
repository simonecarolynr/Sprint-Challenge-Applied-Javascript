// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// X Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const articleCards = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then ((response) => {
    console.log(response.data);
    let articles = response.data.articles;
    for (let topic in articles){
        let topicArticles = articles[topic];
        topicArticles.forEach((article) => {
            articleCards.appendChild(articleCreator(article))
        })
    }

})
/* .then((response) => {
    articleCards.appendChild(articleCreator(response.data.articles.bootstrap))
    return articleCards;
})
.then((response) => {
    articleCards.appendChild(articleCreator(response.data.articles.technology))
    return articleCards;
})
.then((response) => {
    articleCards.appendChild(articleCreator(response.data.articles.jquery))
    return articleCards;
})
.then((response) => {
    articleCards.appendChild(articleCreator(response.data.articles.node))
    return articleCards;
}) */
.catch((err) => {
    console.log(err);
});





function articleCreator(articleTopic) {
    //creating elements
    const articleCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const authorImgContainer = document.createElement('div');
    const img = document.createElement('img');
    const articleAuthorName = document.createElement('span');

    //adding classList
    articleCard.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    authorImgContainer.classList.add('img-container');

    //setting attribute of author profile by fetching data within parameter
    img.src = articleTopic.authorPhoto;

    //setting textContent of headline and author name by fetching data within parameter
    articleHeadline.textContent = articleTopic.headline;
    articleAuthorName.textContent = `By: ${articleTopic.authorName}`;

    //appending elements to their containers
    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(authorImgContainer);
    authorImgContainer.appendChild(img);
    articleAuthor.appendChild(articleAuthorName);

    //looping through arrays with an array, here's a recursion?
   /*  articleTopic.data.articles.forEach((topic) => {
        topic.forEach((arrItem) => {
            return articleCreator(arrItem);
        }) 
    }); */

    return articleCard;
};