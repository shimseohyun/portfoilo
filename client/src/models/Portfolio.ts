export interface Portfolio {
  portfolioID: number;
  title: string;
  mainColor: string;
  thumbnails: ImageDetail[];
  period: string;
  briefDescription: string;
  description: string;
  urls: { key: string; value: string; info?: string }[];
  roles: { title: string; tech: string; descriptions: string[] }[];
  techs: PortfolioTech[];
}

export interface PortfolioTech {
  title: string;
  images: ImageDetail[];
  descriptions: { subTitle: string; description: string }[];
  isOpen?: boolean;
}

interface ImageDetail {
  url: string;
  alt?: string;
  animation?: string;
}
