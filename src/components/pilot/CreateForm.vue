<template>
  <b-form class="mt-3">
    <b-row>
      <b-row>
        <h4 class="text-secondary">Plane Details </h4>
      </b-row>
      <b-col cols="6">
        <b-form-group id="firstName" label="firstName " label-for="firstName">
          <b-form-input
            id="firstName"
            type="text"
            placeholder="firstName"
            v-model="pilot.name.firstName"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="lastName" label="last name" label-for="lastName">
          <b-form-input
            id="lastName"
            type="text"
            placeholder="Last Name"
            v-model="pilot.name.lastName"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="6">
        <b-form-group id="middleName" label="Middle Name" label-for="middleName">
          <b-form-input
            id="middleName"
            type="text"
            placeholder="Middle Name"
            v-model="pilot.name.middleName"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="description" label="Description" label-for="Description">
          <b-form-input
            id="description"
            type="text"
            placeholder="Description"
            v-model="pilot.gender.description"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="6">
        <b-form-group id="gender" label="Gender" label-for="gender">
          <b-form-input
            id="gender"
            type="text"
            placeholder="gender"
            v-model="pilot.gender.gender"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="phoneNumber" label="Phone Number" label-for="phoneNumber">
          <b-form-input
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            v-model="pilot.phoneNumber"
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
  name: "CreateModal",
  data() {
    return {
      pilot: { name:{},gender:{},},
    };
  },
  methods: {
    triggerClose() {
      this.$emit("closeCreateModal");
    },
    addNewCustomer() {
      axios
        .post("http://localhost:7000/api/pilot/save", this.pilot)
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