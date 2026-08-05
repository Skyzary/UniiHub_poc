import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{O as n,t as r}from"./iframe-Dh6N6rC6.js";import{n as i,r as a,t as o}from"./GradeSimulator-Tw-L50qw.js";var s,c,l,u,d,f,p,m,h;t((()=>{s=e(n(),1),a(),c=r(),l={title:`Components/Gamification/GradeSimulator`,component:o,tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{style:{minHeight:`350px`,padding:`24px`},children:(0,c.jsx)(e,{})})]},u=[{course_name:`Математический анализ`,grade:`92.00`,rawgrade:92},{course_name:`Программирование`,grade:`78.00`,rawgrade:78},{course_name:`Физика`,grade:`45.00`,rawgrade:45}],d=[{id:1,courseName:`Математический анализ`,name:`Экзаменационная контрольная работа`,duedate:Math.floor(Date.now()/1e3)+86400*5,description:``},{id:2,courseName:`Математический анализ`,name:`Индивидуальное домашнее задание 2`,duedate:Math.floor(Date.now()/1e3)+86400*10,description:``},{id:3,courseName:`Программирование`,name:`Финальный проект по курсу`,duedate:Math.floor(Date.now()/1e3)+86400*3,description:``},{id:4,courseName:`Физика`,name:`Защита лабораторных работ 2-4`,duedate:Math.floor(Date.now()/1e3)+86400*7,description:``}],f={render:e=>{let[t,n]=(0,s.useState)(!0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onOpen:()=>n(!0)}),(0,c.jsx)(o,{...e,open:t,onClose:()=>n(!1)})]})},args:{open:!0,grades:u,assignments:d}},p={render:e=>{let[t,n]=(0,s.useState)(!0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onOpen:()=>n(!0)}),(0,c.jsx)(o,{...e,open:t,onClose:()=>n(!1)})]})},args:{open:!0,grades:[],assignments:[]}},m={render:e=>{let[t,n]=(0,s.useState)(!0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onOpen:()=>n(!0)}),(0,c.jsx)(o,{...e,open:t,onClose:()=>n(!1)})]})},args:{open:!0,grades:u,assignments:[]}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true);
    return <>
        <GradeSimulatorTrigger onOpen={() => setOpen(true)} />
        <GradeSimulator {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    open: true,
    grades: mockGrades,
    assignments: mockAssignments
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true);
    return <>
        <GradeSimulatorTrigger onOpen={() => setOpen(true)} />
        <GradeSimulator {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    open: true,
    grades: [],
    assignments: []
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(true);
    return <>
        <GradeSimulatorTrigger onOpen={() => setOpen(true)} />
        <GradeSimulator {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    open: true,
    grades: mockGrades,
    assignments: []
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Empty`,`WithoutAssignments`]}))();export{f as Default,p as Empty,m as WithoutAssignments,h as __namedExportsOrder,l as default};