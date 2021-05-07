import Deploy from "./Deploy";

export default interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  deploy?: Deploy
}