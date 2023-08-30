import { FC, ReactNode } from 'react'

export type TagProps = {
  children: ReactNode
}

const Tag: FC<TagProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Tag
