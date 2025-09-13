import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Container from "../../components/Container/Container.jsx";
import { selectCarById } from "../../redux/cars/selectors.js";
import css from "./CarPage.module.css";

import { fetchCarById } from "../../redux/cars/operations.js";
import CarDetailedInfo from "../../components/CarDetailedInfo/CarDetailedInfo.jsx";
import OrderForm from "../../components/OrderForm/OrderForm.jsx";

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarById);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <section>
      <Container>
        {car && (
          <div className={css.pageWrapper}>
            <div className={css.formWrapper}>
              <div className={css.imgWrapper}>
                <img className={css.img} src={car.img} alt={car.description} />
              </div>
              <OrderForm />
            </div>
            <CarDetailedInfo />
          </div>
        )}
      </Container>
    </section>
  );
};

export default CarPage;
