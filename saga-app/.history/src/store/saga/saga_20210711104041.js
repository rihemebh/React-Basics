import { takeEvery, put ,delay } from "redux-saga/effects";
//import { delay } from "redux-saga";

function* ageUpAsync() {
  yield delay(1000);
  yield put({ type: "up_async", payload: 1 });
}

// a generator function  
export function* watchAgeUp() {
  yield takeEvery("up_async", ageUpAsync);
}
