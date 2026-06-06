function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/" aria-label="Job Application Tracker home">
        JAT
      </a>
      <nav className="header__nav" aria-label="Primary navigation">
        <a className="header__link" href="#form">
          Add job
        </a>
        <a className="header__link" href="#applications">
          Applications
        </a>
      </nav>
    </header>
  );
}

export default Header;
