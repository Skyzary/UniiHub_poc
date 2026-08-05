import{i as e}from"./preload-helper-usAeo7Bx.js";import{O as t,t as n}from"./iframe-Dh6N6rC6.js";import{n as r,t as i}from"./RadioButton-Bx2pmgcO.js";var a,o,s,c,l,u,d,f;e((()=>{t(),r(),a=n(),o={title:`Components/Inputs/RadioButton`,component:i,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`]},disabled:{control:`boolean`},name:{control:`text`},checked:{control:`boolean`}}},s={args:{variant:`primary`,name:`primary-radio`}},c={args:{variant:`secondary`,name:`secondary-radio`}},l={args:{variant:`primary`,disabled:!0}},u={args:{variant:`primary`,checked:!0,readOnly:!0}},d={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`10px`},children:[(0,a.jsx)(i,{variant:`primary`,name:`group1`,value:`option1`,defaultChecked:!0}),(0,a.jsx)(i,{variant:`primary`,name:`group1`,value:`option2`}),(0,a.jsx)(i,{variant:`primary`,name:`group1`,value:`option3`,disabled:!0})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    name: 'primary-radio'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    name: 'secondary-radio'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    checked: true,
    readOnly: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px'
  }}>
      <RadioButton variant="primary" name="group1" value="option1" defaultChecked />
      <RadioButton variant="primary" name="group1" value="option2" />
      <RadioButton variant="primary" name="group1" value="option3" disabled />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`Secondary`,`Disabled`,`Checked`,`RadioGroup`]}))();export{u as Checked,l as Disabled,s as Primary,d as RadioGroup,c as Secondary,f as __namedExportsOrder,o as default};