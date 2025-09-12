import { useDispatch, useSelector } from "react-redux";

import CarsList from "../../components/CarsList/CarsList.jsx";
import Container from "../../components/Container/Container";
import Filters from "../../components/Filters/Filters.jsx";
import { selectError, selectLoading } from "../../redux/cars/selectors.js";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectFilters } from "../../redux/filters/selectors.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [dispatch, filters]);

  return (
    <Container>
      <Filters />
      <CarsList />
    </Container>
  );
};

export default CatalogPage;
