<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useFormStore } from './store/formStore';
  import { onMounted } from 'vue';

  const store = useFormStore();

  // Reactive state for form fields and error/success messages
  const name = ref("");
  const nameError = ref("");
  const email = ref("");
  const emailError = ref("");
  const message = ref("");
  const messageError = ref("");
  const terms = ref(true);
  const submissionMessage = ref('');

  // Email validation regex
  const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[?)[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]?|(([\w-]+\.)+[a-zA-Z]{2,}))$/);

  // Load form data when component mounts
  onMounted(() => {
    store.loadForm();
  });

  // Validation logic before form submission
  function validateForm() {
    let isValid = true;
    nameError.value = '';
    emailError.value = '';
    messageError.value = '';

    if (name.value.length < 2) {
    nameError.value = 'Name must be at least 2 characters long.';
    isValid = false;
  }
    if (!emailRegex.test(email.value)) {
    emailError.value = 'Email must be valid.';
    isValid = false;
  }
    if (message.value.length < 10) {
    messageError.value = 'Message must be at least 10 characters long.';
    isValid = false;
  }

    return isValid;
  }

  // Form submission logic
  async function submitForm() {
    if (!validateForm()) {
      // Validation failed, do not proceed with form submission
      return;
    }

    try {
      // db.json endpoint for submissions
      const response = await axios.post('http://localhost:3000/submissions', {
        name: name.value,
        email: email.value,
        message: message.value,
      });
      // Handle the successful submission response
      submissionMessage.value = 'Message submitted successfully!';

      // Reset form fields and errors after successful submission
      name.value = '';
      email.value = '';
      message.value = '';
      nameError.value = '';
      emailError.value = '';
      messageError.value = '';
    } catch (error) {
      // Handle errors, such as network issues or server errors
      submissionMessage.value = 'Failed to submit message.';
    }
  }
</script>



<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <label>Name:</label>
    <input v-model="name" required>
    <div v-if="nameError" class="error-message">{{ nameError }}</div>

    <label>Email:</label>
    <input v-model="email" type="email" required>
    <div v-if="emailError" class="error-message">{{ emailError }}</div>

    <label>Message:</label>
    <textarea v-model="message" required></textarea>
    <div v-if="messageError" class="error-message">{{ messageError }}</div>

    <div class="terms">
      <input type="checkbox" v-model="terms" disabled>
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button type="submit" class="button">Submit</button>
      <div v-if="submissionMessage" class="submission-message">{{ submissionMessage }}</div>    </div>
  </form>
</template>

<style scoped>

.input-invalid {
  border: 2px solid red;
}

.error-message {
  color: red;
  margin-top: 4px;
  font-size: 0.8em;
  font-weight: bold;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}


.contact-form {
  width: 100%;
  max-height: 90vh;
  min-height: 30vh;
  max-width: 30vw;
  min-width: 20vw;
  border-radius: 10px;

  overflow-y: auto;

  padding: 40px;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  align-content: flex-start;

  background-color: rgba(215, 215, 215, 0.86);
  border: 2px solid #222222;

  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px 12px rgba(0, 0, 0, 0.57);

}

.contact-form input,
.contact-form textarea {
  max-width: 100%;
  resize: vertical;
}

.button {
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  background-color: rgba(50,176,214,0.68);
}

.submit {
  text-align: center;
}

.button:hover {
  background-color: rgba(214,161,0,0.68);
}

.button:active {
  background-color: rgba(176,132,0,0.68);
}

</style>