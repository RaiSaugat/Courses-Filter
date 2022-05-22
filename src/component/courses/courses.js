import { useContext } from 'react';

import './courses.css';

import { AppContext } from 'context';

function Courses() {
  const { courses } = useContext(AppContext);

  return (
    <div className="courses">
      {courses.length > 0 ? (
        <>
          {courses.map((course) => (
            <Course data={course} key={course.id} />
          ))}
        </>
      ) : (
        <h2>No courses</h2>
      )}
    </div>
  );
}

function Course({ data }) {
  const courseStatus =
    data.status === 'active'
      ? 'Active'
      : data.status === 'ended'
      ? 'Course Ended'
      : 'Ongoing Stream';

  const className =
    data.status === 'active'
      ? 'active'
      : data.status === 'ended'
      ? 'inactive'
      : 'ongoing';

  return (
    <div className="course">
      <img src={data.avatar} alt={data.name} />

      <div className="info__wrapper">
        <div className="information">
          <p>{data.name}</p>
          <p className={`course__status ${className}`}>{courseStatus}</p>
        </div>
        <button>Join</button>
      </div>
    </div>
  );
}

export default Courses;
