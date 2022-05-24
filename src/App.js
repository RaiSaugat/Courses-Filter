import { useEffect, useState } from 'react';

import { Courses, Filters, Header } from 'component';
import { AppContext } from 'context';
import { Input } from 'component/common';

// if api works, we can make this into api call
const COURSES = [
  {
    createdAt: '2022-05-19T03:32:13.908Z',
    name: 'Future Usability Representative',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'active',
    category: 'IT',
    id: '1',
    type: 'courses',
  },
  {
    createdAt: '2022-05-18T22:15:55.643Z',
    name: 'International Data Assistant',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'ongoing',
    category: 'IT',
    id: '2',
    type: 'streams',
  },
  {
    createdAt: '2022-05-18T23:40:34.966Z',
    name: 'Internal Security Administrator',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'ended',
    category: 'Leadership',
    id: '3',
    type: 'streams',
  },
  {
    createdAt: '2022-05-19T13:43:13.050Z',
    name: 'Customer Paradigm Coordinator',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'ended',
    category: 'IT',
    id: '4',
    type: 'courses',
  },
  {
    createdAt: '2022-05-19T09:24:57.877Z',
    name: 'Senior Division Director',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'active',
    category: 'Leadership',
    id: '5',
    type: 'streams',
  },
  {
    createdAt: '2022-05-19T10:31:07.316Z',
    name: 'District Intranet Technician',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'instructor 2',
    status: 'active',
    category: 'Leadership',
    id: '6',
    type: 'courses',
  },
  {
    createdAt: '2022-05-18T15:55:53.555Z',
    name: 'Customer Creative Manager',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'ongoing',
    category: 'IT',
    id: '7',
    type: 'courses',
  },
  {
    createdAt: '2022-05-19T05:15:00.942Z',
    name: 'Product Accounts Executive',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'ongoing',
    category: 'IT',
    id: '8',
    type: 'courses',
  },
  {
    createdAt: '2022-05-19T10:51:15.133Z',
    name: 'Senior Brand Administrator',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Or Or',
    status: 'active',
    category: 'Leadership',
    id: '9',
    type: 'streams',
  },
  {
    createdAt: '2022-05-18T17:38:19.001Z',
    name: 'Customer Identity Producer',
    avatar: 'http://loremflickr.com/640/480/abstract',
    instructor: 'Instructor 1',
    status: 'ongoing',
    category: 'Leadership',
    id: '10',
    type: 'streams',
  },
];

function App() {
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [instructorsFilter, setInstructorsFilter] = useState([]);
  const [courses, setCourses] = useState(COURSES);
  const [categoryQuery, setCategoryQuery] = useState('');
  const [querySearch, setQuerySearch] = useState('');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // filter functionality
  useEffect(() => {
    let arr = [];
    for (let data of COURSES) {
      if (
        querySearch &&
        !data.name.toLowerCase().includes(querySearch.toLowerCase())
      )
        continue;
      if (
        categoryQuery &&
        !data.category.toLowerCase().includes(categoryQuery.toLowerCase())
      )
        continue;

      if (
        instructorsFilter.length > 0 &&
        !instructorsFilter.includes(data.instructor.toLowerCase())
      )
        continue;

      if (
        categoryFilter.length > 0 &&
        !categoryFilter.includes(data.category.toLowerCase())
      )
        continue;

      if (
        typeFilter.length > 0 &&
        !typeFilter.includes(data.type.toLowerCase())
      )
        continue;

      arr.push(data);
    }

    if (
      instructorsFilter.length > 0 ||
      categoryFilter.length > 0 ||
      typeFilter.length > 0 ||
      querySearch.length > 0 ||
      categoryQuery.length > 0
    ) {
      setCourses(arr);
    } else {
      setCourses(COURSES);
    }
  }, [
    instructorsFilter,
    typeFilter,
    categoryFilter,
    categoryQuery,
    querySearch,
  ]);

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
        categoryQuery,
        showMobileFilter,
        setCategoryQuery,
      }}
    >
      <main className="wrapper">
        <Header />
        <div className="layout">
          {!showMobileFilter && (
            <div
              className="filter__box"
              onClick={() => {
                setShowMobileFilter(true);
              }}
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 28a1 1 0 0 1-.53-.15A1 1 0 0 1 12 27v-9.62L4.28 8.81A5 5 0 0 1 3 5.46V5a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v.46a5 5 0 0 1-1.28 3.35L20 17.38v5.38a3 3 0 0 1-1.66 2.69l-4.89 2.44A1 1 0 0 1 13 28ZM5.05 6a3 3 0 0 0 .72 1.47l8 8.86A1 1 0 0 1 14 17v8.38l3.45-1.72a1 1 0 0 0 .55-.9V17a1 1 0 0 1 .26-.67l8-8.86A3 3 0 0 0 27 6Z"
                  data-name="Layer 2"
                />
                <path style={{ fill: 'none ' }} d="M0 0h32v32H0z" />
              </svg>
            </div>
          )}
          <aside className={showMobileFilter ? 'open' : 'close'}>
            <span
              className="close__button"
              onClick={() => setShowMobileFilter(false)}
            >
              X
            </span>
            <Input
              type="text"
              placeholder="Search"
              value={querySearch}
              onChange={(e) => setQuerySearch(e.target.value)}
            />
            <Filters />
          </aside>
          <div className={`data ${showMobileFilter ? 'backdrop' : ''}`}>
            <Courses />
          </div>
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
