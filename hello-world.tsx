import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

const HelloWorld = ({name}: {name: string}) => (<h1>Hello {name}! Welcome to MetaCall Hub.</h1>);

export function webApp(name: string) {
  return ReactDOMServer.renderToStaticMarkup(<HelloWorld name={name} />)
}
