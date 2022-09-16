// import axios from 'axios'
console.log(process.env.SECRET_NAME)


function newsapi() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  get("https://newsapi.org", config).then((res) => {
    document.getElementById("subBtn"), (innerHTML = res.data.subBtn);
  })
}

export default newsapi