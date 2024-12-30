import * as S from "../Header.styled";
import { useState } from "react";

// models
import { HeaderItem } from "../Header";
import { Link } from "react-router-dom";

interface HeaderItemWithSubProps {
  item: HeaderItem;
}

const HeaderItemWithSub = ({ ...props }: HeaderItemWithSubProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSubLinks = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.HeaderItemWithSubWrapper>
      <S.HeaderItemWithSubButton onClick={toggleSubLinks}>
        {props.item.title}
        <img
          src={isOpen ? "/icons/up_gray.svg" : "/icons/down_gray.svg"}
          alt="Toggle Icon"
        />
      </S.HeaderItemWithSubButton>

      {isOpen ? (
        <>
          <S.HeaderItemWithSubMenuWrapper>
            {props.item.subLinks?.map((subLink) => (
              <Link to={subLink.url} key={subLink.title}>
                {subLink.title}
              </Link>
            ))}
          </S.HeaderItemWithSubMenuWrapper>

          <S.HeaderTouchArea onClick={() => setIsOpen(false)} />
        </>
      ) : null}
    </S.HeaderItemWithSubWrapper>
  );
};

export default HeaderItemWithSub;
