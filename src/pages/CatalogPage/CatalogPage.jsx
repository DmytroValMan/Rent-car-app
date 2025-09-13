import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CarsList from "../../components/CarsList/CarsList.jsx";
import Container from "../../components/Container/Container";
import Filters from "../../components/Filters/Filters.jsx";
// import { selectError, selectLoading } from "../../redux/cars/selectors.js";
import { fetchCars } from "../../redux/cars/operations.js";
// import { selectFilters } from "../../redux/filters/selectors.js";
import { fetchBrands } from "../../redux/filters/operations.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const filters = useSelector(selectFilters);

  useEffect(() => {
    // dispatch(fetchCars({}));
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <Filters />
        <CarsList />
      </Container>
    </section>
  );
};

export default CatalogPage;
