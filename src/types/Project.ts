import Deploy from "./Deploy";
import FrameworkLogo from "./FrameworkLogo";

export default interface Project {
  id?: number;
  name: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  deploy?: Deploy;
  technologies: FrameworkLogo[];
}
