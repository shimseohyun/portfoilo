import { useState } from "react";

import * as S from "../Header.styled";

import { HeaderLink } from "../Header";

interface HeaderSubLinksProps {
  link: HeaderLink;
}

const HeaderSubLinks = ({ ...props }: HeaderSubLinksProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSubLinks = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.HeaderContentWrapper>
      <S.HeaderButton onClick={toggleSubLinks}>
        {props.link.title}
        <img
          src={isOpen ? "/icons/up_gray.svg" : "/icons/down_gray.svg"}
          alt="Toggle Icon"
        />
      </S.HeaderButton>

      {isOpen ? (
        <>
          <S.SubContentWrapper>
            {props.link.subLinks?.map((subLink) => (
              <S.SubContent to={subLink.url} key={subLink.title}>
                {subLink.title}
              </S.SubContent>
            ))}
          </S.SubContentWrapper>
          <S.HeaderBackgroud onClick={() => setIsOpen(false)} />
        </>
      ) : null}
    </S.HeaderContentWrapper>
  );
};

export default HeaderSubLinks;
