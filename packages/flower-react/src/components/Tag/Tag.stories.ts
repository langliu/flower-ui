import { Meta, StoryObj } from '@storybook/react'
import Tag from './index'

const meta: Meta<typeof Tag> = {
  title: '数据展示/Tag 标签',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
