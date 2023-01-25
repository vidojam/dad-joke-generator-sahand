
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "Ga+MSV/TPR4Ck76CZFLpKA==irNAzrPeEZluLE99";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disable = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json(); // convert the response data to json
        // console.log(data [0].joke);
        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerHTML = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }


}


btnEl.addEventListener("click", getJoke);