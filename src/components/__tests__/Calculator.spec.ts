import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Calculator from '@/components/Calculator.vue'

describe('Calculator.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calculator);
    });

    test('performs addition correctly', async () => {
        await wrapper.vm.appendValue('2');
        await wrapper.vm.addition();
        await wrapper.vm.appendValue('3');
        await wrapper.vm.equals();
        expect(wrapper.vm.current).toBe('5');
    });

    test('clears current input and formula', async () => {
        await wrapper.vm.appendValue('9');
        await wrapper.vm.clear();
        expect(wrapper.vm.current).toBe('');
        expect(wrapper.vm.formula).toBe('');
    });

    test('appends values and a comma correctly', async () => {
        await wrapper.vm.appendValue('3');
        await wrapper.vm.comma();
        await wrapper.vm.appendValue('1');
        expect(wrapper.vm.current).toBe('3.1');
    });

    test('calculates percentage correctly', async () => {
        await wrapper.vm.appendValue('50');
        await wrapper.vm.percent();
        expect(wrapper.vm.current).toBe('0.5');
    });

    test('handles division by zero', async () => {
        await wrapper.vm.appendValue('1');
        await wrapper.vm.division();
        await wrapper.vm.appendValue('0');
        await wrapper.vm.equals();
        expect(wrapper.vm.current).toBe('Ad Infinitum');
    });

    // tests for subtraction, multiplication, backspace, and history functionality
});
