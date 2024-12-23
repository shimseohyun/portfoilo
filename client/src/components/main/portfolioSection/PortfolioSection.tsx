import { useEffect, useState } from "react";
import * as S from "./PortfolioSection.styled";

// interfaces

// hooks
import useGetPortfolio from "@hooks/apis/useGetPortfolio";

interface PortfolioSectionProps {
  portfolioID: number;
}

const PortfolioSection = ({ ...props }: PortfolioSectionProps) => {
  // 기술 카드 상태 배열
  const [openTechIndexes, setOpenTechIndexes] = useState<boolean[]>([]);

  // 기술 카드 클릭 시 상태 변경
  const toggleTechCard = (index: number) => {
    setOpenTechIndexes((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const { portfolio, loading, error, getPortfolio } = useGetPortfolio(
    props.portfolioID
  );

  useEffect(() => {
    // 컴포넌트가 마운트될 때 포트폴리트를 가져옵니다
    getPortfolio();
  }, []); // portfolioID가 변경되면 다시 가져옴

  useEffect(() => {
    setOpenTechIndexes(
      portfolio?.techs.map((data) => {
        return data.isOpen == undefined ? true : data.isOpen;
      }) ?? []
    );
  }, [portfolio]);

  if (error != null) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>로딩중</div>;
  }

  return (
    <S.PortfolioSectionWrapper>
      <S.PortfolioSectionTitle>
        <h1>{portfolio?.title}</h1>
      </S.PortfolioSectionTitle>

      {/* 간단한 정보 */}
      <S.PortfolioSectionMainBriefWrapper>
        <S.PortfolioSectionBriefThumbnailWrapper>
          {portfolio?.thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`${portfolio?.title}의 대표 이미지 ${index + 1}`}
            />
          ))}
        </S.PortfolioSectionBriefThumbnailWrapper>
        <S.PortfolioSectionBriefInfoWrapper>
          <p className="date">{portfolio?.period}</p>
          <h3>{portfolio?.briefDescription}</h3>
          <p>{portfolio?.description}</p>
        </S.PortfolioSectionBriefInfoWrapper>
      </S.PortfolioSectionMainBriefWrapper>

      {/* url */}
      <S.PortfolioSectionURLsWrapper>
        {portfolio?.urls.map((url, index) => (
          <li key={index}>
            <b>{url.key}</b>
            <a href={url.value} target="_blank" rel="noopener noreferrer">
              {url.value}
            </a>
          </li>
        ))}
      </S.PortfolioSectionURLsWrapper>

      {/* 역할 */}
      <S.PortfolioSectionRolesWrapper>
        {portfolio?.roles.map((role, index) => (
          <S.PortfolioSectionRoleCard key={index}>
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

      {/* 기술 */}
      {portfolio?.techs.map((tech, index) => (
        <S.PortfolioSectionTechCard key={index}>
          <S.PortfolioSectionTechCardTitle>
            <h2>{tech.title}</h2>
            <img
              src={
                openTechIndexes[index]
                  ? "/icons/up_gray.svg"
                  : "/icons/down_gray.svg"
              }
              alt="Toggle Icon"
              onClick={() => toggleTechCard(index)}
            />
          </S.PortfolioSectionTechCardTitle>

          {/* 카드가 열렸을 때만 내용 표시 */}
          {openTechIndexes[index] && (
            <>
              {tech.images.length == 0 ? (
                <></>
              ) : (
                <S.PortfolioSectionTechCardImagesWrapper>
                  {tech.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`${tech.title} Image ${idx + 1}`}
                    />
                  ))}
                </S.PortfolioSectionTechCardImagesWrapper>
              )}

              <ul>
                {tech.descriptions.map((desc, idx) => (
                  <li key={idx}>
                    <h3>{desc.subTitle}</h3>
                    <p>{desc.description}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </S.PortfolioSectionTechCard>
      ))}
    </S.PortfolioSectionWrapper>
  );
};

export default PortfolioSection;
