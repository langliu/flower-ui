/*! For license information please see components-flower-avatar-flower-avatar-stories-mdx.d2e7b246.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunka_components=self.webpackChunka_components||[]).push([[359],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/.pnpm/@storybook+addon-docs@7.0.18_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@7.0.18_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.0.18_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/flower-avatar/flower-avatar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,fallback:()=>fallback,large:()=>large,small:()=>small});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-docs@7.0.18_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Default=args=>`<flower-avatar\n  size="${args.size}"\n  alt="${args.alt}"\n  src="${args.src}"\n  fallback="${args.fallback}"\n></flower-avatar>`;function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Flower-Avatar",argTypes:{src:{description:"头像",control:{type:"text"},table:{type:{summary:!1,detail:"something"}},type:{required:!0}},size:{control:{type:"select"},options:["default","small","large"],table:{defaultValue:{summary:"default",detail:"默认头像大小"}}},alt:{description:"规定图像的替代文本",defaultValue:""},fallback:{description:"图像加载失败填充",control:{type:"text"}}}}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withToolbar:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{src:"https://github.com/shadcn.png",alt:"default",size:"default"},children:Default.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{story:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"小头像",children:"小头像"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withToolbar:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Small",args:{src:"https://github.com/shadcn.png",alt:"default",size:"small"},children:Default.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"大头像",children:"大头像"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withToolbar:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Large",args:{src:"https://github.com/shadcn.png",alt:"default",size:"large"},children:Default.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"图像加载失败默认填充",children:"图像加载失败默认填充"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{columns:2,withToolbar:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Fallback",args:{src:"https://github.com/shad",alt:"default",size:"large",fallback:"A"},children:Default.bind({})})})]})}const defaultStory=Default.bind({});defaultStory.storyName="Default",defaultStory.args={src:"https://github.com/shadcn.png",alt:"default",size:"default"},defaultStory.parameters={storySource:{source:'args => `<flower-avatar\n  size="${args.size}"\n  alt="${args.alt}"\n  src="${args.src}"\n  fallback="${args.fallback}"\n></flower-avatar>`'}};const small=Default.bind({});small.storyName="Small",small.args={src:"https://github.com/shadcn.png",alt:"default",size:"small"},small.parameters={storySource:{source:'args => `<flower-avatar\n  size="${args.size}"\n  alt="${args.alt}"\n  src="${args.src}"\n  fallback="${args.fallback}"\n></flower-avatar>`'}};const large=Default.bind({});large.storyName="Large",large.args={src:"https://github.com/shadcn.png",alt:"default",size:"large"},large.parameters={storySource:{source:'args => `<flower-avatar\n  size="${args.size}"\n  alt="${args.alt}"\n  src="${args.src}"\n  fallback="${args.fallback}"\n></flower-avatar>`'}};const fallback=Default.bind({});fallback.storyName="Fallback",fallback.args={src:"https://github.com/shad",alt:"default",size:"large",fallback:"A"},fallback.parameters={storySource:{source:'args => `<flower-avatar\n  size="${args.size}"\n  alt="${args.alt}"\n  src="${args.src}"\n  fallback="${args.fallback}"\n></flower-avatar>`'}};const componentMeta={title:"Components/Flower-Avatar",argTypes:{src:{description:"头像",control:{type:"text"},table:{type:{summary:!1,detail:"something"}},type:{required:!0}},size:{control:{type:"select"},options:["default","small","large"],table:{defaultValue:{summary:"default",detail:"默认头像大小"}}},alt:{description:"规定图像的替代文本",defaultValue:""},fallback:{description:"图像加载失败填充",control:{type:"text"}}},tags:["stories-mdx"],includeStories:["defaultStory","small","large","fallback"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);