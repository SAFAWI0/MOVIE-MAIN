import "./login.css";
import { Footer } from "../../Footer/footer";
import Header from "../../Header/header";
import Container from "../../Container/container";
import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../Assets/google.jpg";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Header title="الحساب" />
      <div className="profile">
        <Container>
          <div className="text">
            <p>Welcome Back!</p>
          </div>
          <div className="registration">
            <div className="inp">
              <input type="text" placeholder="البريد أو اسم المستخدم"></input>
              <input
                placeholder="كلمة المرور"
                type={showPassword ? "text" : "password"}
              />
              <button className="showPass" onClick={handleShowPassword}>
                {showPassword ? <p>Hide</p> : <p>Show</p>}
              </button>
            </div>
            <div className="link">
              <Link>
                <p>نسيت كلمة المرور</p>
              </Link>
            </div>

            <div className="login">
              <button>تسجيل الدخول</button>
              <span>أو</span>

              <div className="google">
                <img src={image}></img>
                <button>عن طريق حساب جوجل</button>
              </div>
              <div className="reg">
                <Link to="/register">
                  <button>التسجيل</button>
                </Link>
                <p>لا تمتلك حساب ؟</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
