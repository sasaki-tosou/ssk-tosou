/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents, setHtmlAttributes }) => {
  // HTMLのlang属性を設定
  setHtmlAttributes({ lang: "ja" });

  // DocsBotのスクリプトをbodyタグの終了直前に追加
  setPostBodyComponents([
    <script
      key="docsbot"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          window.DocsBotAI=window.DocsBotAI||{},DocsBotAI.init=function(c){return new Promise(function(e,o){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://widget.docsbot.ai/chat.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),t.addEventListener("load",function(){window.DocsBotAI.mount({id:c.id,supportCallback:c.supportCallback,identify:c.identify,options:c.options,signature:c.signature});var t;t=function(n){return new Promise(function(e){if(document.querySelector(n))return e(document.querySelector(n));var o=new MutationObserver(function(t){document.querySelector(n)&&(e(document.querySelector(n)),o.disconnect())});o.observe(document.body,{childList:!0,subtree:!0})})},t&&t("#docsbotai-root").then(e).catch(o)}),t.addEventListener("error",function(t){o(t.message)})})};
          DocsBotAI.init({id: "2Uhgb5nD9Pb523gkIyc1/MFW6KuiFdcX37EIVBTTP"});
        `,
      }}
    />,
  ]);
};

