import Deploy from "./Deploy";

export default interface Project {
  id?: number;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  deploy?: Deploy;
}
