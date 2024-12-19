import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="right">
          <img
            className="logo-img"
            src="./images/Logo.png"
            alt="Logo image"
          />
          <p className="info">
            موقع OnePlus هو متجر إلكتروني متخصص في بيع الأجهزة الذكية وملحقاتها،
            وهو تابع للعلامة التجارية OnePlus الشهيرة في مجال الإلكترونيات
            الاستهلاكية. يعكس الموقع هوية الشركة، حيث يركز على تقديم تجربة تسوق
            متميزة وسلسة عبر الإنترنت لعملائه.
          </p>
        </div>
        <div className="left">
          <div>
            <h3>روابط مفيدة</h3>
            <div>
              <Link to="/" className="mb-2">
                الرئيسية
              </Link>
              <Link to="/aboutUs">من نحن</Link>
            </div>
          </div>
          <div>
            <h3>تواصل معنا</h3>
            <div className="text-center">
              <a href="https://wa.me/201234567891" target="_blank">
                <FaWhatsapp className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
