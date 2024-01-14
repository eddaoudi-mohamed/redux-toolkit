import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { iceCreamAction } from "../Redux/features/iceCream/iceCreamSlice";

interface Iprops {}

const IceCream: FC<Iprops> = ({}) => {
  const numberOfIceCream = useSelector(
    (state: any) => state.iceCream.numbeOfIceCream
  );
  const dispatch = useDispatch();
  return (
    <>
      <h1>Number of IceCream - {numberOfIceCream} </h1>
      <div>
        <span>
          <button
            onClick={() => {
              dispatch(iceCreamAction.ordred());
            }}
          >
            Buy iceCream
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              dispatch(iceCreamAction.reStocked(10));
            }}
          >
            Restock
          </button>
        </span>
      </div>
    </>
  );
};

export default IceCream;
