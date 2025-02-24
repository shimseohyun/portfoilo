import styled from "styled-components";

// utils
import getHighlightedText from "@utils/getHighlightText";

interface HighlightedTextProps {
  text: string;
  highlightColor: string;
  prevTextLength?: number;
}

const HighlightedText = (props: HighlightedTextProps) => {
  const { text, prevTextLength = 0, highlightColor } = props;
  return (
    <HighlightedTextWrapper>
      {getHighlightedText({
        text: text,
        prevTextLength: prevTextLength,
        highlightedColor: highlightColor,
      })}
    </HighlightedTextWrapper>
  );
};

export default HighlightedText;

const HighlightedTextWrapper = styled.div`
  & > * {
    white-space: pre-wrap;
  }
`;
