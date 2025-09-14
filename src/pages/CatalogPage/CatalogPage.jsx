import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ClockLoader } from "react-spinners";

import css from "./CatalogPage.module.css";
import CarsList from "../../components/CarsList/CarsList.jsx";
import Container from "../../components/Container/Container";
import Filters from "../../components/Filters/Filters.jsx";
import { fetchBrands } from "../../redux/filters/operations.js";
import { selectLoading } from "../../redux/filters/selectors.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <Filters />
        {isLoading ? (
          <div className={css.loaderWrapper}>
            <ClockLoader color="#3470ff" size={300} />
          </div>
        ) : (
          <CarsList />
        )}
      </Container>
    </section>
  );
};

export default CatalogPage;
