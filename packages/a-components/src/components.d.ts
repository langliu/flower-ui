/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AButton {
        /**
          * 将按钮宽度调整为其父宽度的选项
         */
        "block"?: boolean;
        /**
          * 设置危险按钮
         */
        "danger"?: boolean;
        /**
          * 按钮失效状态
         */
        "disabled"?: boolean;
        /**
          * 幽灵属性，使按钮背景透明
         */
        "ghost"?: boolean;
        /**
          * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
         */
        "href"?: string;
        /**
          * 设置 button 原生的 type 值，可选值请参考 HTML 标准
         */
        "htmlType"?: string;
        /**
          * 设置按钮形状
         */
        "shape"?: 'default' | 'circle' | 'round';
        /**
          * 设置按钮大小
         */
        "size"?: 'large' | 'middle' | 'small';
        /**
          * 相当于 a 链接的 target 属性，href 存在时生效
         */
        "target"?: string;
        /**
          * 设置按钮类型
         */
        "type"?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    }
    interface AImage {
        /**
          * 错误文案
         */
        "errorText"?: string;
        /**
          * 图片填充方式
         */
        "fit": 'none' | 'contain' | 'cover' | 'fill' | 'scale-down';
        /**
          * 是否开启懒加载
         */
        "lazy": boolean;
        /**
          * 加载文案
         */
        "placeholder"?: string;
        "src": string;
    }
    interface FlowerAvatar {
        "alt"?: string;
        "fallback"?: string;
        "size"?: 'default' | 'small' | 'large';
        "src": string;
    }
    interface FlowerButton {
        "block"?: boolean;
        "class"?: string;
        "size": 'small' | 'default' | 'large';
        "variant": 'default' | 'destructive' | 'outline' | 'subtle' | 'ghost' | 'link';
    }
    interface FlowerInput {
        "class"?: string;
        "disabled"?: boolean;
        "maxlength"?: number;
        "placeholder"?: string;
        "readonly"?: boolean;
        "type"?: string;
        "value"?: string;
    }
    interface FlowerTextarea {
        "class"?: string;
        "disabled"?: boolean;
        "maxlength"?: number;
        "placeholder"?: string;
        "readonly"?: boolean;
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAButtonElement extends Components.AButton, HTMLStencilElement {
    }
    var HTMLAButtonElement: {
        prototype: HTMLAButtonElement;
        new (): HTMLAButtonElement;
    };
    interface HTMLAImageElement extends Components.AImage, HTMLStencilElement {
    }
    var HTMLAImageElement: {
        prototype: HTMLAImageElement;
        new (): HTMLAImageElement;
    };
    interface HTMLFlowerAvatarElement extends Components.FlowerAvatar, HTMLStencilElement {
    }
    var HTMLFlowerAvatarElement: {
        prototype: HTMLFlowerAvatarElement;
        new (): HTMLFlowerAvatarElement;
    };
    interface HTMLFlowerButtonElement extends Components.FlowerButton, HTMLStencilElement {
    }
    var HTMLFlowerButtonElement: {
        prototype: HTMLFlowerButtonElement;
        new (): HTMLFlowerButtonElement;
    };
    interface HTMLFlowerInputElement extends Components.FlowerInput, HTMLStencilElement {
    }
    var HTMLFlowerInputElement: {
        prototype: HTMLFlowerInputElement;
        new (): HTMLFlowerInputElement;
    };
    interface HTMLFlowerTextareaElement extends Components.FlowerTextarea, HTMLStencilElement {
    }
    var HTMLFlowerTextareaElement: {
        prototype: HTMLFlowerTextareaElement;
        new (): HTMLFlowerTextareaElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "a-button": HTMLAButtonElement;
        "a-image": HTMLAImageElement;
        "flower-avatar": HTMLFlowerAvatarElement;
        "flower-button": HTMLFlowerButtonElement;
        "flower-input": HTMLFlowerInputElement;
        "flower-textarea": HTMLFlowerTextareaElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AButton {
        /**
          * 将按钮宽度调整为其父宽度的选项
         */
        "block"?: boolean;
        /**
          * 设置危险按钮
         */
        "danger"?: boolean;
        /**
          * 按钮失效状态
         */
        "disabled"?: boolean;
        /**
          * 幽灵属性，使按钮背景透明
         */
        "ghost"?: boolean;
        /**
          * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
         */
        "href"?: string;
        /**
          * 设置 button 原生的 type 值，可选值请参考 HTML 标准
         */
        "htmlType"?: string;
        /**
          * 设置按钮形状
         */
        "shape"?: 'default' | 'circle' | 'round';
        /**
          * 设置按钮大小
         */
        "size"?: 'large' | 'middle' | 'small';
        /**
          * 相当于 a 链接的 target 属性，href 存在时生效
         */
        "target"?: string;
        /**
          * 设置按钮类型
         */
        "type"?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    }
    interface AImage {
        /**
          * 错误文案
         */
        "errorText"?: string;
        /**
          * 图片填充方式
         */
        "fit"?: 'none' | 'contain' | 'cover' | 'fill' | 'scale-down';
        /**
          * 是否开启懒加载
         */
        "lazy"?: boolean;
        /**
          * 加载文案
         */
        "placeholder"?: string;
        "src"?: string;
    }
    interface FlowerAvatar {
        "alt"?: string;
        "fallback"?: string;
        "size"?: 'default' | 'small' | 'large';
        "src"?: string;
    }
    interface FlowerButton {
        "block"?: boolean;
        "class"?: string;
        "size"?: 'small' | 'default' | 'large';
        "variant"?: 'default' | 'destructive' | 'outline' | 'subtle' | 'ghost' | 'link';
    }
    interface FlowerInput {
        "class"?: string;
        "disabled"?: boolean;
        "maxlength"?: number;
        "placeholder"?: string;
        "readonly"?: boolean;
        "type"?: string;
        "value"?: string;
    }
    interface FlowerTextarea {
        "class"?: string;
        "disabled"?: boolean;
        "maxlength"?: number;
        "placeholder"?: string;
        "readonly"?: boolean;
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "a-button": AButton;
        "a-image": AImage;
        "flower-avatar": FlowerAvatar;
        "flower-button": FlowerButton;
        "flower-input": FlowerInput;
        "flower-textarea": FlowerTextarea;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "a-button": LocalJSX.AButton & JSXBase.HTMLAttributes<HTMLAButtonElement>;
            "a-image": LocalJSX.AImage & JSXBase.HTMLAttributes<HTMLAImageElement>;
            "flower-avatar": LocalJSX.FlowerAvatar & JSXBase.HTMLAttributes<HTMLFlowerAvatarElement>;
            "flower-button": LocalJSX.FlowerButton & JSXBase.HTMLAttributes<HTMLFlowerButtonElement>;
            "flower-input": LocalJSX.FlowerInput & JSXBase.HTMLAttributes<HTMLFlowerInputElement>;
            "flower-textarea": LocalJSX.FlowerTextarea & JSXBase.HTMLAttributes<HTMLFlowerTextareaElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
