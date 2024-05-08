import "./sections.css";
import { Card } from "../Card/card";
import Container from "../Container/container";

export const Sections = () => {
  return (
    <div className="sections">
      <Container>
      <div>
        <div className="content">
          <span>المزيد</span>
          <p> الباقة الرمضانية 2024</p>
        </div>
        <Card />
      </div>
      <div>
        <div className="content">
          <span>المزيد</span>
          <p> المطبخ في رمضان</p>
        </div>
        <Card />
      </div>
      <div>
        <div className="content">
          <span>المزيد</span>
          <p> أضيف مؤخرا</p>
        </div>
        <Card />
      </div>
      <div>
        <div className="content">
          <span>المزيد</span>
          <p> الأفلام المميزة</p>
        </div>
        <Card />
      </div>
      <div>
        <div className="content">
          <span>المزيد</span>
          <p>المسلسلات المميزة</p>
        </div>
        <Card />
      </div>
      </Container>
      <div style={{ marginTop: "50px" }} />
    </div>
  );
};
