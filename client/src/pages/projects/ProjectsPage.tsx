import * as S from "./ProjectsPage.styled";

// hooks
import { useGetProjects } from "@hooks/apis/useGetNotion";

// components
import ProjectCard from "@components/projects/ProjectCard";

const ProjectsPage = () => {
  const { data: projects, isLoading } = useGetProjects();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <S.ProjectsPageWrapper>
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.properties.project.title[0]?.plain_text}
          description={project.properties.description.rich_text[0]?.plain_text}
          techs={project.properties.Info.multi_select}
          results={project.properties.awards.multi_select}
          public_url={project.public_url}
        />
      ))}
    </S.ProjectsPageWrapper>
  );
};

export default ProjectsPage;
