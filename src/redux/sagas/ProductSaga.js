import API from '@utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {_onFail, _onSuccess} from '../actions';
import queryString from 'query-string';
import {Toast} from '@utils/helper';

function* getProduct(actions) {
  try {
    const res = yield API.get('product/getAllProducts', actions.params);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT),
      data: res.data,
      totalPage: res.total_Page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT)});
  }
}

function* getProductSale(actions) {
  try {
    const res = yield API.get('product/getAllProducts', actions.params);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_SALE),
      data: res.data,
      totalPage: res.total_Page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_SALE)});
  }
}

function* getProductDetails(actions) {
  try {
    const body = queryString.stringify(actions.body);

    const res = yield API.post('product/getProductById', body);
    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_BY_ID),
      data: res.product,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_BY_ID)});
  }
}

function* getProductDetailsShop(actions) {
  try {
    const res = yield API.get('product', actions.params);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_DETAILS_BY_SHOP),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_DETAILS_BY_SHOP)});
  }
}

function* getProductDetailsByCategory(actions) {
  try {
    const body = queryString.stringify(actions.body);

    const res = yield API.post('product/getProductsByCategory', body);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_BY_CATEGORY),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_BY_CATEGORY)});
  }
}

function* getProductFavorite(actions) {
  try {
    const res = yield API.get(
      `getUser/getFavoriteProduct?user=${actions.user}`,
    );

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_FAVORITE),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_FAVORITE)});
  }
}

function* addProductFavorite(actions) {
  try {
    const body = queryString.stringify(actions.body);

    const res = yield API.post(
      `getUser/addFavoriteProduct?user=${actions.user}`,
      body,
    );

    yield put({
      type: _onSuccess(Actions.ADD_PRODUCT_FAVORITE),
      data: res.data,
    });
    yield put({
      type: Actions.CHECK_PRODUCT_FAVORITE,
      user: actions.user,
      idProduct: actions.body.idProduct,
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.ADD_PRODUCT_FAVORITE)});
  }
}

function* checkProductFavorite(actions) {
  try {
    const res = yield API.get(
      `getUser/checkFavorite?user=${actions.user}&idProduct=${actions.idProduct}`,
    );

    yield put({
      type: _onSuccess(Actions.CHECK_PRODUCT_FAVORITE),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.CHECK_PRODUCT_FAVORITE)});
  }
}

function* getProductViewed(actions) {
  try {
    const res = yield API.get(`getUser/getViewedProduct?user=${actions.user}`);

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_VIEWED),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_VIEWED)});
  }
}

function* addProductViewed(actions) {
  try {
    const body = queryString.stringify(actions.body);

    const res = yield API.post(
      `getUser/addViewedProduct?user=${actions.user}`,
      body,
    );

    yield put({
      type: _onSuccess(Actions.ADD_PRODUCT_VIEWED),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.ADD_PRODUCT_VIEWED)});
  }
}

function* addProductReview(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post(`product/addProductReview`, body);
    yield put({type: _onSuccess(Actions.ADD_PRODUCT_REVIEW), data: res.data});
    yield put({
      type: Actions.GET_PRODUCT,
      params: {user: actions.user},
    });
    yield put({
      type: Actions.GET_PRODUCT_REVIEW,
      productId: actions.body.productId,
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.ADD_PRODUCT_REVIEW)});
  }
}

function* updateProductReview(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post(`product/updateProductReview`, body);
    yield put({
      type: _onSuccess(Actions.UPDATE_PRODUCT_REVIEW),
      data: res.data,
    });
    yield put({
      type: Actions.GET_PRODUCT,
      params: {user: actions.user},
    });
    yield put({
      type: Actions.GET_PRODUCT_REVIEW,
      productId: actions.body.productId,
    });
    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.UPDATE_PRODUCT_REVIEW)});
  }
}

function* deleteProductReview(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post(`product/deleteProductReview`, body);
    yield put({
      type: _onSuccess(Actions.DELETE_PRODUCT_REVIEW),
      data: res.data,
    });
    yield put({
      type: Actions.GET_PRODUCT_REVIEW,
      productId: actions.body.productId,
    });

    Toast(res.message);
  } catch (error) {
    yield put({type: _onFail(Actions.DELETE_PRODUCT_REVIEW)});
  }
}

