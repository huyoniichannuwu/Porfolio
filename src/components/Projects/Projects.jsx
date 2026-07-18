import { useMemo, useState } from "react";
import { projectsData } from "../../data/projectsData";
import { useReveal } from "../../hooks/useReveal";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

// Danh sách công nghệ duy nhất, tính từ dữ liệu dự án để làm nút lọc.
const allTechs = [...new Set(projectsData.flatMap((project) => project.techStack))];

const Projects = () => {
  const { elementRef, isVisible } = useReveal();

  // State cho ô tìm kiếm và công nghệ đang được chọn để lọc.
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTech, setActiveTech] = useState("Tất cả");

  // Tính lại danh sách dự án hiển thị mỗi khi searchTerm hoặc activeTech đổi.
  const filteredProjects = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return projectsData.filter((project) => {
      const matchesKeyword = project.title.toLowerCase().includes(keyword);
      const matchesTech = activeTech === "Tất cả" || project.techStack.includes(activeTech);
      return matchesKeyword && matchesTech;
    });
  }, [searchTerm, activeTech]);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <p className="eyebrow">// components/Projects.jsx</p>
        <h2 className="sectionTitle">Dự án</h2>
        <p className="sectionLead">
          Một vài dự án mình đã thực hiện trong quá trình học tập, từ đồ án môn học đến
          project cá nhân.
        </p>

        <div className="projects__toolbar">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Tìm dự án theo tên..."
            className="projects__search"
            aria-label="Tìm kiếm dự án"
          />

          <div className="projects__filters">
            {["Tất cả", ...allTechs].map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setActiveTech(tech)}
                className={`filterChip ${activeTech === tech ? "is-active" : ""}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div ref={elementRef} className={`projects__grid reveal ${isVisible ? "is-visible" : ""}`}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          ) : (
            <p className="projects__empty">Không tìm thấy dự án phù hợp.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
