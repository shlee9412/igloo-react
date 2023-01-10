import ButtonGroup from '../components/ButtonGroup';
import Num from '../components/Num';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { decrease, increase } from '../modules/counter';

const ReduxCounter1 = () => {
  const num = useAppSelector(state => state.counter.num);
  const dispatch = useAppDispatch();

  const decreaseNum = () => {
    dispatch(decrease());
  };

  const increaseNum = () => {
    dispatch(increase());
  };

  return (
    <div
      className="container"
    >
      <Num num={num} />
      <ButtonGroup
        decreaseNum={decreaseNum}
        increaseNum={increaseNum}
      />
    </div>
  );
};

export default ReduxCounter1;
