import data from "../../helper/data";

const LessonCard = () => {
  return (
    <div className="row">
      {data.map((item) => {
        const { id, image, name, hour } = item;
        return (
          <div className="lesson_lesson col col-12 col-sm-12 col-md-6 col-lg-4" key={id}>
            <div>
              <img src={image} alt="lesson_logo" />
            </div>
            <div className="lesson_text">
              <p className="lesson_parag">
                <span className="lesson_span">Lesson {name}</span>
              </p>
              <p className="lesson_parag">
                <span className="lesson_span">Lesson {hour}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LessonCard;
