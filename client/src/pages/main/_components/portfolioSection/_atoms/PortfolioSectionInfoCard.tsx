import { useEffect } from "react";

import * as S from "../PortfolioSection.styled";

// models
import { Portfolio } from "@models/Portfolio";

// hooks
import useVisibility from "@hooks/useVisibility";
import useIndex from "@hooks/useIndex";
import PortfolioSectionTechCard from "./PortfolioSectionTechCard";

interface PortfolioSectionInfoCardProps extends Portfolio {}

const PortfolioSectionInfoCard = ({
  ...props
}: PortfolioSectionInfoCardProps) => {
  const { ref, isVisible } = useVisibility();

  const { addIndex } = useIndex();

  useEffect(() => {
    addIndex({ title: props.title, ref: ref });
  }, []);

  return (
    <S.PortfolioSectionInfoWrapper
      className={isVisible ? "visible" : "non-visible"}
      ref={ref}
    >
      <S.PortfolioSectionTitle>
        <h1>{props.title}</h1>
      </S.PortfolioSectionTitle>

      <S.PortfolioSectionMainBriefWrapper>
        {/* 썸네일 */}
        <S.PortfolioSectionBriefThumbnailWrapper>
          <S.PortfolioSectionBriefThumbnailBase
            $backgroundColor={props.mainColor}
          />
          {props.thumbnails.map((thumbnail, index) => (
            <S.PortfolioSectionBriefThumbnail
              key={index}
              src={thumbnail.url}
              alt={thumbnail.alt}
              $backgroundColor={props.mainColor}
              $animation={thumbnail.animation}
              style={{
                animationDelay: `${index * 0.25}s`,
                zIndex: `${index + 1}`,
              }}
            />
          ))}
        </S.PortfolioSectionBriefThumbnailWrapper>

        {/* 간단한 정보 */}
        <S.PortfolioSectionBriefInfoWrapper>
          <p className="date">{props.period}</p>
          <h3>{props.briefDescription}</h3>
          <p>{props.description}</p>
        </S.PortfolioSectionBriefInfoWrapper>
      </S.PortfolioSectionMainBriefWrapper>

      {/* url */}
      <S.PortfolioSectionURLsWrapper>
        {props.urls.map((url, index) => (
          <li key={index}>
            {url.info && <span className="b3">* {url.info}</span>}
            <div>
              <b>{url.key}</b>
              <a href={url.value} target="_blank" rel="noopener noreferrer">
                {url.value}
              </a>
            </div>
          </li>
        ))}
      </S.PortfolioSectionURLsWrapper>

      {/* 역할 */}

      <S.PortfolioSectionRolesWrapper>
        {props.roles.map((role, index) => (
          <S.PortfolioSectionRoleCard
            style={{ animationDelay: `${0.75 + index * 0.25}s` }}
            key={index}
          >
            <h3>{role.title}</h3>
            <p className="tech">{role.tech}</p>
            <ul>
              {role.descriptions.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </S.PortfolioSectionRoleCard>
        ))}
      </S.PortfolioSectionRolesWrapper>

      {props.techs.map((tech, index) => (
        <PortfolioSectionTechCard
          key={index}
          mainColor={props.mainColor}
          {...tech}
        />
      ))}
    </S.PortfolioSectionInfoWrapper>
  );
};

export default PortfolioSectionInfoCard;
