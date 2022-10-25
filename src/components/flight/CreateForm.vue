<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">flight  Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="contact " label="contact " label-for="contact ">
            <b-form-input
              id="contact"
              type="contact"
              placeholder="contact"
              v-model="contact.contact"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="model" label="model" label-for="model">
            <b-form-input
              id="model"
              type="text"
              placeholder="model"
              v-model="contact.description"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
  
   
      <b-row class="mt-4">
        <b-col cols="3">
          <b-button variant="primary" class="px-5" @click="addNewCustomer"
            >Add flight </b-button
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
        contact : {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewCustomer() {
        axios
          .post("http://localhost:7000/contact/save", this.contact)
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