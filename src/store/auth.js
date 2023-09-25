import authApi from '@/api/auth'
import { setItem } from '@/helpers/persistanceStorage'

const state = {
  isSubmitting: false,
  currentUSer: null,
  validationErrors: null,
  isLoggedIn: null,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUSer = payload
    state.isLoggedIn = true
  },
  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
}

const actions = {
  async register(context, credential) {
    context.commit('registerStart')
    return await authApi
      .register(credential)
      .then((response) => {
        context.commit('registerSuccess', response.data.user)
        setItem('accessToken', response.data.user.token)
      })
      .catch((error) => {
        context.commit('registerFailure', error.response.data.errors)
      })
  },
}

export default {
  state,
  mutations,
  actions,
}
