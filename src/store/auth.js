import authApi from '@/api/auth'

const state = {
  isSubmitting: false,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
  registerSuccess(state) {
    state.isSubmitting = false
  },
  registerFailure(state) {
    state.isSubmitting = false
  },
}

const actions = {
  async register(context, credential) {
    context.commit('registerStart')
    return await authApi
      .register(credential)
      .then((response) => {
        console.log(response)
        context.commit('registerSuccess', response.data.user)
      })
      .catch((error) => {
        context.commit('registerFailure', error.response.data.errors)
        console.log(error.message)
      })
  },
}

export default {
  state,
  mutations,
  actions,
}
