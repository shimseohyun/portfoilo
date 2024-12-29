import * as S from "./ExperienceCard.styled";
import { Experience } from "@models/Experience";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ ...props }: ExperienceCardProps) => {
  return (
    <S.ExperienceCardWrapper>
      <p>{props.experience.period}</p>

      <S.ExperienceCardInfoWrapper>
        <b>{props.experience.name}</b>
        <p>{props.experience.description}</p>
      </S.ExperienceCardInfoWrapper>
    </S.ExperienceCardWrapper>
  );
};

export default ExperienceCard;
