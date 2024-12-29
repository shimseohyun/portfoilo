import {
  MultiSelect,
  NotionDate,
  NotionRichText,
  NotionTitle,
  NotionURL,
} from "./Notion";

export interface Project {
  object: "page";
  id: string;
  public_url: string;
  properties: {
    thumbnail: NotionURL;
    info: MultiSelect;
    awards: MultiSelect;
    date: NotionDate;
    description: NotionRichText;
    git: NotionURL;
    project: NotionTitle;
    role: MultiSelect;
    url: NotionURL;
  };
}
