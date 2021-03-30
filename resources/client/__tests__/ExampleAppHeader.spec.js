import ExampleAppHeader from '~/components/example/app/Header'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    const wrapper = mount(ExampleAppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('if logged in, show logout button', async () => {
    const wrapper = mount(ExampleAppHeader)
    await wrapper.setData({ loggedIn: true })

    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
