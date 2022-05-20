import Accordion from 'component/accordion';
import { Checkbox } from 'component/common';
import { AppContext } from 'context';
import { useContext } from 'react';

function InstructionsFilter() {
  const { courses } = useContext(AppContext);

  const instructors = courses && courses.map((course) => course.instructor);

  return (
    <Accordion title="Instructions">
      {instructors.map((a, index) => {
        return <Checkbox key={a + index}>{a}</Checkbox>;
      })}
    </Accordion>
  );
}

export default InstructionsFilter;
