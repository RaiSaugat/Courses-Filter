import Accordion from 'component/accordion';
import { Checkbox } from 'component/common';

function TypeFilter() {
  return (
    <Accordion title="Type">
      <Checkbox>Courses</Checkbox>
      <Checkbox>Streams</Checkbox>
    </Accordion>
  );
}

export default TypeFilter;
