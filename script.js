const button = document.querySelector("#button")
const jokes = document.querySelector("#jokes")

const nextDadJokes = async () => {
  const joke = await getDadJokes()
  console.log("joke", joke)
  jokes.textContent = joke
}
const getDadJokes = async () => {
  const config = { headers: { accept: "application/json" } }
  const res = await axios.get("https://icanhazdadjoke.com/", config)
  console.log("res", res)
  return res.data.joke
}

button.addEventListener("click", () => {
  nextDadJokes()
})
window.onload = function () {
  nextDadJokes()
}
