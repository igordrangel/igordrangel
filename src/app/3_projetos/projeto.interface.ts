export interface ProjetoInterface {
  title: string;
  subtitle: string;
  content: string;
  img: {
    src: string;
    alt: string;
  };
  linkGitHub: string;
  linkNpm?: string;
  linkPackagist?: string;
  linkSite?: string;
  linkYoutube?: string;
}
