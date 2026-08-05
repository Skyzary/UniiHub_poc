import{i as e}from"./preload-helper-usAeo7Bx.js";import{n as t,t as n}from"./Chart-BVl0ocbn.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r=[{name:`Математический анализ`,value:92,color:`var(--chart-success)`},{name:`Программирование`,value:78,color:`var(--chart-warning)`},{name:`Физика`,value:45,color:`var(--chart-danger)`},{name:`История науки`,value:88,color:`var(--chart-success)`}],i=[{name:`Выполнено`,value:8,color:`var(--chart-success)`},{name:`Просрочено`,value:2,color:`var(--chart-danger)`},{name:`В процессе`,value:5,color:`var(--chart-info)`}],a={title:`Components/Charts/Chart`,component:n,tags:[`autodocs`],argTypes:{type:{control:{type:`select`},options:[`bar`,`donut`]},layout:{control:{type:`select`},options:[`horizontal`,`vertical`]},animate:{control:{type:`boolean`}},showLegend:{control:{type:`boolean`}}}},o={args:{type:`bar`,layout:`horizontal`,data:r,valueLabel:`Оценка`,domain:[0,100]}},s={args:{type:`bar`,layout:`vertical`,data:r,valueLabel:`Оценка`,domain:[0,100],height:320}},c={args:{type:`donut`,data:i,title:`Статус заданий`,height:260}},l={args:{type:`bar`,data:[],emptyDescription:`Оценки не найдены`}},u={args:{type:`bar`,layout:`horizontal`,data:[{name:`Курс A`,value:70},{name:`Курс B`,value:55},{name:`Курс C`,value:90}]}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    layout: 'horizontal',
    data: barData,
    valueLabel: 'Оценка',
    domain: [0, 100]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    layout: 'vertical',
    data: barData,
    valueLabel: 'Оценка',
    domain: [0, 100],
    height: 320
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'donut',
    data: donutData,
    title: 'Статус заданий',
    height: 260
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    data: [],
    emptyDescription: 'Оценки не найдены'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'bar',
    layout: 'horizontal',
    data: [{
      name: 'Курс A',
      value: 70
    }, {
      name: 'Курс B',
      value: 55
    }, {
      name: 'Курс C',
      value: 90
    }]
  }
}`,...u.parameters?.docs?.source}}},d=[`HorizontalBar`,`VerticalBar`,`Donut`,`Empty`,`WithoutColors`]}))();export{c as Donut,l as Empty,o as HorizontalBar,s as VerticalBar,u as WithoutColors,d as __namedExportsOrder,a as default};