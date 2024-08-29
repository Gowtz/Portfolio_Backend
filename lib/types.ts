export interface Project {
  id?: string
  title: string,
  thumbnailURL: string,
  projectUrl?: string,
  category: string,
  framework: string,
  desc: string,
  active: boolean,
}
export interface Blog {
  title: string,
  thumbnailUrl: string,
  content: string,
  createdAt: number,
  author?: string,
  listed: boolean,
}
export const imageURL = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`
