<template>
    <div class="box">
      <base-form>
        <h3 class="mb-4">Sign In</h3>
        <form @submit.prevent="handleSubmit">
          <!-- <div class="alert alert-danger" v-if="errors && errors.errors">
            <p>{{ errors.message }}</p>
          </div> -->
          <div class="form-group" >
            <label for="email" class="float-left">Username</label>
            <input
              v-model="$v.user.username.$model"
              id="email"
              name="username"
              placeholder="username"
              class="form-control mb-4"
              :class="{ 'is-invalid': $v.user.username.$error }"
            />
            <div v-if="$v.user.username.$error" class="invalid-feedback">
              <span v-if="!$v.user.username.required">Username is required</span>
              <!-- <span v-if="!$v.user.email.email">Email is invalid</span> -->
            </div>
            <!-- <div class="text-danger .fs-2" v-if="errors && errors.errors">
            </div> -->
          </div>

          <div class="form-group mt-3 ">
            <label for="password" class="float-left">Password</label>
            <input
              type="password"
              v-model="$v.user.password.$model"
              id="password"
              name="password"
              placeholder="Password"
              class="form-control"
              :class="{ 'is-invalid': $v.user.password.$error }"
            />
            <div v-if="$v.user.password.$error" class="invalid-feedback">
              <span v-if="!$v.user.password.required"
                >Password is required</span
              >
              <span v-if="!$v.user.password.minLength"
                >Password must be at least 8 characters</span
              >
            </div>
              <p>
                <!-- <small>{{ errors.password }}</small> -->
              </p>
         
          </div>

          <div class="form-group">
            <button
              class="btn btn-danger"
              type="submit"
              :disabled=" $v.$invalid"
            >Login
              <!-- Login <b-spinner small v-if="loadingStatus"></b-spinner> -->
            </button>
          </div>
          <router-link to="/register">Register</router-link><br />
        </form>
      </base-form>
    </div>
</template>

<script>
  import { required,  minLength } from "vuelidate/lib/validators";
  import BaseForm from "@/components/UI/BaseForm.vue";

  export default {
    components: {
      BaseForm,
    },
    data() {
      return {
        user: {
          username: "",
          password: "",
        },
       // errors:""
      };
    },
    validations: {
      user: {
        username: {
          required,
      
        },
        password: {
          required,
          minLength: minLength(8),
        },
      },
    },
    methods: {
      handleSubmit() {
        this.$store.dispatch("login/handleSubmit", {
          username: this.user.username,
          password: this.user.password,
        });
      },
    },
    computed: {
      loadingStatus() {
        return this.$store.getters["login/loadingStatus"];
      },
      errors() {
        return this.$store.getters["login/errors"];
      },
      success() {
        return this.$store.getters["login/success"];
      },
    },
  };
</script>
<style lang="css" >
body{
  background: blue;
}
.box{
  margin-top:100px;
  background: blue;
}
</style>

