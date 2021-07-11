import {takeEvery,put } from 'redux-saga/effects'
import {delay } from 'redux-saga'
function* ageUpAsync(){
    yield delay(4000);
yield put({type: 'up_async',value: 1})
} 
export function* watchAgeUp(){
    yield 
}

