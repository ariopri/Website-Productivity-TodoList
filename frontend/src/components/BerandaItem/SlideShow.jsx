import React from "react";
import "./style/SlideShow.css";
import Sigambar from "./Assets/img/pana.svg";
import { useEffect, useState } from "react";

const SlideShow = () => {
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(false);

  const cekkin = async () => {
    if (token) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    cekkin();
  }, []);

  function logout() {
    localStorage.removeItem("token");
    setIsLogin(false);
  }
  return (
    <>
      <section className="text-light" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Mengatur, Merencanakan, dan Berkolaborasi Dengan Mudah</h1>
              <p>
                Mengingat semua dan tangani proyek apa pun dengan catatan,
                tugas, dan jadwal Kamu semuanya di satu tempat mudah dan cepat.
              </p>
              <div className="nav-item active button-primary third">
                <b>
                  {isLogin ? (
                    <a
                      className="nav-link btn btn-warning text-dark"
                      onClick={logout}
                      href="/"
                    >
                      <b>Logout</b>
                    </a>
                  ) : (
                    <a href="/Login" className="nav-link text-light mt-2">
                      <b>{isLogin ? "Login" : "Get Started"}</b>
                    </a>
                  )}
                </b>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={Sigambar} alt="Gambar" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlideShow;
