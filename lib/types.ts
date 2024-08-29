export interface Project {
  title: string,
  thumbnailURL: string,
  projectUrl?: string,
  framework: string,
  desc: string,
  active: boolean
}
export interface Blog {
  title: string,
  thumbnailUrl: string,
  content: string,
  createdAt: number,
  author?: string,
  listed: boolean,
}
