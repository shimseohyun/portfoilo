import useVisibility from "@hooks/useVisibility";
import * as S from "./MainSeparator.styled";

const MainSeparator1 = () => {
  const { ref, isVisible } = useVisibility();
  return (
    <S.MainSeparator1Wrapper
      className={isVisible ? "visible" : "non-visible"}
      ref={ref}
    >
      {/* width 100vw 회색 배경 */}
      <S.MainSeparator1Content />

      <S.MainSeparator1Label>저의 이야기를 공유합니다!</S.MainSeparator1Label>
      <S.MainSeparator1Label className="b3">
        프론트엔드 개발을 하며 느낀 생각과 경험을 들려드릴게요.
      </S.MainSeparator1Label>

      <p>아래로 스크롤 해주세요!</p>
    </S.MainSeparator1Wrapper>
  );
};

export default MainSeparator1;
