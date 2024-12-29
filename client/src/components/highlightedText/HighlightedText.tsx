import styled from "styled-components";

// utils
import getHighlightedText from "@utils/getHighlightText";
import { animateHighlightText } from "@styles/animation";

interface HighlightedTextProps {
  text: string;
  highlightColor: string;
  delay: number;
}

const HighlightedText = ({ ...props }: HighlightedTextProps) => {
  return (
    <HighlightedTextWrapper
      $delay={props.delay}
      $highlightColor={props.highlightColor}
    >
      {getHighlightedText({ text: props.text, delay: props.delay })}
    </HighlightedTextWrapper>
  );
};

interface HighlightedTextWrapperProps {
  $highlightColor: string;
  $delay: number;
}

export default HighlightedText;

const HighlightedTextWrapper = styled.div<HighlightedTextWrapperProps>`
  & > * {
    white-space: pre-wrap;
  }

  .highlight {
    background: linear-gradient(
      to right,
      transparent 50%,
      ${(props) => props.$highlightColor} 50%
    );
    background-size: 200%;

    .non-visible,
    .non-visible & {
      animation: none !important;
    }

    .visible & {
      animation: ${animateHighlightText} 1s ease-out forwards;
    }
  }

  div {
    padding: 0.25rem 0;
  }
`;
