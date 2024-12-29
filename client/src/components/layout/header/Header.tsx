import * as S from "./Header.styled";

import HeaderSubLinks from "./_atom/HeaderSubLinks";

export interface HeaderLink {
  title: string;
  url?: string;

  subLinks?: {
    title: string;
    url: string;
  }[];
}

const Header = () => {
  const headerList: HeaderLink[] = [
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
        {/* 상단 네비게이터 */}
        <S.HeaderMenuWrapper>
          <S.HeaderLink to="/">portfolio</S.HeaderLink>

          <S.HeaderContentWrapper>
            {headerList.map((list) =>
              list.subLinks ? (
                <HeaderSubLinks link={list} />
              ) : (
                <S.HeaderLink key={list.title} to={list.url ?? ""}>
                  {list.title}
                </S.HeaderLink>
              )
            )}
          </S.HeaderContentWrapper>
        </S.HeaderMenuWrapper>
        {/* 상단 네비게이터 */}
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
