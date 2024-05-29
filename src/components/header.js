import '../style.css'

const createHeader = () => {
    const header = document.createElement("header")
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")

    const sections = ["About Me", "Education", "Experience", "Skills"]
    const sectionsIds = ["about-me", "education", "experience", "skills"]

    sections.forEach((section, index) =>{
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.textContent = section
        a.href = `#${sectionsIds[index]}`
        li.appendChild(a)
        ul.appendChild(li)
    })

    nav.appendChild(ul)
    header.appendChild(nav)

    return header
}
export default createHeader