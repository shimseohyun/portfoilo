import useVisibility from "@hooks/useVisibility";
import * as S from "./PortfolioSection.styled";

// models
import { Portfolio } from "@models/Portfolio";

interface PortfolioSectionInfoCardProps extends Portfolio {}

const PortfolioSectionInfoCard = ({
  ...props
}: PortfolioSectionInfoCardProps) => {
  const { ref, isVisible } = useVisibility();

  return (
    <S.PortfolioSectionInfoWrapper ref={ref}>
      <S.PortfolioSectionTitle>
        <h1>{props.title}</h1>
      </S.PortfolioSectionTitle>

      {/* 간단한 정보 */}
      {isVisible ? (
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
      ) : null}

      {/* url */}
      <S.PortfolioSectionURLsWrapper>
        {props.urls.map((url, index) => (
          <>
            {url.info && <span className="b3">* {url.info}</span>}
            <li key={index}>
              <b>{url.key}</b>
              <a href={url.value} target="_blank" rel="noopener noreferrer">
                {url.value}
              </a>
            </li>
          </>
        ))}
      </S.PortfolioSectionURLsWrapper>

      {/* 역할 */}
      {isVisible ? (
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
      ) : null}
    </S.PortfolioSectionInfoWrapper>
  );
};

export default PortfolioSectionInfoCard;
