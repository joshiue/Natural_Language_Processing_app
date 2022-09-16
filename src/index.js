import newsapi from "./newsapi"
import './styles/main.scss'
import news from './assets/news.png'
const newsImg = document.getElementById('newsImg')
newsImg.src = news
console.log(newsapi());
console.log(process.env.SECRET_NAME)

const searchForm = document.querySelector('.search')
const input = document.querySelector('.input')
const newsList = document.querySelector('.news-list')

searchForm.addEventListener('submit', retrieve)

function retrieve(e){
    if (input.value == ''){
        alert('Input field is empty!')
        return
    }
    newsList.innerHTML = ""
    
    e.preventDefault()


    let topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;
    fetch(url).then((res)=>{
        return res.json()
    }).then((data) =>{
        console.log(data)
        data.articles.forEach(article =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li);
        })
    }).catch((error)=>{
        console.log(error);
    })
}

// newsapi()