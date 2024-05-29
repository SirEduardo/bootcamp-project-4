import './style.css'
import data from './components/data'
import profile from './components/profile'
import createHeader from './components/header'

const header = createHeader()
document.body.appendChild(header)

const mainDiv = document.createElement("div")
const avatar = document.createElement("img")
const name = document.createElement("h2")
const address = document.createElement("p")
const AboutMeBtn = document.createElement("button")

avatar.src = data.avatar
name.textContent = data.name
address.textContent = data.address
AboutMeBtn.textContent = "About Me"

mainDiv.classList.add("main-div")
avatar.classList.add("avatar")
name.classList.add("name")
address.classList.add("address")
AboutMeBtn.classList.add("button")

mainDiv.appendChild(avatar)
mainDiv.appendChild(name)
mainDiv.appendChild(address)
document.body.appendChild(mainDiv)
document.body.appendChild(AboutMeBtn)

mainDiv.id = "about-me"

AboutMeBtn.addEventListener("click", profile)
