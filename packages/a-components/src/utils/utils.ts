import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import type { ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

export const isInContainer = (el: HTMLElement, container: HTMLElement): boolean => {
  if (!el || !container) return false
  // 获取当前 图片 的 DOM 包围信息
  const elRect: DOMRect = el.getBoundingClientRect()
  let containerRect: any
  // 判断当前的 scroll 是不是最外层窗口对象
  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }

  // 判断当前 image 的 dom 是否显示到具体页面中
  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  )
}
