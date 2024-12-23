export interface Portfolio {
  portfolioID: number;
  title: string;
  thumbnails: string[];
  period: string;
  briefDescription: string;
  description: string;
  urls: { key: string; value: string }[];
  roles: { title: string; tech: string; descriptions: string[] }[];
  techs: {
    title: string;
    images: string[];
    descriptions: { subTitle: string; description: string }[];
    isOpen?: boolean;
  }[];
}
