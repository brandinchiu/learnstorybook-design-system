import{j as c,a,F as l}from"./emotion-react-jsx-runtime.browser.esm-eb14d146.js";import{I as n,i as t,c as p}from"./Icon-8eb965a6.js";import"./jsx-runtime-d9e0c264.js";import"./index-ba6d2dec.js";import"./_commonjsHelpers-725317a4.js";import"./index-2baff29e.js";const O=p("div",{target:"e1w32cim2"})({name:"qp2n5j",styles:"color:#666;font-size:12px"});var S={name:"1fizidn",styles:"flex:none;min-width:auto;padding:0;background:#fff;border:1px solid #666;svg{display:block;margin-right:0;width:48px;height:48px;}"};const j=p("li",{target:"e1w32cim1"})("display:inline-flex;flex-direction:row;align-items:center;flex:0 1 20%;min-width:120px;padding:0px 7.5px 20px;svg{margin-right:10px;width:24px;height:24px;}",e=>e.minimal&&S,";"),L=p("ul",{target:"e1w32cim0"})({name:"14hrywh",styles:"display:flex;flex-flow:row wrap;list-style:none"}),F={title:"Design System/Icon",component:n},r={render:()=>c(l,{children:["There are ",Object.keys(t).length," icons",a(L,{children:Object.keys(t).map(e=>c(j,{children:[a(n,{icon:e,"aria-hidden":!0}),a(O,{children:e})]},e))})]})},s={name:"no labels",render:()=>a(L,{children:Object.keys(t).map(e=>a(j,{minimal:!0,children:a(n,{icon:e,"aria-label":e})},e))})},i={render:e=>c(l,{children:["this is an inline ",a(n,{...e})," icon (default)"]}),args:{icon:"facehappy","aria-label":"Happy face"}},o={render:e=>c(l,{children:["this is a block ",a(n,{...e})," icon"]}),args:{icon:"facehappy","aria-label":"Happy face",block:!0}};var m,d,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <>
      There are {Object.keys(icons).length} icons
      <List>
        {Object.keys(icons).map(key => <Item key={key}>
            <Icon icon={key} aria-hidden />
            <Meta>{key}</Meta>
          </Item>)}
      </List>
    </>
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'no labels',
  render: () => <List>
      {Object.keys(icons).map(key => <Item minimal key={key}>
          <Icon icon={key} aria-label={key} />
        </Item>)}
    </List>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,u,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <>
      this is an inline <Icon {...args} /> icon (default)
    </>,
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face'
  }
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var k,I,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <>
      this is a block <Icon {...args} /> icon
    </>,
  args: {
    icon: 'facehappy',
    'aria-label': 'Happy face',
    block: true
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const N=["Labels","NoLabels","Inline","Block"];export{o as Block,i as Inline,r as Labels,s as NoLabels,N as __namedExportsOrder,F as default};
//# sourceMappingURL=Icon.stories-fcd269a0.js.map
