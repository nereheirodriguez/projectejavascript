import { mount } from '@vue/test-utils';
import Comments from '../src/views/Comentaris.vue';
import { vi, describe, it, expect } from 'vitest';

// Simulate the global fetch function
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: 'Test Comment', body: 'This is a comment' }])
    })
);

describe('fetch', () => {
    it('fetches comments from API', async () => {
        // Mount the component
        const wrapper = mount(Comments);

        // Wait for promises to resolve, including the fetch call
        await wrapper.vm.$nextTick(); // Wait for Vue to finish the reactivity cycle
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait a bit more in case fetch takes time

        // Verify that comments have been loaded and there is at least one
        expect(wrapper.vm.comments.length).toBeGreaterThan(0);

        // Wait for Vue to finish the reactivity cycle
        await wrapper.vm.$nextTick();

        // Wait for the DOM to update
        await wrapper.vm.$nextTick();

        // Verify if the comment content is as expected
        const commentItem = wrapper.find('.comment');
        expect(commentItem.exists()).toBe(true); // Verify that the element exists
        expect(commentItem.text()).toContain('Test Comment');
        expect(commentItem.text()).toContain('This is a comment');
    });
});