import{i as e}from"./preload-helper-usAeo7Bx.js";import{O as t,t as n}from"./iframe-Dh6N6rC6.js";import{n as r,t as i}from"./CheckBox-rUTgdVob.js";var a,o,s,c,l,u,d,f,p;e((()=>{t(),r(),a=n(),o={title:`Components/Inputs/CheckBox`,component:i,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`]},disabled:{control:`boolean`},name:{control:`text`},checked:{control:`boolean`}}},s={args:{variant:`primary`,name:`primary-checkbox`}},c={args:{variant:`secondary`,name:`secondary-checkbox`}},l={args:{variant:`primary`,checked:!0,readOnly:!0}},u={args:{variant:`primary`,disabled:!0}},d={args:{variant:`primary`,disabled:!0,checked:!0,readOnly:!0}},f={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexDirection:`column`},children:[(0,a.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,a.jsx)(i,{variant:`primary`,name:`group1`,value:`option1`,defaultChecked:!0}),`Option 1`]}),(0,a.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,a.jsx)(i,{variant:`primary`,name:`group1`,value:`option2`}),`Option 2`]}),(0,a.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,a.jsx)(i,{variant:`primary`,name:`group1`,value:`option3`,disabled:!0}),`Option 3 (Disabled)`]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    name: 'primary-checkbox'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    name: 'secondary-checkbox'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    checked: true,
    readOnly: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    checked: true,
    readOnly: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    flexDirection: 'column'
  }}>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <CheckBox variant="primary" name="group1" value="option1" defaultChecked />
        Option 1
      </label>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <CheckBox variant="primary" name="group1" value="option2" />
        Option 2
      </label>
      <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <CheckBox variant="primary" name="group1" value="option3" disabled />
        Option 3 (Disabled)
      </label>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Primary`,`Secondary`,`Checked`,`Disabled`,`DisabledChecked`,`CheckboxGroup`]}))();export{f as CheckboxGroup,l as Checked,u as Disabled,d as DisabledChecked,s as Primary,c as Secondary,p as __namedExportsOrder,o as default};