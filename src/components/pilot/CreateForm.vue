<template>
    <b-form class="mt-3">
      <b-row>
        <b-row>
          <h4 class="text-secondary">Plane Details </h4>
        </b-row>
        <b-col cols="6">
          <b-form-group id="Capacity " label="Capacity " label-for="Capacity ">
            <b-form-input
              id="Capacity"
              type="text"
              placeholder="Capacity "
              v-model="plane.capacity"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="model" label="model" label-for="model">
            <b-form-input
              id="model"
              type="text"
              placeholder="model"
              v-model="plane.model"
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
              v-model="plane.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- <b-row class="mt-5">
        <h4 class="text-secondary">Company Details</h4>
      </b-row> -->
      <!-- <b-row>
        <b-col cols="4">
          <b-form-group
            id="company_name"
            label="Company Name"
            label-for="company_name"
          >
            <b-form-input
              id="company_name"
              type="text"
              placeholder="XYZ Industries"
              v-model="customer.company_name"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row> -->
      <!-- <b-row>
        <b-col cols="4">
          <b-form-group
            id="acquired_on"
            label="Acquired On"
            label-for="acquired_on"
          >
            <b-form-input
              id="acquired_on"
              type="date"
              v-model="customer.acquired_on"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row> -->
      <!-- <b-row class="mt-2">
        <b-form-checkbox
          id="customer_status"
          v-model="customer.customer_status"
          name="customer-status"
          value="active"
          unchecked-value="inactive"
        >
          Customer is active
        </b-form-checkbox>
      </b-row> -->
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
        plane: {},
      };
    },
    methods: {
      triggerClose() {
        this.$emit("closeCreateModal");
      },
      addNewCustomer() {
        axios
          .post("http://localhost:7000/plane/save", this.plane)
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