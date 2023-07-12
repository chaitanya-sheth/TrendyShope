import {takeEvery,put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';
import {Data} from '../data/Data'

// function* getProducts(){
//     let data = yield fetch('http://localhost:3500/Data');
//     data = yield data.json();
//     yield put({type:SET_PRODUCT_LIST,data})
// }

function* getProducts() {
    const data = Data;
    yield put({ type: SET_PRODUCT_LIST, data });
  }

function* productSaga()
{
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;