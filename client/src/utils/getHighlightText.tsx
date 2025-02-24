import styled from "styled-components";

import { animateHighlightText } from "@styles/animation";

interface GetHighlightedTextProps {
  text: string;

  prevTextLength?: number;
  readingTime?: number;
  highlightedColor: string;
}

const getHighlightedText = (props: GetHighlightedTextProps) => {
  const {
    text,
    highlightedColor,
    prevTextLength = 0,
    readingTime = 0.04,
  } = props;
  let textLength = prevTextLength;

  const paragraphs = text.split("\n");

  // 홀수 인덱스일 경우 하이라이트 처리
  const isHighlightedText = (index: number) => index % 2 === 1;

  const getDuration = (text: string) => {
    return text.length * readingTime;
  };
  const getDelay = (): number => {
    return textLength * readingTime;
  };

  return (
    <>
      {paragraphs.map((paragraph, idx) => {
        const parts = paragraph.split("|$");

        return (
          <ParagrahWrapper key={idx}>
            {parts.map((part, index) => {
              if (index !== 0) textLength += part.length;

              if (isHighlightedText(index)) {
                return (
                  <HighLightedText
                    key={index}
                    $highlightColor={highlightedColor}
                    $animationDelay={getDelay()}
                    $animationDuration={getDuration(part)}
                  >
                    {part}
                  </HighLightedText>
                );
              } else {
                return <span key={index}>{part}</span>;
              }
            })}
          </ParagrahWrapper>
        );
      })}
    </>
  );
};

export default getHighlightedText;

interface HighlightedTextProps {
  $highlightColor: string;
  $animationDuration: number;
  $animationDelay: number;
}

const ParagrahWrapper = styled.div`
  padding: 0.25rem 0;
`;
const HighLightedText = styled.span<HighlightedTextProps>`
  background: linear-gradient(
    to right,
    transparent 50%,
    ${({ $highlightColor }) => $highlightColor} 50%
  );
  background-size: 200%;

  .non-visible,
  .non-visible & {
    animation: none !important;
  }

  .visible & {
    animation: ${animateHighlightText} ease-out forwards;
    animation-duration: ${({ $animationDuration }) => $animationDuration}s;
    animation-delay: ${({ $animationDelay }) => $animationDelay}s;
  }
`;
