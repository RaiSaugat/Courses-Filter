import { useContext } from 'react';

import Accordion from 'component/accordion';
import { Checkbox } from 'component/common';
import { AppContext } from 'context';

function InstructorFilter({ data }) {
  const { instructorsFilter, setInstructorsFilter } = useContext(AppContext);

  const handleValueChange = (e, option) => {
    if (e.target.checked) {
      setInstructorsFilter([...instructorsFilter, option]);
    } else {
      const filtered = instructorsFilter.filter((item) => item !== option);
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
              isChecked={instructorsFilter.includes(instructor)}
            >
              {instructor}
            </Checkbox>
          );
        })}
    </Accordion>
  );
}

export default InstructorFilter;
