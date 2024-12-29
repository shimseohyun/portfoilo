import * as S from "./AwardCard.styled";

import { Award } from "@models/Experience";

interface AwardCardProps {
  award: Award;
}

const AwardCard = ({ ...props }: AwardCardProps) => {
  return (
    <S.AwardardWrapper>
      <b>{props.award.name}</b>
      <p>{props.award.description}</p>
    </S.AwardardWrapper>
  );
};

export default AwardCard;
