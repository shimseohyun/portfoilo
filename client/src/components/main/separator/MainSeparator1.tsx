import useVisibility from "@hooks/useVisibility";
import * as S from "./MainSeparator.styled";

const MainSeparator1 = () => {
  const { ref, isVisible } = useVisibility();
  return (
    <S.MainSeparator1Wrapper ref={ref}>
      {isVisible ? (
        <>
          <S.MainSeparator1Content /> <h3>저의 이야기를 공유합니다!</h3>
          <span className="b3">
            프론트엔드 개발을 하며 느낀 생각과 경험을 들려드릴게요.
          </span>
        </>
      ) : null}

      <p>아래로 스크롤 해주세요!</p>
    </S.MainSeparator1Wrapper>
  );
};

export default MainSeparator1;
