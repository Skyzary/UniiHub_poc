import{i as e}from"./preload-helper-usAeo7Bx.js";import{O as t,t as n}from"./iframe-Dh6N6rC6.js";import{n as r,t as i}from"./Chart-BVl0ocbn.js";import{n as a,t as o}from"./AssignmentsDonut-BGeGlNV5.js";import{n as s,t as c}from"./GradesChart-w4IThMJK.js";var l,u,d,f,p,m;e((()=>{t(),r(),a(),s(),l=n(),u={title:`Slides/Charts`,tags:[`autodocs`]},d=[{course_name:`Математический анализ`,grade:`92.00`,rawgrade:92},{course_name:`Программирование`,grade:`78.00`,rawgrade:78},{course_name:`Физика`,grade:`45.00`,rawgrade:45},{course_name:`История науки`,grade:`88.00`,rawgrade:88},{course_name:`Философия`,grade:`55.00`,rawgrade:55},{course_name:`Химия`,grade:`28.00`,rawgrade:28}],f=[{id:1,courseName:`Математический анализ`,name:`Домашнее задание 1`,duedate:Math.floor(Date.now()/1e3)-3600,description:`Решить задачи по пределам`},{id:2,courseName:`Физика`,name:`Лабораторная работа 1`,duedate:Math.floor(Date.now()/1e3)-86400*2,description:`Определить ускорение свободного падения`},{id:3,courseName:`История науки`,name:`Эссе`,duedate:Math.floor(Date.now()/1e3)+86400*5,description:`Написать эссе о Ньютоне`}],p=()=>(0,l.jsxs)(`div`,{style:{padding:24,display:`grid`,gap:32},children:[(0,l.jsx)(`h2`,{children:`Charts — варианты`}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12},children:`Базовый Bar Chart (Horizontal)`}),(0,l.jsx)(i,{type:`bar`,layout:`horizontal`,valueLabel:`Оценка`,data:[{name:`Математический анализ`,value:92,color:`var(--chart-success)`},{name:`Программирование`,value:78,color:`var(--chart-warning)`},{name:`Физика`,value:45,color:`var(--chart-danger)`}]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12},children:`Базовый Donut Chart`}),(0,l.jsx)(i,{type:`donut`,title:`Статус заданий`,height:260,data:[{name:`Выполнено`,value:8,color:`var(--chart-success)`},{name:`Просрочено`,value:2,color:`var(--chart-danger)`},{name:`В процессе`,value:5,color:`var(--chart-info)`}]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12},children:`Компонент GradesChart (Успеваемость)`}),(0,l.jsx)(c,{grades:d})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{style:{marginBottom:12},children:`Компонент AssignmentsDonut (Задачи)`}),(0,l.jsx)(o,{assignments:f,grades:d})]})]}),p.__docgenInfo={description:``,methods:[],displayName:`Variants`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <div style={{
  padding: 24,
  display: 'grid',
  gap: 32
}}>
    <h2>Charts — варианты</h2>
    
    <div>
      <h3 style={{
      marginBottom: 12
    }}>Базовый Bar Chart (Horizontal)</h3>
      <Chart type="bar" layout="horizontal" valueLabel="Оценка" data={[{
      name: 'Математический анализ',
      value: 92,
      color: 'var(--chart-success)'
    }, {
      name: 'Программирование',
      value: 78,
      color: 'var(--chart-warning)'
    }, {
      name: 'Физика',
      value: 45,
      color: 'var(--chart-danger)'
    }]} />
    </div>

    <div>
      <h3 style={{
      marginBottom: 12
    }}>Базовый Donut Chart</h3>
      <Chart type="donut" title="Статус заданий" height={260} data={[{
      name: 'Выполнено',
      value: 8,
      color: 'var(--chart-success)'
    }, {
      name: 'Просрочено',
      value: 2,
      color: 'var(--chart-danger)'
    }, {
      name: 'В процессе',
      value: 5,
      color: 'var(--chart-info)'
    }]} />
    </div>

    <div>
      <h3 style={{
      marginBottom: 12
    }}>Компонент GradesChart (Успеваемость)</h3>
      <GradesChart grades={mockGrades} />
    </div>

    <div>
      <h3 style={{
      marginBottom: 12
    }}>Компонент AssignmentsDonut (Задачи)</h3>
      <AssignmentsDonut assignments={mockAssignments} grades={mockGrades} />
    </div>
  </div>`,...p.parameters?.docs?.source}}},m=[`Variants`]}))();export{p as Variants,m as __namedExportsOrder,u as default};