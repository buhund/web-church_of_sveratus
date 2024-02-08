<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";

const handleFormSubmission = (contactMessage) => {
  console.log(contactMessage);
};

</script>

<template>
  <div class="contact-container">
    <div class="contact">

      <div>
        <h1 class="h1-title">Contact the Apostoli Sveratus</h1>
        <br>
        <br>

        <p>
          Wishest thou to Ascend into the Apostoli Sveratus Rexgloriosus, for Holy Communion with the Lord and Savior
          Sveratus Sancti?
          Or havest thou some other urgent matter of import which requires the attention of the Elders?
          <br>
          <br>
          Send in thine tidings via Scematis Contacus:
        </p>
      </div>
      <div>
        <ContactForm @message-submitted="handleFormSubmission" />
      </div>

      <div>
        <br>
        <br>
        <p class="p-tiny">
          By viewing this page, you accept the Holy Contract, as interpreted by the Pontifex Maximus Primus Sveratus
          Apostoli. As per the Holy Contract you accept to pay Tithe to the Apostoli Sveratus  in all perpetuity.
          You also commit all thine ascendants to upold said Contract. Once accepted, you relinquish any
          right to withdraw, for both you and your ascendants in perpetuity. All you personal information is hereby
          the sole property of The Council.
          <br>
          The Contract may only be looked upon in its fullness by members of the Consilium Augures Seniorum Sacerdotum.
          <br>
          Any breaches of said Holy Contract will be dealt with according to the Holy Contract.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>


.contact-container {
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding-top: 22px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  background-color: rgba(215, 215, 215, 0.86);
  border: 2px solid #222222;
  align-content: flex-start;
  flex-direction: column;
}

.contact {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.p-tiny {
  color: black;
  font-size: 8px;
  font-weight: normal;
}

.h1-title {
  text-align: center;
  padding-bottom: 12px;
  font-weight: bolder;
  color: black;
}

p {
  font-weight: bold;
  color: black;
}

@media (min-width: 1024px) {
  .contact {
    min-height: 80vh;
    display: flex;
    align-items: flex-start;
  }
}
</style>

