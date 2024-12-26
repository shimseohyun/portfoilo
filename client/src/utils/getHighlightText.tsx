interface getHighlightedTextProps {
  text: string;
  delay: number;
}

const getHighlightedText: React.FC<getHighlightedTextProps> = ({
  text,
  delay,
}) => {
  const paragraphs = text.split("\n");
  return (
    <>
      {paragraphs.map((paragraph, idx) => {
        const parts = paragraph.split("|$");

        return (
          <div key={idx}>
            {/* 각 줄에 고유한 key를 부여 */}
            {parts.map((part, index) => {
              // 홀수 인덱스일 경우 하이라이트 처리
              if (index % 2 === 1) {
                return (
                  <span
                    className="highlight"
                    key={index}
                    style={{
                      animationDelay: `${
                        (Math.floor(index / 2) + idx * 3) * 1.2 + delay * 3
                      }s`,
                    }}
                  >
                    {part}
                  </span>
                );
              }
              // 기본 텍스트는 그냥 표시
              return <span key={index}>{part}</span>;
            })}
          </div>
        );
      })}
    </>
  );
};

export default getHighlightedText;
