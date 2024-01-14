import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "../Redux/features/cake/cakeSlice";

interface Iprops {}

const Cake: FC<Iprops> = ({}) => {
  const numberOfCake = useSelector((state: any) => state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number of Cake - {numberOfCake} </h1>
      <div>
        <span>
          <button
            onClick={() => {
              dispatch(cakeActions.ordered());
            }}
          >
            Buy Cake
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              dispatch(cakeActions.reStocked(10));
            }}
          >
            Restock
          </button>
        </span>
      </div>
    </>
  );
};

export default Cake;
