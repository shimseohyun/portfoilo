interface NotionText {
  plain_text: string;
}

export interface NotionTag {
  name: string;
  color: NotionTagColor;
}

export type NotionTagColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

export interface MultiSelect {
  multi_select: NotionTag[];
}

export interface NotionTitle {
  title: NotionText[];
}

export interface NotionDate {
  date: { end: string | null; start: string; time_zone: string | null };
}

export interface NotionRichText {
  rich_text: NotionText[];
}

export interface NotionURL {
  url: string | null;
}
