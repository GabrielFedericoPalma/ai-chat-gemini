import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import isActive from '../isActive.vue'

describe('isActive', () => {
  it('renders properly', () => {
    const wrapper = mount(isActive, { props: { msg: 'is active' } })
    expect(wrapper.text()).toContain('is active')
  })
})
