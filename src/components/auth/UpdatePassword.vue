<template>
  <Layout name="LayoutDefault">
    <div>
      <b-card class="shadow p-1 mb-3 bg-white rounded">
        <h4 class="mb-4">Credentials</h4>

        <form @submit.stop.prevent="handleSubmit">
          <div class="alert alert-success" v-if="message">
            <p>{{ message.Message }}</p>
          </div>
          <div class="alert alert-danger" v-if="errors">
            <p>{{ errors.message }}</p>
          </div>
          
            <div class="text-danger .fs-2" v-if="errors && errors.errors">
              <small>{{ errors.errors.message }}</small>
            </div>
            <div class="form-group">
              <label for="password" class="float-left">Password</label>
              <input
                type="password"
                v-model="$v.user.currentPassword.$model"
                id="password"
                name="firstName"
                placeholder="current password"
                class="form-control"
                :class="{ 'is-invalid': $v.user.currentPassword.$error }"
              />
              <span
                v-if="!$v.user.currentPassword.required"
                class="invalid-feedback"
              >
                Current Password is required</span
              >
              <span v-if="!$v.user.password.minLength" class="invalid-feedback"
                >Password must be at least 8 characters</span
              >
              <div class="text-danger .fs-2" v-if="errors">
                <small>{{errors.current_password }}</small>
              </div>
            </div>

            <div class="form-group">
              <label for="newpassword" class="float-left">New password</label>
              <input
                type="password"
                v-model="$v.user.password.$model"
                id="newpassword"
                name="new password"
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
              <label for="confirmPassword" class="float-left"
                >confirm new password</label
              >
              <input
                type="password"
                v-model="$v.user.confirmPassword.$model"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
                class="form-control"
                :class="{ 'is-invalid': $v.user.confirmPassword.$error }"
              />
              <div
                v-if="$v.user.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.confirmPassword.required"
                  >Confirm Password is required</span
                >
                <span v-else-if="!$v.user.confirmPassword.sameAsPassword"
                  >Passwords must match</span
                >
              </div>
            </div>

            <div class="form-group">
              <button
                class="btn btn-danger"
                type="submit"
                :disabled="submitStatus || $v.$invalid"
              >
                Update <b-spinner small v-if="submitStatus"></b-spinner>
              </button>
            </div>
          
        </form>
      </b-card>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/Layout";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

import axios from "axios";
export default {
  components: {
    Layout,
  },
  data() {
    return {
      user: {
        currentPassword: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      success: false,
      submitStatus: false,
      errors: "",
      message: "",
      hideForm: true,
    };
  },
  validations: {
    user: {
      currentPassword: {
        minLength: minLength(8),
      },

      password: {
        required,
        minLength: minLength(8),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
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
        current_password: this.user.currentPassword,
        password: this.user.password,
        confirm_password: this.user.confirmPassword,
      };
      axios
        .put("https://mmt-web.herokuapp.com/api/change_password", formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          (this.hideForm = false),
            (this.success = true),
            (this.submitted = false);
          this.message = res.data;
          // this.$router.push({ path: "/taskboard" });
        })
        .catch((error) => {
          // this.submitStatus = false;

          this.errors = error.response.data;
          //this.errors = this.errors.message;
          console.log(this.errors);

          // this.message = this.errors.errors.email[0]
          //  console.log(this.message)
        })
        .finally(() => {
          // setTimeout(() => this.hideForm = true, 800);
          this.submitStatus = false;
        });
    },
  },
};
</script>
