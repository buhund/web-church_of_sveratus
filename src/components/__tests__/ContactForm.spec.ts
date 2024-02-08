import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue';




describe('ContactForm', () => {
    it("Perform name validation", async () => {
        const wrapper = mount(ContactForm)
        const nameField = wrapper.find('[data-testid="name"')
        await nameField.trigger("blur")
        const nameError = wrapper
    })

});
