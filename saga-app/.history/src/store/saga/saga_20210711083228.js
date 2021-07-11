import {takeEvery,put } from 'redux-saga/effects'

function* ageUpAsync(){
yield put({type: 'up_async'})
} 
export function* watchAgeUp(){
    yield 
}

