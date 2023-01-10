import Num from '../components/Num';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { setNum } from '../modules/counter';

const ReduxCounter2 = () => {
  const num = useAppSelector(state => state.counter.num);
  const dispatch = useAppDispatch();

  return (
    <div
      className="container"
    >
      <Num num={num} />
      <input
        type="range"
        value={num}
        onChange={e => dispatch(setNum(+e.target.value))}
      />
    </div>
  );
};

export default ReduxCounter2;
