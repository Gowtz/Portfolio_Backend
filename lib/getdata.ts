import prisma from "./prisma";

export async function getProjects() {
  try {

    const projects = await prisma.projects.findMany()
    return projects
  }
  catch (error) {
    console.log("Database Error", error);
    return
  }
}

export async function deleteProjectById(id: string) {
  try {
    const deleted = await prisma.projects.delete({
      where: {
        id: id
      }
    })
    return "deleted"
  } catch (error) {

  }
}
