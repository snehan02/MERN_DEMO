let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let list = document.querySelector("#lists");
let input = document.querySelector("input");

btn.addEventListener("click", async () => {
  let country = input.value;

  let colleges = await getCollege(country);
  console.log(colleges);
  show(colleges);
});

function show(arr) {
  for (el of arr) {
    let li = document.createElement("li");
    li.innerText = el.name;
    list.append(li);
  }
}

async function getCollege(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    console.log("Error --->", err);
    return [];
  }
}
