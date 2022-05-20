import { useContext, useState } from 'react';

import Accordion from 'component/accordion';
import { Checkbox, Input } from 'component/common';
import { AppContext } from 'context';

function CategoryFilter() {
  const {
    categoryFilter,
    setCategoryFilter,
    courses,
    handleCategoryQueryChange,
  } = useContext(AppContext);

  const [query, setQuery] = useState('');

  const categories = courses && courses.map((course) => course.category);

  const uniqueCategory = [...new Set(categories)];

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    handleCategoryQueryChange(value);
  };

  const handleValueChange = (e, option) => {
    if (e.target.checked) {
      setCategoryFilter([...categoryFilter, option]);
    } else {
      const filtered = categoryFilter.filter((item) => item !== option);
      setCategoryFilter(filtered);
    }
  };

  return (
    <Accordion title="Category">
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Category"
      />

      {uniqueCategory.map((category) => {
        return (
          <Checkbox
            key={category}
            onChange={(e) => handleValueChange(e, category)}
            isChecked={categoryFilter.includes(category)}
          >
            {category}
          </Checkbox>
        );
      })}
    </Accordion>
  );
}

export default CategoryFilter;
