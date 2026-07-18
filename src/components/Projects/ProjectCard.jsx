// Component con, nhận dữ liệu một dự án qua props và chỉ lo hiển thị.
// Destructuring props ngay trên tham số để code gọn hơn.
const ProjectCard = ({ project }) => {
  const { title, description, techStack, githubUrl, thumbnailLabel, accentColor } = project;

  return (
    <article className="projectCard" style={{ "--card-accent": accentColor }}>
      <div className="windowChrome projectCard__window">
        <div className="windowChrome__bar">
          <span className="windowChrome__dot" />
          <span className="windowChrome__dot" />
          <span className="windowChrome__dot" />
          <span className="windowChrome__tab">{thumbnailLabel}</span>
        </div>
        <div className="projectCard__preview" />
      </div>

      <div className="projectCard__body">
        <h3 className="projectCard__title">{title}</h3>
        <p className="projectCard__desc">{description}</p>

        <ul className="projectCard__tags">
          {techStack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <a href={githubUrl} target="_blank" rel="noreferrer" className="projectCard__link">
          Xem trên GitHub →
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
