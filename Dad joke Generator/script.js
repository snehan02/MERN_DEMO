let url = "https://icanhazdadjoke.com/";

let div = document.querySelector(".container-fluid");

let btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  let joke = await getJoke();
  console.log(joke);
  let p = document.createElement("p");
  p.innerText = joke;
  p.style.border = "2px solid black";
  div.append(p);
});

async function getJoke() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    return res.data.joke;
  } catch (err) {
    console.log("Error --->", err);
  }
}
