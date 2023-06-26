import img from "../../img/Clarusway.png";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <img src={img} alt="clarusway_logo" />
      </nav>
      <h1>Lesson Reminder</h1>
    </>
  );
};

export default Header;
