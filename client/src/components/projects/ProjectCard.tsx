import { NotionTag } from "@models/Notion";
import * as S from "./ProjectCard.styled";
import { Link } from "react-router-dom";
import Tag from "@components/common/tag/Tag";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techs: NotionTag[];
  results: NotionTag[];
  public_url: string;
}
const ProjectCard = ({ ...props }: ProjectCardProps) => {
  return (
    <Link to={props.public_url}>
      <S.ProjectCardWrapper>
        <S.ProjectCardTagsWrapper
          style={{ position: "absolute", flexDirection: "column" }}
        >
          {props.results.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </S.ProjectCardTagsWrapper>

        {/* 썸네일 */}

        <img src="/16-9.png" />

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
    </Link>
  );
};
export default ProjectCard;
