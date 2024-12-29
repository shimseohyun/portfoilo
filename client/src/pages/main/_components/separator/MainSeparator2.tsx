import useVisibility from "@hooks/useVisibility";
import * as S from "./MainSeparator.styled";

const MainSeparator2 = () => {
  const { ref, isVisible } = useVisibility();
  return (
    <S.MainSeparator2Wrapper
      className={isVisible ? "visible" : "non-visible"}
      ref={ref}
    >
      {/* width 100vw 회색 배경 */}
      <S.MainSeparator1Content />

      <S.MainSeparator1Label>Projects - APP</S.MainSeparator1Label>
      <S.MainSeparator2Label>
        웹 개발자로서 웹과 앱의 차이를 명확히 인식하고, 일관된 사용자 경험을
        제공하기 위해 어플리케이션 개발에 도전했습니다. 이를 바탕으로 PWA, 앱 내
        웹 뷰 등 다양한 웹 활용에 대해 공부하며, 한계를 두지 않고 새로운 영역에
        도전하는 클라이언트 개발자로 성장하고자 합니다.
      </S.MainSeparator2Label>
    </S.MainSeparator2Wrapper>
  );
};

export default MainSeparator2;
