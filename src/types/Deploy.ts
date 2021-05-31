export default interface Deploy {
  site: "netlify" | "heroku" | "firebase";
  url: string;
}
