import { useContext } from 'react';

import { Accordion, Checkbox, Input } from 'component/common';
import { AppContext } from 'context';

function CategoryFilter({ data }) {
  const { categoryFilter, setCategoryFilter, categoryQuery, setCategoryQuery } =
    useContext(AppContext);

  const handleValueChange = (e, option) => {
    if (e.target.checked) {
      setCategoryFilter([...categoryFilter, option.toLowerCase()]);
    } else {
      const filtered = categoryFilter.filter(
        (item) => item !== option.toLowerCase()
      );
      setCategoryFilter(filtered);
    }
  };

  return (
    <Accordion title="Category">
      <Input
        type="text"
        value={categoryQuery}
        onChange={(e) => setCategoryQuery(e.target.value)}
        placeholder="Search Category"
      />

      {data &&
        data.map((category) => {
          return (
            <Checkbox
              key={category}
              onChange={(e) => handleValueChange(e, category)}
              isChecked={categoryFilter.includes(category.toLowerCase())}
            >
              {category}
            </Checkbox>
          );
        })}
    </Accordion>
  );
}

export default CategoryFilter;
