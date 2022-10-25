<template>
    <div class=" body">
      <base-form>
        <h3 class="mb-4">Sign Up</h3>
        <form @submit.stop.prevent="handleSubmit">
          <div class="alert alert-success" v-if="message && message.message">
            <p>{{ message.message }}</p>
          </div>
          <div class="alert alert-danger" v-if="errors ">
            <p>{{ errors}}</p>
          </div>
          <div class="text-danger .fs-2" v-if="errors && errors.errors">
            <small>{{ errors.errors.message }}</small>
          </div>
          <div class="form-group mb-3">
            <label for="name" class="float-left">Username</label>
            <input
              type="text"
              v-model="$v.user.username.$model"
              id="username"
              name="username"
              placeholder="User Name"
              class="form-control "
              :class="{ 'is-invalid': $v.user.username.$error }"
            />
            <span v-if="!$v.user.username.required" class="invalid-feedback">
              UserName is required</span
            >
            <span v-if="!$v.user.username.minLength" class="invalid-feedback"
              >username must be at least 3 characters</span
            >
        
          </div>
       
          <div class="form-group mb-3">
            <label for="email" class="float-left">Email</label>
            <input
              v-model="$v.user.email.$model"
              id="email"
              name="email"
              placeholder="Email"
              class="form-control"
              :class="{ 'is-invalid': $v.user.email.$error }"
            />
            <div v-if="$v.user.email.$error" class="invalid-feedback">
              <span v-if="!$v.user.email.required">Email is required</span>
              <span v-if="!$v.user.email.email">Email is invalid</span>
            </div>
            <div class="text-danger .fs-2" v-if="errors && errors.errors">
              <small>{{ errors.errors.email[0] }}</small>
            </div>
          </div>


          <div class="form-group mb-3">
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

            <!-- <div class="alert alert-danger" v-if="errors && errors.errors">
                    <p>{{errors.errors.password[0]}}</p>
                </div> -->
          </div>
        

          <div class="form-group">
            <button
              class="btn btn-danger"
              type="submit"
              :disabled="submitStatus || $v.$invalid"
            >
              Register <b-spinner small v-if="submitStatus"></b-spinner>
            </button>
          </div>
        </form>
      </base-form>
    </div>
</template>

<script>
  import {
    required,
    email,
    minLength,

  } from "vuelidate/lib/validators";
  import BaseForm from "@/components/UI/BaseForm.vue";
  import axios from "axios";
  export default {
    components: {
      BaseForm,
    },
    data() {
      return {
        user: {
          username: "",
          email: "",
          password: "",
        
        },
        submitted: false,
        success: false,
        submitStatus: false,
        errors: "",
        message: "",
      };
    },
    validations: {
      user: {
        username: {
          required,
          minLength: minLength(3),
        },
        email: {
          required,
          email,
        },
      
        password: {
          required,
          minLength: minLength(8),
        }
       
      },
    },
    methods: {
      handleSubmit() {
        this.submitStatus = true;
        this.submitted = true;
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.message = "";
        this.errors = "";
        let formData = {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
        };

        console.log(formData),
          axios
            .post("http://localhost:7000/api/auth/signup", formData, {})
            .then((res) => {
              (this.success = true), (this.submitted = false);
              this.message = res.data;
              this.$router.push({ path: "/login" });

             
            })
            .catch((error) => {
              if (error) {
                this.success = false;
                this.errors = error.response.data.message;
                 console.log(this.errors.message)
              }
        
            })
            .finally(() => {

              this.submitStatus = false;
            });
      },
    },
  };
</script>
<style scoped>
.body{
  margin-top: 10%;
}
</style>