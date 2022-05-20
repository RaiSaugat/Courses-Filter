import CategoryFilter from './categoryFilter';
import InstructionsFilter from './instructorsFilter';
import TypeFilter from './typeFilter';

import './filters.css';

function Filters() {
  return (
    <div className="filter__wrapper">
      <div className="filter__header">
        <p>Filter By:</p>
        <button>Reset</button>
      </div>

      <CategoryFilter />
      <TypeFilter />
      <InstructionsFilter />
    </div>
  );
}

export default Filters;
