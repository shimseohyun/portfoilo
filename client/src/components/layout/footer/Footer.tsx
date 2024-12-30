import { useLocation } from "react-router-dom";
import * as S from "./Footer.styled";
import useGetScreenSize from "@hooks/useGetScreenSize";

const Footer = () => {
  const location = useLocation();
  const { screenType } = useGetScreenSize();

  return (
    <S.FooterWrapper
      style={{
        paddingBottom:
          location.pathname === "/" && screenType === "mobile"
            ? "5rem"
            : "null",
      }}
    >
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
