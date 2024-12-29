import { useEffect } from "react";

// components
import H2Title from "@components/title/H2TItle";
import ExperienceCard from "./_components/experienceCard/ExperienceCard";
import AwardCard from "./_components/awardCard/AwardCard";

// hooks
import useGetAwards from "@hooks/apis/useGetAwards";
import useGetExperiences from "@hooks/apis/useGetExperiences";
import LoadingCard from "@components/loading/LoadingCard";

const ExperiencesPage = () => {
  const { awards, loading: awardLoading, getAwards } = useGetAwards();
  const {
    experiences,
    loading: experienceLoading,
    getExperiences,
  } = useGetExperiences();

  useEffect(() => {
    getAwards();
    getExperiences();
  }, []);

  return (
    <>
      <H2Title>활동</H2Title>
      {experienceLoading ? (
        <LoadingCard />
      ) : (
        experiences?.map((experience, index) => {
          return <ExperienceCard key={index} experience={experience} />;
        })
      )}

      <H2Title>수상</H2Title>

      {awardLoading ? (
        <LoadingCard />
      ) : (
        awards?.map((award, index) => {
          return <AwardCard key={index} award={award} />;
        })
      )}
    </>
  );
};

export default ExperiencesPage;
