import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./GradesChart-w4IThMJK.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Components/Charts/GradesChart`,component:n,tags:[`autodocs`]},i=[{course_name:`Математический анализ`,grade:`92.00`,rawgrade:92},{course_name:`Программирование`,grade:`78.00`,rawgrade:78},{course_name:`Физика`,grade:`45.00`,rawgrade:45},{course_name:`История науки`,grade:`88.00`,rawgrade:88},{course_name:`Философия`,grade:`55.00`,rawgrade:55},{course_name:`Химия`,grade:`28.00`,rawgrade:28}],a={args:{grades:i}},o={args:{grades:[]}},s={args:{grades:[{course_name:`Математический анализ`,grade:`95.00`,rawgrade:95},{course_name:`Программирование`,grade:`100.00`,rawgrade:100},{course_name:`История науки`,grade:`85.00`,rawgrade:85}]}},c={args:{grades:[{course_name:`Физика`,grade:`45.00`,rawgrade:45},{course_name:`Химия`,grade:`28.00`,rawgrade:28}]}},l={args:{grades:[{course_name:`Математический анализ`,grade:`95.00`,rawgrade:95},{course_name:`Физика`,grade:`0`,rawgrade:0},{course_name:`Химия`,grade:`-`,rawgrade:null},{course_name:`Философия`,grade:``,rawgrade:null}]}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    grades: mockGrades
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    grades: []
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    grades: [{
      course_name: 'Математический анализ',
      grade: '95.00',
      rawgrade: 95
    }, {
      course_name: 'Программирование',
      grade: '100.00',
      rawgrade: 100
    }, {
      course_name: 'История науки',
      grade: '85.00',
      rawgrade: 85
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    grades: [{
      course_name: 'Физика',
      grade: '45.00',
      rawgrade: 45
    }, {
      course_name: 'Химия',
      grade: '28.00',
      rawgrade: 28
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    grades: [{
      course_name: 'Математический анализ',
      grade: '95.00',
      rawgrade: 95
    }, {
      course_name: 'Физика',
      grade: '0',
      rawgrade: 0
    },
    // filtered out
    {
      course_name: 'Химия',
      grade: '-',
      rawgrade: null
    },
    // filtered out
    {
      course_name: 'Философия',
      grade: '',
      rawgrade: null
    } // filtered out
    ]
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`Empty`,`OnlyHighGrades`,`OnlyLowGrades`,`WithInvalidGrades`]}))();export{a as Default,o as Empty,s as OnlyHighGrades,c as OnlyLowGrades,l as WithInvalidGrades,u as __namedExportsOrder,r as default};