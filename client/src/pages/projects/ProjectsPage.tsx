import * as S from "./ProjectsPage.styled";

// hooks
import { useGetProjects } from "@hooks/apis/useGetNotion";

// components
import ProjectCard from "./_components/ProjectCard";
import LoadingCard from "@components/loading/LoadingCard";

const ProjectsPage = () => {
  const { data: projects, isLoading } = useGetProjects();

  if (isLoading) {
    return <LoadingCard />;
  }

  return (
    <S.ProjectsPageWrapper>
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.properties.project.title[0]?.plain_text}
          description={project.properties.description.rich_text[0]?.plain_text}
          techs={project.properties.info.multi_select}
          results={project.properties.awards.multi_select}
          public_url={project.public_url}
          thumbnail={
            project.properties.thumbnail.url ?? "/image/project_thumbnail.svg"
          }
        />
      ))}
    </S.ProjectsPageWrapper>
  );
};

export default ProjectsPage;
