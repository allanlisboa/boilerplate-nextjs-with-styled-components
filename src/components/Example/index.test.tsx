import { render, screen } from '@testing-library/react'

import Example from './index'

describe('<Example />', () => {
  it('shold render the heading', () => {
    const { container } = render(<Example />)

    expect(
      screen.getByRole('heading', { name: /Boilerplae NextJS/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
