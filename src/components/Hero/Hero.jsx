import avatarImg from "../../assets/avatar.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero__inner container">
        <div className="hero__text">
          <p className="eyebrow">// components/Hero.jsx</p>
          <h1 className="hero__title">
            Xin chào, mình là <span className="hero__highlight">Huỳnh Gia Huy</span>
          </h1>
          <p className="hero__slogan">
            Lập trình viên Frontend tập sự — đang học cách biến ý tưởng thành giao diện
            gọn gàng, dễ dùng bằng HTML, CSS và ReactJS.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Liên hệ ngay
            </a>
            <a href="/cv-huynh-gia-huy.pdf" download className="btn btn--ghost">
              Tải CV
            </a>
          </div>
        </div>

        <div className="hero__frame">
          <div className="windowChrome hero__window">
            <div className="windowChrome__bar">
              <span className="windowChrome__dot" />
              <span className="windowChrome__dot" />
              <span className="windowChrome__dot" />
              <span className="windowChrome__tab">profile.jsx</span>
            </div>
            <div className="hero__avatar">
              <img src={avatarImg} alt="Huỳnh Gia Huy" className="hero__avatarImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
