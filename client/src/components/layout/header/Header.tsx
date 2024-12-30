import * as S from "./Header.styled";

// hooks
import { useLocation } from "react-router-dom";

// components
import HeaderItemWithSub from "./_atom/HeaderItemWithSub";

export interface HeaderItem {
  title: string;
  url?: string;

  subLinks?: {
    title: string;
    url: string;
  }[];
}

const Header = () => {
  const location = useLocation();

  const headerLiteral: HeaderItem[] = [
    {
      title: "경험",
      url: "/experiences",
    },
    {
      title: "프로젝트",
      url: "/projects",
    },
    {
      title: "링크",

      subLinks: [
        { title: "GitHub", url: "https://github.com/shimseohyun" },
        { title: "Velog", url: "https://velog.io/@shim020924/posts" },
      ],
    },
  ];

  return (
    <>
      <S.HeaderPadding />

      <S.HeaderWrapper>
        <S.HeaderButton $isCurrent={true} to="/">
          portfolio
        </S.HeaderButton>

        <S.HeaderMenuWrapper>
          {headerLiteral.map((item, index) =>
            item.subLinks ? (
              // 아이템 내 서브링크가 있는 경우
              <HeaderItemWithSub key={index} item={item} />
            ) : (
              // 아이템 . 내서브링크가 없는 경우
              <S.HeaderButton
                key={index}
                to={item.url ?? ""}
                $isCurrent={location.pathname === item.url}
              >
                {item.title}
              </S.HeaderButton>
            )
          )}
        </S.HeaderMenuWrapper>

        <S.HeaderBackground />
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
