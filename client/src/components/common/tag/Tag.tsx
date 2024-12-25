import { NotionTag, NotionTagColor } from "@models/Notion";
import styled from "styled-components";

interface TagWrapperProp {
  $tagColor: NotionTagColor;
}

const TagWrapper = styled.div<TagWrapperProp>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: ${(props) => getColorCode(props.$tagColor)};
  color: ${({ theme }) => theme.colors.font.body_sub};
`;

const Tag = ({ ...props }: NotionTag) => {
  return (
    <TagWrapper className="b3_bold" $tagColor={props.color}>
      {props.name}
    </TagWrapper>
  );
};

export default Tag;

const getColorCode = (color: NotionTagColor): string => {
  const colorMap: Record<NotionTagColor, string> = {
    default: "#F1F0F0",
    gray: "#E3E2E0",
    brown: "#EFDFDA",
    orange: "#FADEC9",
    yellow: "#FDECC8",
    green: "#DBEDDB",
    blue: "#D3E5EF",
    purple: "#E8DEEE",
    pink: "#F4E0E9",
    red: "#FFE2DD",
  };

  return colorMap[color];
};
