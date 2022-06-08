import { Button } from '../src/components/Button.js'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

export default {
  title: 'components/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Lorem ipsum',
}

export const WithOnClickHandler = Template.bind({})
WithOnClickHandler.args = {
  label: 'Lorem ipsum',
  onClick: () => alert('clicked'),
}
