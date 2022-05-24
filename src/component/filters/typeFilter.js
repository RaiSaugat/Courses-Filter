import { useContext } from 'react';

import { Checkbox, Accordion } from 'component/common';
import { AppContext } from 'context';

function TypeFilter({ data }) {
  const { typeFilter, setTypeFilter } = useContext(AppContext);

  const handleValueChange = (e, option) => {
    if (e.target.checked) {
      setTypeFilter([...typeFilter, option.toLowerCase()]);
    } else {
      const filtered = typeFilter.filter(
        (item) => item !== option.toLowerCase()
      );
      setTypeFilter(filtered);
    }
  };

  return (
    <Accordion title="Type">
      {data &&
        data.map((type) => {
          return (
            <Checkbox
              key={type}
              onChange={(e) => handleValueChange(e, type)}
              isChecked={typeFilter.includes(type.toLowerCase())}
            >
              {type}
            </Checkbox>
          );
        })}
    </Accordion>
  );
}

export default TypeFilter;
