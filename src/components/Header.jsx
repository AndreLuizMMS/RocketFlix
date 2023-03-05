import arrows from '../assets/arrows.svg';

const Header = () => {
  return (
    <div className="header">
      <img src={arrows} alt="logo" className="logo" />
      <span className="title">Não sabe o que assistir?</span>
    </div>
  );
};

export default Header;
