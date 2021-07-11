import {takeEvery,put } from 'redux-saga/effects'

function* ageUpAsync(){
    yield delay(4000)
yield put({type: 'up_async',value: 1})
} 
export function* watchAgeUp(){
    yield 
}

