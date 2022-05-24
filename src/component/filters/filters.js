import { useContext } from 'react';

import './filters.css';

import CategoryFilter from './categoryFilter';
import InstructorFilter from './instructorsFilter';
import TypeFilter from './typeFilter';
import { AppContext } from 'context';

const FILTERS = {
  category: ['IT', 'Leadership'],
  type: ['Courses', 'Streams'],
  instructor: ['Or Or', 'Instructor 1'],
  id: '1',
};

function Filters() {
  const {
    setCategoryFilter,
    setTypeFilter,
    setInstructorsFilter,
    setCategoryQuery,
    setQuerySearch,
  } = useContext(AppContext);

  // if api works
  // const [filters, setFilters] = useState([FILTERS]);

  // useEffect(() => {
  //   const fetchFilters = async () => {
  //     const response = await fetch(
  //       'https://filters.free.beeceptor.com/filters'
  //     );
  //     const data = await response.json();

  //     setFilters(data);
  //   };

  //   fetchFilters();
  // }, []);

  const handleReset = () => {
    setCategoryFilter([]);
    setTypeFilter([]);
    setInstructorsFilter([]);
    setCategoryQuery('');
    setQuerySearch('');
  };

  return (
    <div className="filter__wrapper">
      <div className="filter__header">
        <p>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 28a1 1 0 0 1-.53-.15A1 1 0 0 1 12 27v-9.62L4.28 8.81A5 5 0 0 1 3 5.46V5a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v.46a5 5 0 0 1-1.28 3.35L20 17.38v5.38a3 3 0 0 1-1.66 2.69l-4.89 2.44A1 1 0 0 1 13 28ZM5.05 6a3 3 0 0 0 .72 1.47l8 8.86A1 1 0 0 1 14 17v8.38l3.45-1.72a1 1 0 0 0 .55-.9V17a1 1 0 0 1 .26-.67l8-8.86A3 3 0 0 0 27 6Z"
              data-name="Layer 2"
            />
            <path style={{ fill: 'none ' }} d="M0 0h32v32H0z" />
          </svg>
          <span>Filter By:</span>
        </p>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <CategoryFilter data={FILTERS.category} />
      <TypeFilter data={FILTERS.type} />
      <InstructorFilter data={FILTERS.instructor} />
    </div>
  );
}

export default Filters;
