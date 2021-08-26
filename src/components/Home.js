import { Fragment } from "react";
import slider from "../assets/slider.png";
import logoSura from "../assets/logo-sura.png";
import lineShape from "../assets/line-shape.png";
import iconLost from "../assets/sura-icon-perdida-total.svg";
import iconRc from "../assets/sura-icon-rc.svg";
import checkIcon from "../assets/azul.svg";
import cards from "../assets/Tarjetas.png";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <a  href="/" className="navbar-brand">
            <img
              src={logoSura}
              alt="Logo de la empresa Sura"
              width="115"
              height="40"
              className="d-inline-block align-text-top mx-5"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown mx-4">
                <a href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b className="header--section__title">
                    SURA en:{" "}
                    <span className="header--section__title--color mx-1">
                      {" "}
                      País{" "}
                    </span>
                  </b>
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a href="/" className="dropdown-item">Action</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown  mx-4">
                <a
                href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b className="header--section__title">Encuéntranos</b>
                </a>
              </li>
              <li className="nav-item dropdown  mx-4">
                <button
                  type="button"
                  className="btn btn-warning dropdown-toggle header--section__title fw-bold"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Iniciar Sesión
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a href="/" className="dropdown-item">Action</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-dark navbar--ensurance--section">
        <div className="container-fluid px-3">
          <a href="/" className="navbar-brand mx-5">SEGUROS</a>
          
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movilidad
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hogar
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vida y Salud
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Empresas
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Centro de ayuda
                </a>
              </li>
              <li className="nav-item dropdown navbar--button">
                <a href="/"
                  className="nav-link dropdown-toggle navbar--button"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CIUDAD VIRTUAL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <img src={slider} style={{ width: "100%" }} alt="Slider de seguros con logos" />
      </div>
      <section className="form--section bg-light">
        <img src={lineShape} className="mx-auto pt-3 d-block" alt="Linea horizontal de división" /> <br />
        <h5 className="fw-bold text-center form--section__titles">
          Solicíta una cotización ahora
        </h5>
        <form className="row g-3 align-items-center justify-content-center pb-4">
          <div className="col-auto">
            <label
              htmlFor="staticEmail2"
              className="form-label form--section__titles"
            >
              Rut
            </label>
            <input
              type="text"
              className="form-control-plaintext bg-white text-center"
              id="staticEmail2"
              placeholder="12345678"
            />
          </div>
          <div className="col-auto">
            <label
               htmlFor="staticEmail2"
              className="form-label text-light text-center"
            >
              Rut
            </label>
            <p>-</p>
          </div>
          <div className="col-1">
            <label
               htmlFor="staticEmail2"
              className="form--label__check-digit form-label text-light "
            >
              Rut
            </label>
            <input
              type="text"
              className="form-control-plaintext bg-white text-center"
              id="staticEmail2"
              placeholder=" K "
            />
          </div>
          <div className="col-auto">
            <label
               htmlFor="staticEmail"
              className="form-label form--section__titles"
            >
              Correo
            </label>
            <input
              type="text"
              className="form-control-plaintext bg-white text-center"
              id="staticEmail"
              placeholder="email@example.com"
            />
          </div>
          <div className="col-auto">
            <label
               htmlFor="staticPhone"
              className="form-label form--section__titles"
            >
              Teléfono
            </label>
            <input
              type="text"
              className="form-control-plaintext bg-white text-center"
              id="staticPhone"
              placeholder="97653295"
            />
          </div>
          <div className="col-auto mt-5">
            <button
              type="submit"
              className="btn btn-warning fw-bold form--section__titles"
            >
              Solicitar información
            </button>
          </div>
        </form>
      </section>

      <section className="coverage-section bg-white d-flex container-fluid w-100">
        <div className="row">
          <div className="left-side-section col align-items-center m-4 w-100">
            <img src={lineShape} alt="Linea horizontal de división" />
            <h2 className="fw-bold form--section__titles">Coberturas</h2>

            <div className="lost-section mt-4">
              <img src={iconLost} style={{ width: "20%" }} alt="Icono de perdida total de vehiculo" />
              <h6 className="fw-bold form--section__titles">Pérdida total</h6>
              <img src={lineShape} alt="Linea horizontal de división" />
              <br />
              <p>Cubre el valor comecial del vehíchulo por<span className="fw-bold">UF 100.</span><br/>
              Puedes personalizar a<span className="fw-bold">UF 150, UF 200 Y UF 250.</span></p>
            </div>

            <div className="rc-section mt-4">
              <img src={iconRc} style={{ width: "20%" }} alt="Icono de responsabilidad civil" />
              <h6 className="fw-bold form--section__titles">
                Responsabilidad civil
              </h6>
              <img src={lineShape} alt="Linea horizontal de división" />
              <br />
              <p>Cubre los gastos de daños y materiales y médicos <br/>
              ocasionados a terceros hasta <span className="fw-bold">UF 800.</span>Puedes <br/>
              personalizarlo a <span className="fw-bold">UF 1.000, uf 2.000 O UF 3.000</span></p>
            </div>
          </div>

          <div className="right-side-section col align-items-center m-4 w-100">
            <h5 className="fw-normal text-center">Ten en cuenta que:</h5>
            <div className="d-flex flex-wrap">
              <p>
                <img src={checkIcon} alt="Icono check azul" /> Deber ser propietario del
                vehículo asegurado
              </p>
              <p>
                <img src={checkIcon} alt="Icono check azul" /> El vehículo no debe tener una
                antigüedad menor o igual a 20 años
              </p>
              <p>
                <img src={checkIcon} alt="Icono check azul" /> No debes tener siniestros en los
                últimos 24 meses
              </p>
              <p>
                <img src={checkIcon} alt="Icono check azul" /> El vehiculo debe ser de uso
                particular. No incluye taxis, colectivos, Uber, Cabify y otros
                servicios similares
              </p>
              <p>
                <img src={checkIcon} alt="Icono check azul" /> El vehículo no tenga daños que
                impidan su circulación, o que haya sido declarado pérdida total
                anteriormente
              </p>
            </div>
            <p className="text-center">Puedes pagar con <span className="fw-bold">Webpay, tarjeta de débito o crédicto. </span><br/> Puedes utilizar las siguientes tarjetas.</p>
            <img
              src={cards}
              style={{ width: "80%" }}
              className="align-items-center mt-2 mx-5"
              alt="Visa, Mastercard, American Express, Magna"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
