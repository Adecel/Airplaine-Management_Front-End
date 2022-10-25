<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Role Details </h4>
        </b-row>
       
        <b-col cols="6">
          <b-form-group id="description" label="description" label-for="description">
            <b-form-input
              id="description"
              type="text"
              placeholder="description"
              v-model="role.description"
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
              v-model="role.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
   
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewCustomer"
            >Add Plane</b-button
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
    data() {
      return {
        role: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewCustomer() {
        axios
          .post("http://localhost:7000/plane/save", this.role)
          .then((response) => {
            console.log(response.data);
            this.$emit("closeCreateModal");
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