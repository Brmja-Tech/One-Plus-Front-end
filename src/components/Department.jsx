import { Link } from "react-router-dom";

const Department = ({ title, imgSrc }) => {
  return (
    <div className="department">
      <Link to={"/department"}>
        <div className="department-img">
          <img src={imgSrc} alt={title} />
        </div>
        <p className="department-title">{title}</p>
      </Link>
    </div>
  );
};

export default Department;
