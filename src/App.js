import { useEffect, useState } from 'react';

import { Courses, Filters, Header } from 'component';
import { AppContext } from 'context';
import { Input } from 'component/common';

const COURSES = [
  {
    id: 1,
    name: 'Testing',
    avatar: '',
    instructor: 'Oron',
    status: 'ongoing',
    category: 'IT',
  },
  {
    id: 2,
    name: 'Testing 1',
    avatar: '',
    instructor: 'John',
    status: 'ongoing',
    category: 'Leadership',
  },
  {
    id: 3,
    name: 'Testing',
    avatar: '',
    instructor: 'Or Or',
    status: 'inactive',
    category: 'IT',
  },
  {
    id: 4,
    name: 'Testing',
    avatar: '',
    instructor: 'Instructor 1',
    status: 'inactive',
    category: 'Leadership',
  },
  {
    id: 5,
    name: 'Testing 1',
    avatar: '',
    instructor: 'Instructor 2',
    status: 'active',
    category: 'IT',
  },
  {
    id: 6,
    name: 'Testing',
    avatar: '',
    instructor: 'Oron',
    status: 'ongoing',
    category: 'Management',
  },
];

function App() {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [instructionsFilter, setInstructionsFilter] = useState([]);
  const [courses, setCourses] = useState(COURSES);

  const handleCategoryQueryChange = (value) => {
    if (value) {
      const filteredCourses = COURSES.filter((course) =>
        course.category.toLowerCase().includes(value.toLowerCase())
      );
      setCourses(filteredCourses);
    } else {
      setCourses(COURSES);
    }
  };

  useEffect(() => {
    if (categoryFilter.length > 0) {
      const filteredCourses = COURSES.filter((course) =>
        categoryFilter.includes(course.category)
      );
      setCourses(filteredCourses);
    } else {
      setCourses(COURSES);
    }
  }, [categoryFilter]);

  return (
    <AppContext.Provider
      value={{
        categoryFilter,
        setCategoryFilter,
        typeFilter,
        setTypeFilter,
        instructionsFilter,
        setInstructionsFilter,
        courses,
        setCourses,
        handleCategoryQueryChange,
      }}
    >
      <main className="wrapper">
        <Header />
        <div className="layout">
          <aside>
            <Input type="text" placeholder="Search" />
            <Filters />
          </aside>
          <div className="data">
            <Courses />
          </div>
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
