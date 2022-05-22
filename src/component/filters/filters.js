import CategoryFilter from './categoryFilter';
import InstructorFilter from './instructorsFilter';
import TypeFilter from './typeFilter';

import './filters.css';
import { useEffect, useState } from 'react';

function Filters() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      const response = await fetch(
        'https://filters.free.beeceptor.com/filters'
      );
      const data = await response.json();

      setFilters(data);
    };

    fetchFilters();
  }, []);

  return (
    <div className="filter__wrapper">
      <div className="filter__header">
        <p>Filter By:</p>
        <button>Reset</button>
      </div>

      <CategoryFilter data={filters.category} />
      <TypeFilter data={filters.type} />
      <InstructorFilter data={filters.instructor} />
    </div>
  );
}

export default Filters;
