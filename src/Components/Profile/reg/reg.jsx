import "./reg.css";
import { useState } from "react";
import Container from "../../Container/container";
import Header from "../../Header/header";
import { Footer } from "../../Footer/footer";
import { Link } from "react-router-dom";
import { message } from "antd";

export const Reg = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleonclick = () => {
    messageApi.open({
      type: "success",
      content: "تم التسجيل بنجاح ",
    });
  };




  return (
    <div>
      <Header title="الحساب" />
      <div className="center">
        <Container>
          <div className="reg">
            <div className="inp">
              <input type="text" placeholder="البريد الالكتروني"></input>
              <input type="text" placeholder="اسم المستخدم"></input>
              <input
                placeholder="كلمة المرور"
                type={showPassword ? "text" : "password"}
              />
              <button className="showPass" onClick={handleShowPassword}>
                {showPassword ? <p>Hide</p> : <p>Show</p>}
              </button>
            </div>
              <button className="buttin" onClick={handleonclick}> التسجيل الحساب </button>
            <div className="log">
              <Link to="/Login">
                <button >تسجيل الدخول</button>
              </Link>
              <p>هل تمتلك حساب ؟</p>
            </div>
          </div>
        </Container>
      {contextHolder}
      </div>
      <Footer />
    </div>
  );
};
