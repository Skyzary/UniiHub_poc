import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./AssignmentsDonut-BGeGlNV5.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Components/Charts/AssignmentsDonut`,component:n,tags:[`autodocs`]},i=[{course_name:`Математический анализ`,grade:`92.00`,rawgrade:92},{course_name:`Программирование`,grade:`78.00`,rawgrade:78}],a=[{id:1,courseName:`Математический анализ`,name:`Домашнее задание 1`,duedate:Math.floor(Date.now()/1e3)-3600,description:`Решить задачи по пределам`},{id:2,courseName:`Физика`,name:`Лабораторная работа 1`,duedate:Math.floor(Date.now()/1e3)-86400*2,description:`Определить ускорение свободного падения`},{id:3,courseName:`История науки`,name:`Эссе`,duedate:Math.floor(Date.now()/1e3)+86400*5,description:`Написать эссе о Ньютоне`}],o={args:{assignments:a,grades:i}},s={args:{assignments:[],grades:[]}},c={args:{assignments:[{id:1,courseName:`Математический анализ`,name:`ДЗ 1`,duedate:Math.floor(Date.now()/1e3)-3600,description:``},{id:2,courseName:`Программирование`,name:`ДЗ 2`,duedate:Math.floor(Date.now()/1e3)-3600,description:``}],grades:i}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    assignments: mockAssignments,
    grades: mockGrades
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    assignments: [],
    grades: []
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    assignments: [{
      id: 1,
      courseName: 'Математический анализ',
      name: 'ДЗ 1',
      duedate: Math.floor(Date.now() / 1000) - 3600,
      description: ''
    }, {
      id: 2,
      courseName: 'Программирование',
      name: 'ДЗ 2',
      duedate: Math.floor(Date.now() / 1000) - 3600,
      description: ''
    }],
    grades: mockGrades
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Empty`,`AllDone`]}))();export{c as AllDone,o as Default,s as Empty,l as __namedExportsOrder,r as default};