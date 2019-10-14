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
    response.data.articles.forEach((topic) => {
        topic.forEach((arrItem) => {
            articleCards.appendChild(articleCreator(arrItem))
        }); 
    })
})

.catch((err) => {
    console.log(err);
});



function articleCreator(articleTopic) {
    const articleCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const articleAuthor = document.createElement('div');
    const authorImgContainer = document.createElement('div');
    const img = document.createElement('img');
    const articleAuthorName = document.createElement('span');

    articleCard.classList.add('card');
    articleHeadline.classList.add('headline');
    articleAuthor.classList.add('author');
    authorImgContainer.classList.add('img-container');

    img.src = articleTopic.authorImg;

    articleHeadline.textContent = articleTopic.headline;
    articleAuthorName.textContent = `By: ${articleTopic.authorName}`;

    articleCard.appendChild(articleHeadline);
    articleCard.appendChild(articleAuthor);
    articleAuthor.appendChild(authorImgContainer);
    authorImgContainer.appendChild(authorImg);
    articleAuthor.appendChild(articleAuthorName);

    return articleCard;
};

