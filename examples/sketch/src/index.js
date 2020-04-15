/* eslint-disable react/jsx-filename-extension */
/* globals context */
import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import {
  width as styledWidth, position, space, height as styledHeight,
} from 'styled-system';
import {
  render, Document, Page, Artboard, RedBox, View
} from 'react-sketchapp';
import chroma from 'chroma-js';
import { MDXProvider } from '@mdx-js/react';

import {
  styled, ThemeProvider, Box, Text, Row,
} from 'elemental-react';

import { Button, ButtonDanger, ButtonOutline, ButtonPrimary, ButtonGroup } from '../../../src/buttons';
import { Avatar, AvatarPair } from '../../../src/avatars';

import mdComponents from './i18n/components';
import theme from './styles/theme';

import Test from './docs/test';

const StyledText = styled(Text)`
  color: blue;
`;

const Screen = styled(Artboard)`
  ${styledWidth}
  ${position}
  ${space}
  ${styledHeight}
`;

Screen.defaultProps = {
  width: 360,
  position: 'relative',
  ml: 0,
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true, error };
  // }

  componentDidCatch(error, info) {
    this.setState({
      error,
      hasError: true,
    });
    // You can also log the error to an error reporting service
    console.log(`
      ${JSON.stringify(error, null, 2)}\n
      ${JSON.stringify(info, null, 2)}
    `);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;
    const { error, hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return <RedBox error={error} />;
    }

    return children;
  }
}

// take a hex and give us a nice text color to put over it
const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

const SwatchTile = styled.View`
  height: 250px;
  width: 250px;
  border-radius: 125px;
  margin: 4px;
  background-color: ${props => props.hex};
  justify-content: center;
  align-items: center;
`;

const SwatchName = styled.Text`
  color: ${props => textColor(props.hex)};
  font-size: 32px;
  font-weight: bold;
`;

const Ampersand = styled.Text`
  color: ${props => textColor(props.hex)};
  font-size: 120px;
  font-family: Himalaya;
  line-height: 144px;
`;

const Swatch = ({ name, hex }) => (
  <Box mr={3}>
    <SwatchTile name={`Swatch ${name}`} hex={hex}>
      <Ampersand hex={hex}>&</Ampersand>
    </SwatchTile>
    <Box mt={3} center maxWidth={250}>
      <Text color="greys.8" fontSize={32} mb={2} name="Swatch Name">
        {name}
      </Text>
      <Text color="greys.8" fontSize={32} name="Swatch Hex">
        {hex}
      </Text>
    </Box>
  </Box>
);

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Swatch.propTypes = Color;


const DocumentContainer = ({ colors }) => (
  <Document>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <MDXProvider components={mdComponents}>
          <>
            <Page name="Docs">
              <Artboard>
                <Test />
              </Artboard>
            </Page>
            <Page name="Style Guide">
              <Artboard name="Buttons">
                <Row>
                  <Button m={2}>
                    Button
                  </Button>
                  <ButtonDanger m={2}>
                    Button Danger
                  </ButtonDanger>
                  <ButtonOutline m={2}>
                    Button Outline
                  </ButtonOutline>
                  <ButtonPrimary m={2}>
                    Button Primary
                  </ButtonPrimary>
                </Row>
                {['hover', 'focus', 'active'].map(pseudoState => (
                  <Row key={pseudoState}>
                    {[{
                      label: 'Button', component: Button,
                    }, {
                      label: 'Button Danger', component: ButtonDanger,
                    }, {
                      label: 'Button Outline', component: ButtonOutline,
                    }, {
                      label: 'Button Primary', component: ButtonPrimary,
                    }].map(({ label, component: Button_ }) => (
                      <Button_ m={2} pseudoState={pseudoState}>
                        {label}
                      </Button_>
                    ))}
                  </Row>
                ))}
                <ButtonGroup p={2}>
                  <Button>
                    Button
                  </Button>
                  <ButtonDanger>
                    Button Danger
                  </ButtonDanger>
                  <ButtonOutline>
                    Button Outline
                  </ButtonOutline>
                  <ButtonPrimary>
                    Button Primary
                  </ButtonPrimary>
                </ButtonGroup>
                <Box>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 6,
                      borderTopLeftRadius: 12,
                      borderBottomLeftRadius: 12,
                      borderTopRightRadius: 12,
                      borderBottomRightRadius: 12,
                      borderRightWidth: 0,
                      borderLeftWidth: 2,
                      borderTopWidth: 2,
                      borderBottomWidth: 2,
                      borderColor: 'green',
                      backgroundColor: 'blue',
                    }}
                  />
                </Box>
              </Artboard>
            </Page>
            <Page name="Avatar">
              <Box>
                <Avatar mb={4} boxShadow="rgba(255, 255, 255, 0.8) -2px -2px 0px" src="https://avatars.githubusercontent.com/primer" size={128} />
                <AvatarPair my={4}>
                  <Avatar src="https://avatars.githubusercontent.com/primer" />
                  <Avatar src="https://avatars.githubusercontent.com/primer" />
                </AvatarPair>
              </Box>
            </Page>
          </>
        </MDXProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </Document>
);

Document.propTypes = {
  colors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default () => {
  const data = context.document.documentData();
  const pages = context.document.pages();
  render(<DocumentContainer colors={theme.colors} />);
  data.setCurrentPage(pages.firstObject());
};
