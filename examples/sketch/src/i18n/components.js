/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */


import React from 'react';
import {
  ThemeProvider, Box, Row, Headline, Text, Line,
} from 'elemental-react';
import { Svg } from 'react-sketchapp';

import { Section } from '@elemental-design/style-guide';

import Code from '../components/Code';

const Circle = ({
  size, borderColor, borderRadius, borderWidth, bg, ...boxProps
}) => (
    <Box {...boxProps}>
      <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Svg.Circle cx={`${size / 2}`} cy={`${size / 2}`} r={`${size / 2}`} fill={bg} />
      </Svg>
    </Box>
  )

const BulletPoint = props => <Circle size={6} borderWidth="0.01px" bg="selected" mr={2} {...props} />;

const P = props => <Text color="selected" lineHeight="body" fontSize="body" fontFamily="primary" mb={2} {...props} />;
P.displayName = 'P';

const design = {
  Button: {
    outlined: true,
  },
  ButtonText: {
    textTransform: 'uppercase',
    fontFamily: 'primaries.medium',
  },
  H1: {
    fontFamily: 'secondary',
    mb: 2,
    fontSize: 32,
    lineHeight: 48,
  },
  H2: {
    fontFamily: 'primaries.semiBold',
    mb: 2,
  },
  H3: {
    fontFamily: 'secondary',
    mb: 2,
  },
  H4: {
    fontFamily: 'secondary',
    mb: 2,
  },
  H5: {
    fontFamily: 'secondary',
    mb: 2,
  },
  H6: {
    fontFamily: 'secondaries.semiBold',
    mb: 2,
  },
};

export default {
  wrapper({ children, color, title, description, ...otherProps }) {
    return (
      <ThemeProvider
        design={design}
        theme={props => ({
          ...props,
          colors: {
            ...props.colors,
            selected: color || props.colors.black,
          },
        })}
      >
        {/* <Section title={title} description={description}> */}
        <Box p={80} {...otherProps}>
          {title && (
            <Box borderWidth={false} borderBottomWidth={1} borderColor="rgb(225, 228, 232)" mb={3}>
              <Headline.H1>
                {title}
              </Headline.H1>
            </Box>
          )}
          {children}
        </Box>
        {/* </Section> */}
      </ThemeProvider>
    );
  },
  textgroup: ({ ...props }) => {
    return <Text {...props} />;
  },
  ul({ children, ...props }) {
    // console.log(JSON.stringify(children));
    return (
      <Box ml={3} {...props}>
        {children}
      </Box>
    );
  },
  ol: ({ children }) => {
    return <Box {...props}>{children}</Box>
  },
  div: Box,
  br: ({ children }) => <Text>{'\n'}</Text>,
  li({ children, ...props }) {
    // return (
    //   <Box>
    //     <Text>{'\u00B7'}</Text>
    //     <Box>
    //       {children}</Box>
    //   </Box>
    // )
    // console.dir(children);
    // console.dir(children);

    if (typeof children === 'string') {
      return (
        <Row alignItems="center" mb={2} {...props}>
          <BulletPoint />
          <P mb={0}>{children}</P>
        </Row>
      );
    }

    if (children.find((child) => {
      try {
        const { props: { originalType: type } } = child;
        return type === 'ul'
      } catch (err) {
        return false;
      }
    })) {
      return (children || []).map((child, i) => (
        typeof child === 'string' ? (
          <Row alignItems="center" mb={2} key={i} {...props}>
            <BulletPoint />
            <P mb={0}>
              {child}
            </P>
          </Row>
        ) : child
      ))
    }
    // console.dir(children);

    return Array.isArray(children) ? (
      <Row alignItems="center" mb={2} {...props}>
        <BulletPoint />
        {(children || []).map((child, i) => (
          typeof child === 'string' ? (
            <P mb={0} key={i}>
              {child}
            </P>
            // <Row alignItems="center" key={i} {...props}>
            //   <BulletPoint />
            //   <P>
            //     {child}
            //   </P>
            // </Row>
          ) : child
        ))}
      </Row>
    ) : null;
  },
  h1(props) {
    return <Headline level={1} color="selected" {...props} />;
  },
  h2(props) {
    return <Headline level={2} fontSize={24} lineHeight={36} color="selected" {...props} />;
  },
  h3(props) {
    return <Headline level={3} color="selected" {...props} />;
  },
  h4(props) {
    return <Headline level={4} color="selected" {...props} />;
  },
  h5(props) {
    return <Headline level={5} color="selected" {...props} />;
  },
  h6(props) {
    return <Headline level={6} color="selected" {...props} />;
  },
  p: P,
  text: P,
  strong(props) {
    return <P bold color={null} mb={0} {...props} />;
  },
  a(props) {
    return <P color="blue" mb={0} {...props} />;
  },
  inlineCode(props) {
    return <Code ml={1} mr={1} {...props} />;
  },
  code({ children, ...props }) {
    return (
      <Text fontFamily="Menlo" fontSize={14} lineHeight={20}>
        {children}
      </Text>
    )
  },
  pre({ children, ...props }) {
    // const fullScope = {
    //   mdx: createElement,
    //   Box,
    //   components,
    //   props,
    //   ...scope
    // }

    // const keys = Object.keys(fullScope)
    // const values = Object.values(fullScope)

    // const fn = new Function(
    //   '_fn',
    //   'React',
    //   ...keys,
    //   `${code}
      
    //     return React.createElement(Box, { components },
    //       React.createElement(MDXContent, props)
    //     );`
    //   `);

    // const App = fn({}, React, ...values);

    return (
      <Box bg="rgba(27,31,35,.1)" p={3}>
        {/* <App /> */}
        {children}
      </Box>
    );
  },
  table({ children, ...props }) {

    return (
      <Box>
        {children}
      </Box>
    );
  },
  thead({ children, ...props }) {
    return (
      <Box>
        {children}
      </Box>
    );
  },
  tbody({ children, ...props }) {
    // console.dir(children)
    return (
      <Box>
        {children}
      </Box>
    );
  },
  tr({ children, ...props }) {
    return (
      <Row>
        {children}
      </Row>
    );
  },
  td({ children, align, ...props }) {
    return (
      <Box
        alignItems={align === 'center' ? 'center' : undefined}
        width={200}
        py={2}
        px={3}
        borderWidth={1}
        borderColor="#ddd"
      >
        <Text>
          {children}
        </Text>
      </Box>
    );
  },
  th({ children, align, ...props }) {
    return (
      <Box
        alignItems={align === 'center' ? 'center' : undefined}
        width={200}
        py={2}
        px={3}
        borderWidth={1}
        borderColor="#ddd"
      >
        <Text>
          {children}
        </Text>
      </Box>
    );
  },
};
