import { useDispatch, useSelector } from "react-redux";
import { clearFilter, remofeFilter } from "../store/filters/actions";
import { selectFilters } from "../store/filters/selectors";
import { Badge } from "../UI/Badge";
import { Card } from "../UI/Card";
import { Stack } from "../UI/Stack";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleRemoveFilter = (filter) => {
    dispatch(remofeFilter(filter));
  };

  const handleClearFilters = () => dispatch(clearFilter);

  if (filters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => handleRemoveFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={handleClearFilters}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
