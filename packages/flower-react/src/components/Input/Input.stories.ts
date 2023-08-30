import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: 'Flower/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: { control: 'boolean', description: '设置输入框失效状态', defaultValue: false },
    placeholder: { control: 'text', description: '设置占位符', defaultValue: '请输入' },
    prefix: { control: 'text', description: '设置前缀', defaultValue: '' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
}

export const WithPrefix: Story = {
  args: {
    prefix: '$',
  },
}
