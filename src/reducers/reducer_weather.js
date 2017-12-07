import { FETCH_WEATHER } from '../types/types';

export default function(state = [], action){
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state] // spread func -> new array;
    default:
      return state;
  }
} 