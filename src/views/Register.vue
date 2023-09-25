<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-sx-12">
          <h1 class="text-xs-center">Sing Up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">Need an account?</router-link>
          </p>
          VALIDATION ERRORS
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              :disabled="isSubmitting"
              class="btn btn-lg btn-primary pull-xs-right"
            >
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MvcRegisterPage',

  data() {
    return {
      email: '',
      password: '',
      username: '',
    }
  },

  methods: {
    onSubmit() {
      console.log('submited form')
      this.$store
        .dispatch('register', {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    },
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting
    },
  },
}
</script>
