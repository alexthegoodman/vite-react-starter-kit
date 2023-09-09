import ReactDOMServer from "react-dom/server";
import App from "./App";

import { ServerStyleSheet } from "styled-components";

const sheet = new ServerStyleSheet();

export function render() {
  try {
    const html = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    return html + styleTags;
  } catch (error) {
    // handle error
    console.error(error);
  } finally {
    sheet.seal();
  }
}
