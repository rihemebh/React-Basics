import {takeEvery,put } from 'redux-saga/effects'

function* ageUpAsync(){
    yield 
yield put({type: 'up_async',value: 1})
} 
export function* watchAgeUp(){
    yield 
}

