import data from './data'

const profile = () =>{

    const closeProfile = document.querySelector(".profile")
    if (closeProfile) {
        closeProfile.remove()
        return;
    }

    const profileDiv = document.createElement("div")
    profileDiv.classList.add("profile")

    const h2 = document.createElement("h2")
    const aboutMe = document.createElement("p")

    const eduDiv = document.createElement("div")
    const eduTitle = document.createElement("h3")
    const eduAvatar = document.createElement("img")
    const education = document.createElement("p")
    const year = document.createElement("p")

    const expDiv = document.createElement("div")
    const expTitle = document.createElement("h3")
    const expAvatar = document.createElement("img")
    const position = document.createElement("p")
    const company = document.createElement("p")

    const skillsDiv = document.createElement("div")
    const skillsTitle = document.createElement("h3")
    const skillsAvatar = document.createElement("img")
    const listDiv = document.createElement("div")


    h2.textContent = "WHO I AM"
    aboutMe.textContent = data.aboutMe

    eduTitle.textContent = "EDUCATION"
    eduAvatar.src = data.education.avatar
    education.textContent = data.education.course
    year.textContent = data.education.graduationYear

    expTitle.textContent = "EXPERIENCE"
    expAvatar.src = data.experience.avatar
    position.textContent = data.experience.position
    company.textContent = data.experience.company

    skillsTitle.textContent = "SKILLS"
    skillsAvatar.src = data.skills.avatar

    data.skills.list.forEach(skill => {
        const skillItem = document.createElement("p")
        skillItem.textContent = skill
        listDiv.appendChild(skillItem)
    })

    h2.classList.add("h2")
    aboutMe.classList.add("about-me")

    eduDiv.classList.add("divs")
    eduAvatar.classList.add("img")
    eduTitle.classList.add("section")
    education.classList.add("title")

    expDiv.classList.add("divs")
    expTitle.classList.add("section")
    expAvatar.classList.add("img")
    position.classList.add("title")

    skillsDiv.classList.add("divs")
    skillsAvatar.classList.add("img")
    skillsTitle.classList.add("section")
    listDiv.classList.add("list")
    

    
    eduDiv.id = "education"
    expDiv.id = "experience"
    skillsDiv.id = "skills"


    eduDiv.appendChild(eduTitle)
    eduDiv.appendChild(eduAvatar)
    eduDiv.appendChild(education)
    eduDiv.appendChild(year)

    expDiv.appendChild(expTitle)
    expDiv.appendChild(expAvatar)
    expDiv.appendChild(position)
    expDiv.appendChild(company)

    skillsDiv.appendChild(skillsTitle)
    skillsDiv.appendChild(skillsAvatar)
    skillsDiv.appendChild(listDiv)

    profileDiv.appendChild(h2)
    profileDiv.appendChild(aboutMe)
    profileDiv.appendChild(eduDiv)
    profileDiv.appendChild(expDiv)
    profileDiv.appendChild(skillsDiv)

    document.body.appendChild(profileDiv)

}

export default profile