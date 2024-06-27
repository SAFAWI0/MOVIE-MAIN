import "./sections.css";
import { Card } from "../Card/card";
import Container from "../Container/container";
import { Link } from "react-router-dom";

export const Sections = () => {
  return (
    <div className="sections">
      <Container>
        <div className="part">
          <div className="content">
            <Link to={`/moreMovie/الباقة الرمضانية 2024`}>
              <span>عرض المزيد</span>
            </Link>
            <p> الباقة الرمضانية 2024</p>
          </div>
          <Card />
        </div>
        <div>
          <div className="content">
            <Link to={`/moreMovie/المطبخ في رمضان`}>
              <span>عرض المزيد</span>
            </Link>
            <p> المطبخ في رمضان</p>
          </div>
          <Card />
        </div>
        <div>
          <div className="content">
            <Link to={`/moreMovie/أضيف مؤخرا`}>
              <span>عرض المزيد</span>
            </Link>
            <p> أضيف مؤخرا</p>
          </div>
          <Card />
        </div>
        <div>
          <div className="content">
            <Link to={`/moreMovie/الأفلام المميزة`}>
              <span>عرض المزيد</span>
            </Link>
            <p> الأفلام المميزة</p>
          </div>
          <Card />
        </div>
        <div>
          <div className="content">
            <Link to={`/moreMovie/قصص المميزة`}>
              <span>عرض المزيد</span>
            </Link>
            <p>قصص المميزة</p>
          </div>
          <Card />
        </div>
        <div>
          <div className="content">
            <Link to={`/moreMovie/المسلسلات المميزة`}>
              <span>عرض المزيد</span>
            </Link>
            <p>المسلسلات المميزة</p>
          </div>
          <Card />
        </div>
      </Container>
      <div style={{ marginTop: "50px" }} />
    </div>
  );
};
