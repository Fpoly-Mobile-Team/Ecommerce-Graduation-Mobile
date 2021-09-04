import {Block} from '@components';
import React from 'react';
import {Platform} from 'react-native';
import WebView from 'react-native-webview';

const WEBView = ({data, style, scrollEnabled = true}) => {
  return (
    <Block flex style={style}>
      <WebView
        androidLayerType="hardware"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        startInLoadingState={true}
        scalesPageToFit={false}
        useWebKit={true}
        originWhitelist={['*']}
        source={{
          baseUrl: '',
          html: `
          <html>
          <head>
            <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'>
            ${styles}
          </head>
          <body> 
              ${data}
          </body>
          </html>`,
        }}
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
      />
    </Block>
  );
};

export default WEBView;

// const fileUri = Platform.select({
//   ios: 'Quicksand-Regular.ttf',
//   android: 'file:///android_asset/fonts/Quicksand-Regular.ttf',
// });

const fileUri = Platform.select({
  ios: 'Roboto',
  android: '-apple-system',
});

const styles = `<style type="text/css">
  @font-face {
    font-family: 'Quicksand-Regular';
    src: local('Quicksand-Regular'), url('${fileUri}') format("truetype");
  }
  * {
    font-size: 16px;
    text-align: justify;
    line-height: 1.5;
    font-family: Quicksand-Regular;
  }
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 10px auto;
    border-radius: 10px;
  }
  p, figure {
    padding: 0;
    margin: 0;
  }
</style>`;
