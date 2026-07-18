import { skillsData } from "../../data/skillsData";
import { useReveal } from "../../hooks/useReveal";
import "./About.css";

const About = () => {
  const { elementRef, isVisible } = useReveal();

  return (
    <section id="about" className="about section">
      <div className="container">
        <p className="eyebrow">// components/About.jsx</p>
        <h2 className="sectionTitle">Về mình & Kỹ năng</h2>

        <div ref={elementRef} className={`about__grid reveal ${isVisible ? "is-visible" : ""}`}>
          <p className="about__bio">
            Mình là sinh viên ngành Công nghệ thông tin, hiện đang tập trung học Frontend
            với ReactJS bên cạnh nền tảng đã có với HTML/CSS. Mình thích viết code rõ ràng,
            chia nhỏ giao diện thành từng component dễ tái sử dụng, và luôn tìm cách cải
            thiện trải nghiệm người dùng qua từng chi tiết nhỏ — từ một hiệu ứng hover cho
            tới cách bố cục co giãn trên mọi kích thước màn hình.
          </p>

          <div className="about__skills">
            <p className="about__skillsLabel">Kỹ năng hiện có</p>
            <ul className="about__skillsList">
              {skillsData.map((skill) => (
                <li key={skill} className="tag">
                  {`<${skill} />`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
