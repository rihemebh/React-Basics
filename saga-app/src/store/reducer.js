const init = {
  age: 20,
};
export default function reducer(state = init, action) {
  switch (action.type) {
 
    case "up":
      return { ...state, age: state.age + action.payload };
    case "down":
      return { ...state, age: state.age - action.payload };

    default:
      return state;
  }
}
