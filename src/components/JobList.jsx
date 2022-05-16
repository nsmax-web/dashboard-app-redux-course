import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "store/filters/actions";
import { selectFilters } from "store/filters/selectors";
import { selectVisiblePositions } from "store/positions/selectors";
import { JobPosition } from "./JobPosition";

const JobList = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const data = useSelector((state) => selectVisiblePositions(state, filters));

  const handelAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {data.map((item) => (
        <JobPosition
          key={item.id}
          handelAddFilter={handelAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
