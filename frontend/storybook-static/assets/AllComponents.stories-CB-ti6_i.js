import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{O as n,t as r}from"./iframe-Dh6N6rC6.js";import{n as i,t as a}from"./Chart-BVl0ocbn.js";import{n as o,r as s,t as c}from"./GradeSimulator-Tw-L50qw.js";import{n as l,t as u}from"./SimpleButton-D_UBWkUJ.js";import{n as d,t as f}from"./SimpleInput-Bf23odKP.js";import{n as p,t as m}from"./CheckBox-rUTgdVob.js";import{n as h,t as g}from"./RadioButton-Bx2pmgcO.js";import{n as _,t as v}from"./FileInput-DPoCcuCZ.js";import{n as y,t as b}from"./SimpleDateTime-BSfehVMv.js";import{n as x,t as S}from"./CustomDateTime-B8TP9TEg.js";import{n as C,t as w}from"./SimpleForm-BQVAXeII.js";var T,E,D,O,k,A,j,M;t((()=>{T=e(n(),1),l(),d(),_(),x(),y(),p(),h(),i(),C(),s(),E=r(),D=[{course_name:`Математический анализ`,grade:`92.00`,rawgrade:92},{course_name:`Программирование`,grade:`78.00`,rawgrade:78},{course_name:`Физика`,grade:`45.00`,rawgrade:45}],O=[{id:1,courseName:`Математический анализ`,name:`Экзаменационная контрольная работа`,duedate:Math.floor(Date.now()/1e3)+86400*5,description:``},{id:2,courseName:`Математический анализ`,name:`Индивидуальное домашнее задание 2`,duedate:Math.floor(Date.now()/1e3)+86400*10,description:``},{id:3,courseName:`Программирование`,name:`Финальный проект по курсу`,duedate:Math.floor(Date.now()/1e3)+86400*3,description:``}],k={title:`Slides/All Components`,tags:[`autodocs`]},A=({label:e,children:t})=>(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,minWidth:180},children:[(0,E.jsx)(`div`,{style:{fontSize:12,color:`var(--text-secondary)`},children:e}),(0,E.jsx)(`div`,{children:t})]}),j=()=>{let[e,t]=(0,T.useState)(new Date),[n,r]=(0,T.useState)(new Date),[i,s]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{style:{padding:24,display:`grid`,gridTemplateColumns:`repeat(2,1fr)`,gap:24,alignItems:`start`},children:[(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{children:`Buttons`}),(0,E.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,E.jsx)(A,{label:`Primary`,children:(0,E.jsx)(u,{variant:`primary`,size:`medium`,children:`Primary`})}),(0,E.jsx)(A,{label:`Secondary`,children:(0,E.jsx)(u,{variant:`secondary`,size:`medium`,children:`Secondary`})}),(0,E.jsx)(A,{label:`Large`,children:(0,E.jsx)(u,{variant:`primary`,size:`large`,children:`Large`})}),(0,E.jsx)(A,{label:`Small`,children:(0,E.jsx)(u,{variant:`primary`,size:`small`,children:`Small`})}),(0,E.jsx)(A,{label:`Link`,children:(0,E.jsx)(u,{variant:`primary`,size:`medium`,isLink:!0,href:`#`,children:`Link`})}),(0,E.jsx)(A,{label:`Transparent`,children:(0,E.jsx)(u,{variant:`primary`,size:`medium`,isTransparent:!0,children:`Transparent`})})]})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{children:`Inputs`}),(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,E.jsx)(A,{label:`Primary`,children:(0,E.jsx)(f,{variant:`primary`,size:`medium`,placeholder:`Primary`})}),(0,E.jsx)(A,{label:`Secondary`,children:(0,E.jsx)(f,{variant:`secondary`,size:`medium`,placeholder:`Secondary`})}),(0,E.jsx)(A,{label:`Large`,children:(0,E.jsx)(f,{variant:`primary`,size:`large`,placeholder:`Large`})}),(0,E.jsx)(A,{label:`Small`,children:(0,E.jsx)(f,{variant:`primary`,size:`small`,placeholder:`Small`})}),(0,E.jsx)(A,{label:`Transparent`,children:(0,E.jsx)(f,{variant:`primary`,size:`medium`,isTransparent:!0,placeholder:`Transparent`})}),(0,E.jsx)(A,{label:`Disabled`,children:(0,E.jsx)(f,{variant:`primary`,size:`medium`,disabled:!0,placeholder:`Disabled`})})]})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{children:`File Input`}),(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,E.jsx)(A,{label:`Default`,children:(0,E.jsx)(v,{label:`Upload`})}),(0,E.jsx)(A,{label:`Disabled`,children:(0,E.jsx)(v,{label:`Upload`,disabled:!0})}),(0,E.jsx)(A,{label:`Error`,children:(0,E.jsx)(v,{label:`Upload`,error:`File too big`})})]})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{children:`Date / Time`}),(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,E.jsx)(A,{label:`CustomDateTime`,children:(0,E.jsx)(S,{selected:e,onChange:t})}),(0,E.jsx)(A,{label:`SimpleDateTime`,children:(0,E.jsx)(b,{selected:n,onChange:r})})]})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{children:`Checkbox / Radio`}),(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,E.jsx)(A,{label:`Checkbox (unchecked)`,children:(0,E.jsx)(m,{variant:`primary`,checked:!1,readOnly:!0})}),(0,E.jsx)(A,{label:`Checkbox (checked)`,children:(0,E.jsx)(m,{variant:`primary`,checked:!0,readOnly:!0})}),(0,E.jsx)(A,{label:`Radio (unchecked)`,children:(0,E.jsx)(g,{variant:`primary`,checked:!1,readOnly:!0})}),(0,E.jsx)(A,{label:`Radio (checked)`,children:(0,E.jsx)(g,{variant:`primary`,checked:!0,readOnly:!0})})]})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{children:`Charts`}),(0,E.jsx)(a,{type:`donut`,title:`Статус заданий`,height:220,data:[{name:`Выполнено`,value:8,color:`var(--chart-success)`},{name:`Просрочено`,value:2,color:`var(--chart-danger)`},{name:`В процессе`,value:5,color:`var(--chart-info)`}]})]}),(0,E.jsxs)(`div`,{children:[(0,E.jsx)(`h2`,{children:`Grade Simulator («Что, если?»)`}),(0,E.jsx)(A,{label:`Нажмите для открытия симулятора`,children:(0,E.jsx)(o,{onOpen:()=>s(!0)})}),(0,E.jsx)(c,{open:i,onClose:()=>s(!1),grades:D,assignments:O})]}),(0,E.jsxs)(`div`,{style:{gridColumn:`1 / -1`},children:[(0,E.jsx)(`h2`,{children:`Forms`}),(0,E.jsx)(A,{label:`SimpleForm`,children:(0,E.jsxs)(w,{onData:e=>console.log(`form data`,e),style:{maxWidth:520},children:[(0,E.jsx)(f,{name:`name`,placeholder:`Name`}),(0,E.jsx)(f,{name:`email`,placeholder:`Email`}),(0,E.jsx)(u,{variant:`primary`,size:`medium`,type:`submit`,children:`Submit`})]})})]})]})},j.__docgenInfo={description:``,methods:[],displayName:`All`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [customDate, setCustomDate] = useState<Date | null>(new Date());
  const [simpleDate, setSimpleDate] = useState<Date | null>(new Date());
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  return <div style={{
    padding: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    gap: 24,
    alignItems: 'start'
  }}>
      <div>
        <h2>Buttons</h2>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <Labelled label="Primary">
            <SimpleButton variant="primary" size="medium">
              Primary
            </SimpleButton>
          </Labelled>
          <Labelled label="Secondary">
            <SimpleButton variant="secondary" size="medium">
              Secondary
            </SimpleButton>
          </Labelled>
          <Labelled label="Large">
            <SimpleButton variant="primary" size="large">
              Large
            </SimpleButton>
          </Labelled>
          <Labelled label="Small">
            <SimpleButton variant="primary" size="small">
              Small
            </SimpleButton>
          </Labelled>
          <Labelled label="Link">
            <SimpleButton variant="primary" size="medium" isLink href="#">
              Link
            </SimpleButton>
          </Labelled>
          <Labelled label="Transparent">
            <SimpleButton variant="primary" size="medium" isTransparent>
              Transparent
            </SimpleButton>
          </Labelled>
        </div>
      </div>

      <div>
        <h2>Inputs</h2>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Labelled label="Primary">
            <SimpleInput variant="primary" size="medium" placeholder="Primary" />
          </Labelled>
          <Labelled label="Secondary">
            <SimpleInput variant="secondary" size="medium" placeholder="Secondary" />
          </Labelled>
          <Labelled label="Large">
            <SimpleInput variant="primary" size="large" placeholder="Large" />
          </Labelled>
          <Labelled label="Small">
            <SimpleInput variant="primary" size="small" placeholder="Small" />
          </Labelled>
          <Labelled label="Transparent">
            <SimpleInput variant="primary" size="medium" isTransparent placeholder="Transparent" />
          </Labelled>
          <Labelled label="Disabled">
            <SimpleInput variant="primary" size="medium" disabled placeholder="Disabled" />
          </Labelled>
        </div>
      </div>

      <div>
        <h2>File Input</h2>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Labelled label="Default">
            <FileInput label="Upload" />
          </Labelled>
          <Labelled label="Disabled">
            <FileInput label="Upload" disabled />
          </Labelled>
          <Labelled label="Error">
            <FileInput label="Upload" error="File too big" />
          </Labelled>
        </div>
      </div>

      <div>
        <h2>Date / Time</h2>
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
      </div>

      <div>
        <h2>Checkbox / Radio</h2>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Labelled label="Checkbox (unchecked)">
            <CheckBox variant="primary" checked={false} readOnly />
          </Labelled>
          <Labelled label="Checkbox (checked)">
            <CheckBox variant="primary" checked readOnly />
          </Labelled>
          <Labelled label="Radio (unchecked)">
            <RadioButton variant="primary" checked={false} readOnly />
          </Labelled>
          <Labelled label="Radio (checked)">
            <RadioButton variant="primary" checked readOnly />
          </Labelled>
        </div>
      </div>

      <div>
        <h2>Charts</h2>
        <Chart type="donut" title="Статус заданий" height={220} data={[{
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
        <h2>Grade Simulator («Что, если?»)</h2>
        <Labelled label="Нажмите для открытия симулятора">
          <GradeSimulatorTrigger onOpen={() => setIsSimulatorOpen(true)} />
        </Labelled>
        <GradeSimulator open={isSimulatorOpen} onClose={() => setIsSimulatorOpen(false)} grades={mockGrades} assignments={mockAssignments} />
      </div>

      <div style={{
      gridColumn: '1 / -1'
    }}>
        <h2>Forms</h2>
        <Labelled label="SimpleForm">
          <SimpleForm onData={d => console.log('form data', d)} style={{
          maxWidth: 520
        }}>
            <SimpleInput name="name" placeholder="Name" />
            <SimpleInput name="email" placeholder="Email" />
            <SimpleButton variant="primary" size="medium" type="submit">
              Submit
            </SimpleButton>
          </SimpleForm>
        </Labelled>
      </div>
    </div>;
}`,...j.parameters?.docs?.source}}},M=[`All`]}))();export{j as All,M as __namedExportsOrder,k as default};