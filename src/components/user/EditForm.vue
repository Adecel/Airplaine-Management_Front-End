<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">User Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="firstName" label="First Name " label-for="firstName">
            <b-form-input
              id="Capacity"
              type="text"
              placeholder="first name "
              v-model="user.name.firstName"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="lastName" label="lastName" label-for="lastName">
            <b-form-input
              id="lastName"
              type="text"
              placeholder="last name "
              v-model="user.name.lastName"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="middleName" label="middleName" label-for="middleName">
            <b-form-input
              id="middleName"
              type="text"
              placeholder="middle name"
              v-model="user.name.middleName"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="gender" label="gender" label-for="gender">
            <b-form-input
              id="model"
              type="text"
              placeholder="model"
              v-model="user.gender.gender"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="6">
          <b-form-group id="name" label="Name" label-for="Name">
            <b-form-input
              id="Name"
              type="Name"
              placeholder="Name"
              v-model="user.gender.description"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="updateCustomer"
            >Update Customer</b-button
          >
        </b-col>
        <b-col>
          <b-button variant="warning" @click="triggerClose">Close</b-button>
        </b-col>
      </b-row>
    </b-form>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "CreateCustomerModal",
    props: {
      customerId: Number,
    },
    data() {
      return {
        user: {
          name:{},gender:{},
        }
      };
    },
    mounted() {
      this.getCusomterByID();
      //.log(this.getCusomterByID())
    },
    methods: {
      triggerClose() {
        this.$emit("closeEditModal");
      },
      getCusomterByID() {
        axios
          .get(`http://localhost:7000/user/read/${this.customerId}`)
          .then((response) => {
            this.user = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      updateCustomer() {
        axios
          .put(
            `http://localhost:7000/user/update/${this.customerId}`,
            this.user
          )
          .then((response) => {
            console.log(response.data);
            this.$emit("closeEditModal");
            this.$emit("reloadDataTable");
            this.$emit("showSuccessAlert");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>