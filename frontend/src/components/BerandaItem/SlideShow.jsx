import React from "react";
import "./style/SlideShow.css";
import Sigambar from "./Assets/img/pana.svg";

const SlideShow = () => {
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
                            <button className="btn third">Get Started</button>
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