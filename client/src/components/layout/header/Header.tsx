import { Link } from "react-router-dom";
import styled from "styled-components";

interface HeaderLink {
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
        { title: "GitHub", url: "https://github.com" },
        { title: "Velog", url: "https://velog.io" },
      ],
    },
  ];

  return (
    <>
      <HeaderPadding />
      <HeaderWrapper>
        <Link to="/">portfolio</Link>

        <HeaderContentWrapper>
          {headerList.map((list) =>
            list.subLinks ? (
              <div key={list.title}>
                {list.title}

                {list.subLinks && (
                  <SubContentWrapper key={list.title}>
                    {list.subLinks.map((subLink) => (
                      <SubContent to={subLink.url} key={subLink.title}>
                        {subLink.title}
                      </SubContent>
                    ))}
                  </SubContentWrapper>
                )}
              </div>
            ) : (
              <Link key={list.title} to={list.url ?? ""}>
                {list.title}
              </Link>
            )
          )}
        </HeaderContentWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderPadding = styled.div`
  height: 3.5rem;
`;

const HeaderWrapper = styled.header`
  position: fixed;

  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;

  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 960px;

  padding: 1rem 0;
  padding-left: 3rem;
  padding-right: 3rem;

  &.mobile {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  background-color: white;
  z-index: 900;
`;

const HeaderContentWrapper = styled.section`
  position: relative;
  display: flex;
  gap: 2rem;
`;

const SubContentWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const SubContent = styled(Link)``;
