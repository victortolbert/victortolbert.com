import ExampleMessageContainer from '~/components/example/message/Container'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    const wrapper = mount(ExampleMessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: '<p data-testid="message">Hello from the db!</p>'
          }
        }
      }
    })

    const stubMessage = 'Hello from the db!'
    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual(stubMessage)
  })
})
