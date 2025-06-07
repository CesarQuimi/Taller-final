import React, { useState } from "react";
import "./login.css";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.role) {
      alert("Todos los campos son obligatorios");
      return;
    }
    // Aquí iría la lógica de envío del formulario
  };

  return (
    <div className="login_page login_page_v2">
      <div className="uk-container uk-container-center">
        <div className="md-card" style={{ borderRadius: "2rem" }}>
          <div className="md-card-content padding-reset">
            <div className="uk-grid uk-grid-collapse">
              <div className="uk-width-large-2-3 uk-hidden-medium uk-hidden-small">
                <div
                  className="tm-slideshow-default uk-slidenav-position"
                  data-uk-slideshow="{autoplay:true, animation: 'scale',  autoplayInterval: 3000}"
                >
                  <ul className="uk-slideshow" style={{ height: "426px" }}>
                    <li
                      data-slideshow-slide="img"
                      aria-hidden="true"
                      className=""
                      style={{
                        animationDuration: "500ms",
                        opacity: 0,
                        height: "426px",
                      }}
                    >
                      <div
                        className="uk-cover-background uk-position-cover"
                        style={{
                          backgroundImage:
                            "url('https://educalinks.tecnologicoargos.edu.ec/img/otros/arte-1.jpg')",
                        }}
                      ></div>
                    </li>
                    <li
                      data-slideshow-slide="img"
                      aria-hidden="true"
                      style={{
                        animationDuration: "500ms",
                        opacity: 0,
                        height: "426px",
                      }}
                      className=""
                    >
                      <div
                        className="uk-cover-background uk-position-cover"
                        style={{
                          backgroundImage:
                            "url('https://educalinks.tecnologicoargos.edu.ec/img/otros/arte-2.jpg')",
                        }}
                      ></div>
                    </li>
                    <li
                      data-slideshow-slide="img"
                      aria-hidden="true"
                      style={{
                        animationDuration: "500ms",
                        opacity: 0,
                        height: "426px",
                      }}
                      className=""
                    >
                      <div
                        className="uk-cover-background uk-position-cover"
                        style={{
                          backgroundImage:
                            "url('https://educalinks.tecnologicoargos.edu.ec/img/otros/arte-3.jpg')",
                        }}
                      ></div>
                    </li>
                    <li
                      data-slideshow-slide="img"
                      aria-hidden="false"
                      style={{
                        animationDuration: "500ms",
                        opacity: 1,
                        height: "426px",
                      }}
                      className="uk-active"
                    >
                      <div
                        className="uk-cover-background uk-position-cover"
                        style={{
                          backgroundImage:
                            "url('https://educalinks.tecnologicoargos.edu.ec/img/otros/arte-4.jpg')",
                        }}
                      ></div>
                    </li>
                  </ul>
                  <a
                    href=""
                    className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous"
                    data-uk-slideshow-item="previous"
                  ></a>
                  <a
                    href=""
                    className="uk-slidenav uk-slidenav-contrast uk-slidenav-next"
                    data-uk-slideshow-item="next"
                  ></a>
                  <ul className="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-left uk-margin-left">
                    <li data-uk-slideshow-item="0" className="">
                      <a href=""></a>
                    </li>
                    <li data-uk-slideshow-item="1" className="">
                      <a href=""></a>
                    </li>
                    <li data-uk-slideshow-item="2" className="">
                      <a href=""></a>
                    </li>
                    <li data-uk-slideshow-item="3" className="uk-active">
                      <a href=""></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="uk-width-large-1-3 uk-width-medium-2-3 uk-container-center">
                <div className="login_page_forms">
                  <div id="login_card">
                    <form onSubmit={handleSubmit} id="form_main">
                      <div id="login_form">
                        <div className="login_heading">
                          <img
                            src="https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/logo_argos_02.png"
                            alt=""
                            height="200"
                            width="200"
                          />
                        </div>
                        <div className="uk-form-row">
                          <div className="md-input-wrapper md-input-filled">
                            <label htmlFor="username">Usuario</label>
                            <input
                              className="md-input label-fixed validate"
                              id="username"
                              name="username"
                              type="text"
                              autoComplete="off"
                              value={formData.username}
                              onChange={handleInputChange}
                            />
                            <span className="md-input-bar"></span>
                          </div>
                        </div>
                        <div className="uk-form-row">
                          <div className="md-input-wrapper md-input-filled">
                            <label htmlFor="password">Contraseña</label>
                            <input
                              className="md-input label-fixed validate"
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              autoComplete="off"
                              value={formData.password}
                              onChange={handleInputChange}
                            />
                            <span className="md-input-bar"></span>
                          </div>
                          <div
                            id="div_pass"
                            className={
                              showPassword ? "view_pass_hiden" : "view_pass"
                            }
                            title="Ver/Ocultar Contraseña"
                          >
                            <input
                              id="show_password_ini"
                              type="checkbox"
                              checked={showPassword}
                              onChange={handlePasswordToggle}
                            />
                          </div>
                        </div>
                        <div className="uk-form-row md-input-wrapper md-input-filled">
                          <label htmlFor="role">Perfil</label>
                          <select
                            name="role"
                            id="role"
                            className="md-input login md-input label-fixed"
                            value={formData.role}
                            onChange={handleInputChange}
                          >
                            <option value="" disabled>
                              Seleccione Perfil ...
                            </option>
                            <option value="U">Administrativo</option>
                            <option value="A">Alumnos</option>
                            <option value="P">Docente</option>
                          </select>
                        </div>
                        <div
                          className="uk-alert uk-alert-danger"
                          data-uk-alert=""
                          id="alertCamposNull"
                          style={{ display: "none" }}
                        >
                          <a href="#" className="uk-alert-close"></a>
                          Por favor seleccione el perfil del usuario.
                        </div>
                        <div className="uk-margin-medium-top">
                          <button
                            type="submit"
                            className="md-btn md-btn-primary md-btn-block md-btn-large"
                          >
                            Ingresar
                          </button>
                        </div>
                      </div>
                      <br />
                      <p
                        style={{ fontSize: "12px", fontWeight: 600 }}
                        className="icheck-inline"
                      >
                        <a
                          href="https://educalinks.tecnologicoargos.edu.ec/recuperaClaveView"
                          style={{ color: "#673ab7 !important" }}
                          className="uk-text-primary"
                        >
                          ¿Olvidaste tu contraseña?
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <footer id="footer" style={{ textAlign: "center" }}>
          <br />
          <br />
          <div className="uk-grid uk-grid-width-1-1 uk-grid-width-large-1-3">
            <div></div>
            <div>
              <a
                href="https://www.facebook.com/tecnologicoargos"
                target="_blank"
                className="md-btn md-btn-facebook md-btn-small md-btn-icon"
              >
                <i className="uk-icon-facebook no_margin"></i>
              </a>
              <a
                href="https://twitter.com/tecno_argos"
                target="_blank"
                className="md-btn md-btn-twitter md-btn-small md-btn-icon"
              >
                <i className="uk-icon-twitter no_margin"></i>
              </a>
              <a
                href="https://www.instagram.com/tecno_argos/"
                target="_blank"
                className="md-btn md-btn-gplus md-btn-small md-btn-icon"
                style={{ backgroundColor: "#c2185b!important" }}
              >
                <i className="uk-icon-instagram no_margin"></i>
              </a>
            </div>
            <div></div>
          </div>
          <br />© 2021-2022{" "}
          <a href="https://tecnologicoargos.edu.ec/" target="_blank">
            Tecnológico Argos
          </a>
          <br />
          <br />
        </footer>
      </div>
    </div>
  );
};
