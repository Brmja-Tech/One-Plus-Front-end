import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Department from "../components/Department";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <>
      {/* Navigation bar */}
      <Navbar />
      {/* Slider */}
      <Slider />
      {/* Departments section*/}
      <section>
        <div className="container">
          <h3 className="section-title">الاقسام</h3>
          <div className="departments d-flex flex-wrap align-items-start">
            <Department title="هواتف" imgSrc="./images/phone.png" />
            <Department title="الكترونيات" imgSrc="./images/wirstwatch1.png" />
            <Department title="ساعات" imgSrc="./images/phone.png" />
            <Department title="اكسسوارات" imgSrc="./images/wirstwatch1.png" />
            <Department title="ادوات منزلية" imgSrc="./images/phone.png" />
            <Department
              title="معدات كهرابئية"
              imgSrc="./images/wirstwatch1.png"
            />
            <Department title="هواتف" imgSrc="./images/phone.png" />
            <Department title="الكترونيات" imgSrc="./images/wirstwatch1.png" />
            <Department title="ساعات" imgSrc="./images/phone.png" />
            <Department title="اكسسوارات" imgSrc="./images/wirstwatch1.png" />
            <Department title="ادوات منزلية" imgSrc="./images/phone.png" />
            <Department
              title="معدات كهرابئية"
              imgSrc="./images/wirstwatch1.png"
            />
            <Department title="هواتف" imgSrc="./images/phone.png" />
            <Department title="الكترونيات" imgSrc="./images/wirstwatch1.png" />
            <Department title="ساعات" imgSrc="./images/phone.png" />
            <Department title="اكسسوارات" imgSrc="./images/wirstwatch1.png" />
            <Department title="ادوات منزلية" imgSrc="./images/phone.png" />
            <Department
              title="معدات كهرابئية"
              imgSrc="./images/wirstwatch1.png"
            />
          </div>
        </div>
      </section>
      {/* Footer of page */}
      <Footer />
    </>
  );
};

export default Home;
