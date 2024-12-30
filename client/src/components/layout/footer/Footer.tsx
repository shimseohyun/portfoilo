import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <div>
        <a href="https://github.com/shimseohyun/portfoilo">
          <img src="/icons/git_gray.svg" />
        </a>
        <span className="b3">
          본 사이트는 React Vite, Firebase, express.js, NotionAPI 를 통해
          만들어졌습니다.
        </span>
      </div>

      <span className="b3">© 2024 ShimSeohyun. All rights reserved.</span>

      <S.FooterBackground />
    </S.FooterWrapper>
  );
};

export default Footer;
