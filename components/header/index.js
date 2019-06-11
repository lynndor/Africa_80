import Navi from "../navigation";

const Header = () => {
  return (
    <header className="default-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="static/img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarSupportedContent"
          >
            <Navi />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
