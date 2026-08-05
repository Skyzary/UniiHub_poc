import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{O as n,t as r}from"./iframe-Dh6N6rC6.js";import{n as i,t as a}from"./SimpleDateTime-BSfehVMv.js";import{n as o,t as s}from"./CustomDateTime-B8TP9TEg.js";var c,l,u,d,f,p;t((()=>{c=e(n(),1),o(),i(),l=r(),u={title:`Slides/DateTime`,tags:[`autodocs`]},d=({label:e,children:t})=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,minWidth:260},children:[(0,l.jsx)(`div`,{style:{fontSize:12,color:`var(--text-secondary)`},children:e}),(0,l.jsx)(`div`,{children:t})]}),f=()=>{let[e,t]=(0,c.useState)(new Date),[n,r]=(0,c.useState)(new Date);return(0,l.jsxs)(`div`,{style:{padding:24},children:[(0,l.jsx)(`h2`,{children:`Date / Time — варианты`}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,l.jsx)(d,{label:`CustomDateTime`,children:(0,l.jsx)(s,{selected:e,onChange:t})}),(0,l.jsx)(d,{label:`SimpleDateTime`,children:(0,l.jsx)(a,{selected:n,onChange:r})})]})]})},f.__docgenInfo={description:``,methods:[],displayName:`Variants`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [customDate, setCustomDate] = useState<Date | null>(new Date());
  const [simpleDate, setSimpleDate] = useState<Date | null>(new Date());
  return <div style={{
    padding: 24
  }}>
      <h2>Date / Time — варианты</h2>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Labelled label="CustomDateTime">
          <CustomDateTime selected={customDate} onChange={setCustomDate} />
        </Labelled>
        <Labelled label="SimpleDateTime">
          <SimpleDateTime selected={simpleDate} onChange={setSimpleDate} />
        </Labelled>
      </div>
    </div>;
}`,...f.parameters?.docs?.source}}},p=[`Variants`]}))();export{f as Variants,p as __namedExportsOrder,u as default};