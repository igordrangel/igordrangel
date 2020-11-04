export interface ProjetoInterface {
  title: string;
  subtitle: string;
  img: {
    src: string;
    alt: string;
  };
  linkGitHub: string;
  linkNpm?: string;
}
