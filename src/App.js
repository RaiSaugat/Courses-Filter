import { useEffect, useState } from 'react';

import { Courses, Filters, Header } from 'component';
import { AppContext } from 'context';
import { Input } from 'component/common';

const COURSES = [
  {
    createdAt: '2022-05-19T03:32:13.908Z',
    name: 'Future Usability Representative',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'active',
    category: 'IT',
    id: '1',
  },
  {
    createdAt: '2022-05-18T22:15:55.643Z',
    name: 'International Data Assistant',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'ongoing',
    category: 'IT',
    id: '2',
  },
  {
    createdAt: '2022-05-18T23:40:34.966Z',
    name: 'Internal Security Administrator',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'ended',
    category: 'Leadership',
    id: '3',
  },
  {
    createdAt: '2022-05-19T13:43:13.050Z',
    name: 'Customer Paradigm Coordinator',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'ended',
    category: 'IT',
    id: '4',
  },
  {
    createdAt: '2022-05-19T09:24:57.877Z',
    name: 'Senior Division Director',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'active',
    category: 'Leadership',
    id: '5',
  },
  {
    createdAt: '2022-05-19T10:31:07.316Z',
    name: 'District Intranet Technician',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'instructor 2',
    status: 'active',
    category: 'Leadership',
    id: '6',
  },
  {
    createdAt: '2022-05-18T15:55:53.555Z',
    name: 'Customer Creative Manager',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'ongoing',
    category: 'IT',
    id: '7',
  },
  {
    createdAt: '2022-05-19T05:15:00.942Z',
    name: 'Product Accounts Executive',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'ongoing',
    category: 'IT',
    id: '8',
  },
  {
    createdAt: '2022-05-19T10:51:15.133Z',
    name: 'Senior Brand Administrator',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'active',
    category: 'Leadership',
    id: '9',
  },
  {
    createdAt: '2022-05-18T17:38:19.001Z',
    name: 'Customer Identity Producer',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'ongoing',
    category: 'Leadership',
    id: '10',
  },
];

function App() {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [instructorsFilter, setInstructorsFilter] = useState([]);
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

  useEffect(() => {
    if (instructorsFilter.length > 0) {
      const filteredInstructors = COURSES.filter((course) =>
        instructorsFilter.includes(course.instructor)
      );
      setCourses(filteredInstructors);
    } else {
      setCourses(COURSES);
    }
  }, [instructorsFilter]);

  return (
    <AppContext.Provider
      value={{
        categoryFilter,
        setCategoryFilter,
        typeFilter,
        setTypeFilter,
        instructorsFilter,
        setInstructorsFilter,
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
