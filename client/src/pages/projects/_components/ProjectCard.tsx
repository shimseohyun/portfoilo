import * as S from "./ProjectCard.styled";

import { NotionTag } from "@models/Notion";
import Tag from "@components/tag/Tag";

interface ProjectCardProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  techs: NotionTag[];
  results: NotionTag[];
  public_url: string;
}

const ProjectCard = ({ ...props }: ProjectCardProps) => {
  return (
    <S.ProjectCardWrapper to={props.public_url}>
      <S.ProjectCardTagsWrapper
        style={{ position: "absolute", flexDirection: "column" }}
      >
        {props.results.map((tag) => (
          <Tag key={tag.name} name={tag.name} color={tag.color} />
        ))}
      </S.ProjectCardTagsWrapper>

      {/* 썸네일 */}

      <img src={props.thumbnail} />

      {/* 정보 */}
      <S.ProjectCardInfoWrapper>
        <b>{props.title}</b>
        <p>{props.description}</p>

        <S.ProjectCardTagsWrapper>
          {props.techs.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </S.ProjectCardTagsWrapper>
      </S.ProjectCardInfoWrapper>
    </S.ProjectCardWrapper>
  );
};

export default ProjectCard;
