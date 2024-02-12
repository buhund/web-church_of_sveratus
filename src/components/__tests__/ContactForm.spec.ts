import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue';




describe('ContactForm', () => {
  it("Form renders correctly", async () => {
    const wrapper = mount(ContactForm);
    // expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.html()).toContain("Name:" && "E-mail:" && "Message:")
    const nameField = wrapper.find('[data-testid="nameError"]');
    expect(wrapper.html()).toContain("Your Name");

    const emailField = wrapper.find('[data-testid="emailError"]');
    expect(wrapper.html()).toContain("Your E-mail");

    const messageField = wrapper.find('[data-testid="messageError"]');
    expect(wrapper.html()).toContain("Write your message here");

/*        await nameField.trigger("blur");
    await wrapper.vm.$nextTick();
    const nameError = wrapper.find('[data-testid="nameError"]');
    expect(nameError).toBe(`Please enter a valid name`);*/
  });

  it("Perform name validation", async () => {
    const wrapper = mount(ContactForm);
    // expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.html()).toContain("Name:" && "E-mail:" && "Message:")
    const nameField = wrapper.find('[data-testid="nameError"]');
    const emailField = wrapper.find('[data-testid="emailError"]');
    const messageField = wrapper.find('[data-testid="messageError"]');

    /*        await nameField.trigger("blur");
        await wrapper.vm.$nextTick();
        const nameError = wrapper.find('[data-testid="nameError"]');
        expect(nameError).toBe(`Please enter a valid name`);*/
  });

  it("Perform Email validation", async () => {
    const wrapper = mount(ContactForm);
    const emailField = wrapper.find('[data-testid="email"]');
    await emailField.trigger("blur");
    const emailError = wrapper.find('[data-testid="emailError"]').text();
    expect(emailError).toBe("Please enter a valid email address");
  });

  it("Perform Message validation", async () => {
    const wrapper = mount(ContactForm);
    const messageField = wrapper.find('[data-testid="message"]');
    await messageField.trigger("blur");
    const messageError = wrapper.find('[data-testid="messageError"]').text();
    expect(messageError).toBe("Please enter a valid message");
  });

});
