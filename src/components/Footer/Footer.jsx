import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">{`© ${currentYear} Huỳnh Gia Huy. Được xây dựng bằng ReactJS + Vite.`}</p>
        <a
          href="https://www.facebook.com/giahuy.huynh130/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
