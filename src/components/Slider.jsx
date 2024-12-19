import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide rounded-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded-3">
          <div className="carousel-item active">
            <div className="content">
              <div className="text">
                <p>افضل العروض علي السماعات الذكية</p>
                <p>ساعة Apple smart watch</p>
                <p>خصم يصل الي 50% لمدة محدودة</p>
                <button className="rounded-2">اطلب الان</button>
              </div>
              <div className="img-shapes">
                <img src="./images/wirstwatch1.png" alt="wirstwatch image" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="content">
              <div className="text">
                <p>افضل العروض علي السماعات الذكية</p>
                <p>ساعة Apple smart watch</p>
                <p>خصم يصل الي 50% لمدة محدودة</p>
                <button className="rounded-2">اطلب الان</button>
              </div>
              <div className="img-shapes">
                <img src="./images/wirstwatch1.png" alt="wirstwatch image" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="content">
              <div className="text">
                <p>افضل العروض علي السماعات الذكية</p>
                <p>ساعة Apple smart watch</p>
                <p>خصم يصل الي 50% لمدة محدودة</p>
                <button className="rounded-2">اطلب الان</button>
              </div>
              <div className="img-shapes">
                <img src="./images/wirstwatch2.png" alt="wirstwatch image" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span>
            <FaChevronLeft />
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
