import React from "react";
import "./style/Fitur.css";
import Sigambar from "./Assets/img/pana.svg";
import Sigambar1 from "./Assets/img/to-do-list.svg";
import Sigambar2 from "./Assets/img/list-task.svg";
import Sigambar3 from "./Assets/img/note.svg";
import Sigambar4 from "./Assets/img/calendar.svg";
import NavigationBar from "./NavigationBar";

const Fitur = () => {
    const feature = {
        paddingTop: "50px",
    };
    const fitur = {
        paddingTop: "50px",
    };
    return (
        <>
        <NavigationBar />
            <section id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Perencana Proyek & Berkolaborasi</h2>
                            <p>
                                Kamu dapat melakukan pekerjaan manajemen tugas, dan juga akan
                                mengingatkan Kamu tentang tugas, tenggat waktu, dan dapat
                                memantau kemajuan proyek kolaborasi yang sedang dikerjakan
                                secara real time di satu tempat pada satu waktu.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={Sigambar} alt="Gambar" className="pictures img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={Sigambar} alt="Gambar" className="pictures img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <h2>Tingkatkan Kuliatas Kamu Bersama Kami</h2>
                            <p>
                                Tingkatkan kualitas tim Kamu bersama kami, mulai dari
                                peningkatan manajemen waktu, ketepatan dalam menyelesaikan tugas
                                dan juga semakin cepat kami menyelesaikan tugas semakin
                                kepercayaan klien kepada Kamu dan tim.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Fitur yang Simple & Mudah Digunakan</h2>
                            <p>
                                Kamu dapat menggunakan secara fleksibel, Kamu juga dapat
                                menggunakannya untuk keperluan pribadi, kantor, dan bisnis.
                                Daftar Periksa di Satu Tempat Kamu tidak perlu lagi mengingat
                                langkah apa yang harus dilakukan atau cara memesannya karena
                                checklist tersedia di satu tempat.
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={Sigambar} alt="Gambar" className="pictures img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section style={feature}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 mx-auto text-center">
                            <h2>Fitur yang Kamu Bisa Gunakan</h2>
                            <br />
                            <p>
                                Kami memiliki fitur yang dapat dengan mudah digunakan untuk
                                mengelola tim Kamu, terutama ketika Kamu dan tim Kamu pertama
                                kali menggunakannya sangat mudah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={fitur}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img
                                src={Sigambar1}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                            <h2>Daftar Periksa</h2>
                            <p>
                                Kamu dapat membuat daftar periksa untuk setiap tugas yang Kamu
                                kerjakan, sehingga Kamu tidak akan lupa apa yang harus
                                dilakukan.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <img
                                src={Sigambar2}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                            <h2>Daftar Tugas</h2>
                            <p>
                                Kamu dapat membuat daftar tugas untuk setiap tugas yang Kamu
                                kerjakan, sehingga Kamu tidak akan lupa apa yang harus
                                dilakukan.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <img
                                src={Sigambar3}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                            <h2>Catatan</h2>
                            <p>
                                Kamu dapat membuat catatan untuk setiap tugas yang Kamu
                                kerjakan, sehingga Kamu tidak akan lupa apa yang harus
                                dilakukan.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <img
                                src={Sigambar4}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                            <h2>Kalender</h2>
                            <p>
                                Kamu dapat membuat kalender untuk setiap tugas yang Kamu
                                kerjakan, sehingga Kamu tidak akan lupa apa yang harus
                                dilakukan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Fitur;