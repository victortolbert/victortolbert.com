import { shallowMount } from '@vue/test-utils'
import KeyboardShortcut from '@/components/KeyboardShortcut.vue'

describe('KeyboardShortcut.vue', () => {
  it('Displays a message when escape is pressed', () => {
    const wrapper = shallowMount(Demo, { attachTo: document.body })

    // the browser will add 'key' to the event,
    // but when testing we need to add it manually
    wrapper.trigger('keydown.esc', { key: 'Escape' })

    expect(wrapper.text()).to.include('Escape has been pressed')

    // always make sure to destroy when using attachToDocument
    wrapper.unmount()
  })
})
