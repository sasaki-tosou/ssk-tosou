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

  // 環境変数からDocsBotのIDを取得
  const docsBotId = process.env.DOCSBOT_ID;

  // DocsBotのスクリプトをbodyタグの終了直前に追加
  setPostBodyComponents([
    <script key="embeddedChatbotConfig" dangerouslySetInnerHTML={{
      __html: `
        window.embeddedChatbotConfig = {
          chatbotId: "${docsBotId}",
          domain: "www.chatbase.co"
        }`
    }} />,
    <script
      key="chatbaseEmbedScript"
      src="https://www.chatbase.co/embed.min.js"
      chatbotId={docsBotId}
      domain="www.chatbase.co"
      defer
    />
  ]);
};
