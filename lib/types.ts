export interface Project {
  id?: string;
  title: string;
  thumbnailURL: string;
  projectUrl?: string;
  gitHubUrl:string;
  category?: string;
  framework: string;
  desc: string;
  active: boolean;
}
export interface Blog {
  id?: string;
  title: string;
  thumbnailUrl: string;
  content: string;
  createdAt: number;
  author?: string;
  published?: boolean;
}

export interface OpensourceContributiin{
  id?:string;
  issue:string;
  status:string;
  description:string;
  codebase:string;
}
export const imageURL = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`;
