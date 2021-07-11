import {takeEvery,put } from 'redux-saga/effects'

function* ageUpAsync(){
yield put({type: 'up'})
} 
export function* watchAgeUp(){
    yield 
}

