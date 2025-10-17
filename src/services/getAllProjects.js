import projectsData from "../data/projectsData"

export const getProjects = (language) => {
    return projectsData(language)
}