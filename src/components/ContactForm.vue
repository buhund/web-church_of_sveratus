<script setup lang="ts">
import { ref, defineEmits, computed, onMounted, watch } from 'vue';


const name = ref('');
const email = ref('');
const message = ref('');
const submissionStatus = ref('');

const nameInvalid = ref(false);
const emailInvalid = ref(false);
const messageInvalid = ref(false);

const emit = defineEmits(["message-submitted"]);

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  email.value = localStorage.getItem("email") || "";
  message.value = localStorage.getItem("message") || "";
});

watch(name, (newValue) => {
  localStorage.setItem('name', newValue);
});

watch(email, (newValue) => {
  localStorage.setItem('email', newValue);
});

watch(message, (newValue) => {
  localStorage.setItem('message', newValue);
});

const isFormValid = computed(() => {
  return name.value.trim() && email.value.trim() && message.value.trim();
});


/*
Basic onSubmit method
 */
/*
const onSubmit = () => {
  nameInvalid.value = !name.value;
  emailInvalid.value = !email.value;
  messageInvalid.value = !message.value;

  // if (name.value === "" || email.value === "" || message.value === "") {
  if (nameInvalid.value || emailInvalid.value || messageInvalid.value) {
    alert("Please fill out every field");
    return
  }


  const contactMessage = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  emit("message-submitted", contactMessage);

  // Reset form field
  name.value = "";
  email.value = "";
  message.value = "";
  nameInvalid.value = false;
  emailInvalid.value = false;
  messageInvalid.value = false;
}
*/

/*
Fancy onSubmit with JSON server and shiznitz
 */
const onSubmit = async () => {
  if (!name.value || !email.value || !message.value) {
    alert("Please fill out every field");
    return
  }

  const contactMessage = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  try {
    const response = await fetch('http://localhost:3000/submissions',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    if (response.ok) {
      //Success: Reset form field.
      name.value = "";
      email.value = "";
      message.value = "";
      submissionStatus.value = "Message submitted to the Angelis."
    } else {
      // Handle errors, without resetting form.
      submissionStatus.value = "Submission of message failed."
    }
    // Catch errors, without resetting form.
  } catch (error) {
    submissionStatus.value = "An error occurred."
  }
};
</script>


<template>
  <form class="contact-form" @submit.prevent="onSubmit">
    <h3>Formi Contactus</h3>

    <label for="name">Name:</label>
    <input id="name" v-model="name" :class="{'input-invalid': nameInvalid}" placeholder="Your Name">

    <label for="email">E-mail:</label>
    <input id="email" type="email" v-model="email" :class="{'input-invalid': emailInvalid}" placeholder="Your E-mail">

    <label for="message">Message:</label>
    <textarea id="message" v-model="message" :class="{'input-invalid': messageInvalid}" placeholder="Write your message here"></textarea>

    <input class="button" type="submit" value="Submit" :disabled="!isFormValid">
    <div v-if="submissionStatus">{{ submissionStatus }}</div>
  </form>
</template>

<style scoped>

.input-invalid {
  border: 2px solid red;
}

.contact-form {
  width: 100%;
  max-height: 90vh;
  min-height: 30vh;
  max-width: 40vw;
  min-width: 25vw;

  overflow-y: auto;

  padding: 20px;
  /*
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  */
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
  margin-top: 12px;
  height: 60px;
  width: 160px;
  align-content: center;
  background-color: rgba(50,176,214,0.68);
  font-weight: bold;
}

.button:hover {
  background-color: rgba(214,161,0,0.68);
}

.button:active {
  background-color: rgba(176,132,0,0.68);
}

</style>