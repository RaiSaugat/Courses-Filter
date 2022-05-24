import { useContext } from 'react';

import { Accordion, Checkbox } from 'component/common';
import { AppContext } from 'context';

function InstructorFilter({ data }) {
  const { instructorsFilter, setInstructorsFilter } = useContext(AppContext);

  const handleValueChange = (e, option) => {
    if (e.target.checked) {
      setInstructorsFilter([...instructorsFilter, option.toLowerCase()]);
    } else {
      const filtered = instructorsFilter.filter(
        (item) => item !== option.toLowerCase()
      );
      setInstructorsFilter(filtered);
    }
  };

  return (
    <Accordion title="Instructions">
      {data &&
        data.map((instructor, index) => {
          return (
            <Checkbox
              key={instructor + index}
              onChange={(e) => handleValueChange(e, instructor)}
              isChecked={instructorsFilter.includes(instructor.toLowerCase())}
            >
              {instructor}
            </Checkbox>
          );
        })}
    </Accordion>
  );
}

export default InstructorFilter;