function* getProductReview(actions) {
  try {
    const res = yield API.get(
      `product/getProductReviewById?productId=${actions.productId}`,
    );

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_REVIEW),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_REVIEW)});
  }
}

function* searchProduct(actions) {
  try {
    const res = yield API.get('product/getRecommendKeywords', actions.params);

    yield put({
      type: _onSuccess(Actions.SEARCH_KEYWORD_PRODUCT),
      data: res.keywords,
      totalPage: res.total_Page,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.SEARCH_KEYWORD_PRODUCT)});
  }
}

function* searchProductShop(actions) {
  try {
    const res = yield API.get(
      'product/getProductsByNameOfShop',
      actions.params,
    );

    yield put({
      type: _onSuccess(Actions.SEARCH_PRODUCT_SHOP),
      data: res.data,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.SEARCH_PRODUCT_SHOP)});
  }
}

function* getProductsByDiscountValue(actions) {
  try {
    const res = yield API.get(
      `product/getProductsByDiscountValue`,
      actions.params,
    );

    yield put({
      type: _onSuccess(Actions.GET_PRODUCTS_BY_DISCOUNT_VALUE),
      data: res.products,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCTS_BY_DISCOUNT_VALUE)});
  }
}

function* filterProduct(actions) {
  try {
    const body = queryString.stringify(actions.body);
    const res = yield API.post('product/searchProducts2', body);

    yield put({
      type: _onSuccess(Actions.FILTER_PRODUCT),
      data: res.data,
      isLoadMore: actions.isLoadMore,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.FILTER_PRODUCT)});
  }
}

function* searchProductByKeyword(actions) {
  try {
    const res = yield API.post(
      'product/searchProductsByKeyword',
      actions.keyword,
    );

    yield put({
      type: _onSuccess(Actions.GET_PRODUCT_BY_KEYWORD),
      data: res.data,
    });
  } catch (error) {
    yield put({type: _onFail(Actions.GET_PRODUCT_BY_KEYWORD)});
  }
}

export function* watchProductSagas() {
  yield takeLatest(Actions.GET_PRODUCT, getProduct);
  yield takeLatest(Actions.GET_PRODUCT_SALE, getProductSale);
  yield takeLatest(Actions.GET_PRODUCT_BY_ID, getProductDetails);
  yield takeLatest(Actions.GET_PRODUCT_DETAILS_BY_SHOP, getProductDetailsShop);
  yield takeLatest(
    Actions.GET_PRODUCT_BY_CATEGORY,
    getProductDetailsByCategory,
  );
  yield takeLatest(Actions.GET_PRODUCT_FAVORITE, getProductFavorite);
  yield takeLatest(Actions.ADD_PRODUCT_FAVORITE, addProductFavorite);
  yield takeLatest(Actions.CHECK_PRODUCT_FAVORITE, checkProductFavorite);
  yield takeLatest(Actions.ADD_PRODUCT_VIEWED, addProductViewed);
  yield takeLatest(Actions.GET_PRODUCT_VIEWED, getProductViewed);
  yield takeLatest(Actions.ADD_PRODUCT_REVIEW, addProductReview);
  yield takeLatest(Actions.UPDATE_PRODUCT_REVIEW, updateProductReview);
  yield takeLatest(Actions.DELETE_PRODUCT_REVIEW, deleteProductReview);
  yield takeLatest(Actions.GET_PRODUCT_REVIEW, getProductReview);
  yield takeLatest(Actions.SEARCH_KEYWORD_PRODUCT, searchProduct);
  yield takeLatest(Actions.SEARCH_PRODUCT_SHOP, searchProductShop);
  yield takeLatest(
    Actions.GET_PRODUCTS_BY_DISCOUNT_VALUE,
    getProductsByDiscountValue,
  );
  yield takeLatest(Actions.FILTER_PRODUCT, filterProduct);
  yield takeLatest(Actions.GET_PRODUCT_BY_KEYWORD, searchProductByKeyword);
}
