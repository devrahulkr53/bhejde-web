import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper"

const firebaseConfig = {
  apiKey: "AIzaSyA-U0BPRO2v8pJ_OwjCNRBSI2_KZNPXSCw",
  authDomain: "coachnconsult-9ddc1.firebaseapp.com",
  projectId: "coachnconsult-9ddc1",
  storageBucket: "coachnconsult-9ddc1.appspot.com",
  messagingSenderId: "463025441868",
  appId: "1:463025441868:web:f5b4d8cc6ea25af714b8e9",
  measurementId: "G-6D51D4R52G"
}

const fireBaseBackend = getFirebaseBackend(firebaseConfig)

function* loginUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      )
      yield put(loginSuccess(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      
      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error[1]))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout)
      yield put(logoutUserSuccess(response))
    }
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend()
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      )
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    } else {
      const response = yield call(postSocialLogin, data)
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeLatest(SOCIAL_LOGIN, socialLogin)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
