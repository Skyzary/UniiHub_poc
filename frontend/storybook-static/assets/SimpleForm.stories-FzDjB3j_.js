import{i as e}from"./preload-helper-usAeo7Bx.js";import{O as t,t as n}from"./iframe-Dh6N6rC6.js";import{n as r,t as i}from"./SimpleButton-D_UBWkUJ.js";import{n as a,t as o}from"./SimpleInput-Bf23odKP.js";import{n as s,t as c}from"./SimpleForm-BQVAXeII.js";var l,u,d,f,p,m;e((()=>{t(),s(),a(),r(),l=n(),u={title:`Components/SimpleForm`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{action:{action:`action`},onData:{action:`onData`},variant:{control:{type:`select`},options:[`simple`,`card`],description:`Внешний вид формы`}}},d={args:{variant:`simple`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{type:`text`,name:`username`,placeholder:`Enter your username`,required:!0}),(0,l.jsx)(o,{type:`password`,name:`password`,placeholder:`Enter your password`,required:!0}),(0,l.jsx)(i,{variant:`primary`,size:`medium`,type:`submit`,children:`Login`})]}),style:{width:`300px`}}},f={args:{variant:`simple`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{type:`email`,name:`email`,placeholder:`Email address`,required:!0}),(0,l.jsx)(o,{type:`text`,name:`subject`,placeholder:`Subject`}),(0,l.jsx)(i,{variant:`primary`,size:`medium`,type:`submit`,children:`Send Message`})]}),style:{gap:`var(--gap-large)`,width:`400px`}}},p={args:{variant:`card`,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`h3`,{style:{margin:`0 0 var(--margin-small) 0`,fontFamily:`var(--font-family-heading)`,fontSize:`var(--font-xxl)`,fontWeight:`var(--font-weight-bold)`,lineHeight:`1.2`},children:`Subscribe`}),(0,l.jsx)(`p`,{style:{margin:`0 0 var(--margin-medium) 0`,fontFamily:`var(--font-family-regular)`,fontSize:`var(--font-md)`,fontWeight:`var(--font-weight-regular)`,lineHeight:`1.5`},children:`Get our latest news delivered to your inbox.`}),(0,l.jsx)(o,{type:`email`,name:`newsletter_email`,placeholder:`Your email address`,required:!0}),(0,l.jsx)(i,{variant:`primary`,size:`medium`,type:`submit`,children:`Subscribe`})]}),style:{width:`350px`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'simple',
    children: <>
        <SimpleInput type="text" name="username" placeholder="Enter your username" required />
        <SimpleInput type="password" name="password" placeholder="Enter your password" required />
        <SimpleButton variant="primary" size="medium" type="submit">
          Login
        </SimpleButton>
      </>,
    style: {
      width: '300px'
    } as React.CSSProperties
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'simple',
    children: <>
        <SimpleInput type="email" name="email" placeholder="Email address" required />
        <SimpleInput type="text" name="subject" placeholder="Subject" />
        <SimpleButton variant="primary" size="medium" type="submit">
          Send Message
        </SimpleButton>
      </>,
    style: {
      gap: 'var(--gap-large)',
      width: '400px'
    } as React.CSSProperties
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    children: <>
        <h3 style={{
        margin: '0 0 var(--margin-small) 0',
        fontFamily: 'var(--font-family-heading)',
        fontSize: 'var(--font-xxl)',
        fontWeight: 'var(--font-weight-bold)',
        lineHeight: '1.2'
      }}>
          Subscribe
        </h3>
        <p style={{
        margin: '0 0 var(--margin-medium) 0',
        fontFamily: 'var(--font-family-regular)',
        fontSize: 'var(--font-md)',
        fontWeight: 'var(--font-weight-regular)',
        lineHeight: '1.5'
      }}>
          Get our latest news delivered to your inbox.
        </p>
        <SimpleInput type="email" name="newsletter_email" placeholder="Your email address" required />
        <SimpleButton variant="primary" size="medium" type="submit">
          Subscribe
        </SimpleButton>
      </>,
    style: {
      width: '350px'
    } as React.CSSProperties
  }
}`,...p.parameters?.docs?.source}}},m=[`Simple`,`CustomGap`,`CardForm`]}))();export{p as CardForm,f as CustomGap,d as Simple,m as __namedExportsOrder,u as default};