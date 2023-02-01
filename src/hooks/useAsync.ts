import { useEffect, useReducer } from "react";

interface State {
  loading: boolean
  data: any
  error: any
}

interface Action {
  type: 'LOADING' | 'SUCCESS' | 'ERROR'
  data?: any
  error?: any
}

const reducer = (state: State, action: Action): State => {

  switch (action.type) {
    case 'LOADING':
      console.log('LOADING', action, state);
      return {
        loading: true,
        data: null,
        error: null
      };

    case 'SUCCESS':
      console.log('SUCCESS', action, state);
      return {
        loading: false,
        data: action.data,
        error: null
      };

    case 'ERROR':
      console.log('ERROR', action, state);
      return {
        loading: false,
        data: null,
        error: action.error
      };
  
    default:
      return {
        loading: false,
        data: null,
        error: 'handle error'
      };
      
  }

};

const useAsync = <T>(callback: () => Promise<T>, skip = false): [State, () => Promise<void>] => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false
  });

  const fetchData = async () => {
    dispatch({ type : 'LOADING' });

    try {
      const data: T = await callback();
      dispatch({ type: 'SUCCESS', data })
    } catch (error) {
      dispatch({ type: 'ERROR', error })
    }

  };

  useEffect(() => {
    if (skip) return;
    fetchData();

  }, []);

  return [state, fetchData];

};
export default useAsync;