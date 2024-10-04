document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: "abc-news", name: "ABC News" },
                author: "The Associated Press",
                title: "Elon Musk to join Trump at rally at the site of first assassination attempt",
                description: "Billionaire Elon Musk will join Donald Trump at a rally at the site of the former president's July assassination attempt",
                url: "https://abcnews.go.com/Politics/wireStory/elon-musk-join-trump-rally-site-assassination-attempt-114498648",
                urlToImage: "https://i.abcnewsfe.com/a/266be626-6ae0-4abc-a942-ec3d3e394f12/wirestory_4f7d510c1b86f7cced7ca87e77876ad2_16x9.jpg?w=1600",
                publishedAt: "2024-10-04T14:46:26Z",
                content: "Elon Musk will join Donald Trump at his rally Saturday in Butler, the Pennsylvania city where the Republican presidential nominee survived an assassination attempt earlier this year.\r\nI will be there… [+1502 chars]"
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
