import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{O as n,t as r}from"./iframe-Dh6N6rC6.js";import{n as i,t as a}from"./FileInput-DPoCcuCZ.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Components/Inputs/FileInput`,component:a,tags:[`autodocs`],argTypes:{size:{control:{type:`select`},options:[`small`,`medium`,`large`]},variant:{control:{type:`select`},options:[`primary`,`secondary`]},disabled:{control:{type:`boolean`}},multiple:{control:{type:`boolean`}},showFileList:{control:{type:`boolean`}}}},l=e=>{let[t,n]=(0,o.useState)([]);return(0,s.jsx)(`div`,{style:{maxWidth:`500px`,padding:`20px`},children:(0,s.jsx)(a,{...e,files:t,onFilesChange:n})})},u={render:l,args:{label:`Upload Document`,hint:`PNG, JPG, PDF up to 10MB`,size:`medium`,variant:`primary`}},d={render:l,args:{label:`Upload Multiple Attachments`,hint:`Drag & drop multiple files`,multiple:!0,size:`medium`}},f={render:l,args:{label:`Compact File Upload`,size:`small`,hint:`SVG or PNG only`}},p={render:l,args:{label:`Large Dropzone`,size:`large`,hint:`Supports high resolution images`,multiple:!0}},m={render:l,args:{label:`Secondary Variant`,variant:`secondary`,hint:`Subtle background style`}},h={render:l,args:{label:`Disabled File Upload`,disabled:!0,hint:`Uploading is disabled`}},g={render:l,args:{label:`Upload with Error`,error:`File size exceeds maximum limit of 5MB`}},_={render:()=>{let[e,t]=(0,o.useState)([new File([`hello`],`document.pdf`,{type:`application/pdf`}),new File([`image content`],`avatar.png`,{type:`image/png`})]);return(0,s.jsx)(`div`,{style:{maxWidth:`500px`,padding:`20px`},children:(0,s.jsx)(a,{label:`Project Files`,multiple:!0,files:e,onFilesChange:t})})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Upload Document',
    hint: 'PNG, JPG, PDF up to 10MB',
    size: 'medium',
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Upload Multiple Attachments',
    hint: 'Drag & drop multiple files',
    multiple: true,
    size: 'medium'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Compact File Upload',
    size: 'small',
    hint: 'SVG or PNG only'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Large Dropzone',
    size: 'large',
    hint: 'Supports high resolution images',
    multiple: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Secondary Variant',
    variant: 'secondary',
    hint: 'Subtle background style'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Disabled File Upload',
    disabled: true,
    hint: 'Uploading is disabled'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: InteractiveTemplate,
  args: {
    label: 'Upload with Error',
    error: 'File size exceeds maximum limit of 5MB'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sampleFile1 = new File(['hello'], 'document.pdf', {
      type: 'application/pdf'
    });
    const sampleFile2 = new File(['image content'], 'avatar.png', {
      type: 'image/png'
    });
    const [files, setFiles] = useState<File[]>([sampleFile1, sampleFile2]);
    return <div style={{
      maxWidth: '500px',
      padding: '20px'
    }}>
        <FileInput label="Project Files" multiple files={files} onFilesChange={setFiles} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Primary`,`MultipleFiles`,`Small`,`Large`,`Secondary`,`Disabled`,`ErrorState`,`WithInitialFiles`]}))();export{h as Disabled,g as ErrorState,p as Large,d as MultipleFiles,u as Primary,m as Secondary,f as Small,_ as WithInitialFiles,v as __namedExportsOrder,c as default};