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

  // 環境変数からChatbotのIDを取得
  const chatbotid = process.env.CHATBOT_ID;
  const chatbotid2 = process.env.CHATBOT_ID_2;

  setPostBodyComponents([
    <script
      key="chatbase-config"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          window.embeddedChatbotConfig = {
            chatbotId: "${chatbotid}",
            domain: "www.chatbase.co"
          }
        `,
      }}
    />,
    <script
      key="chatbase-script"
      src="https://www.chatbase.co/embed.min.js"
      chatbotid={chatbotid}
      domain="www.chatbase.co"
      defer
    />,
    <script
      key="new-chatbase-config"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          window.embeddedChatbotConfig = {
            chatbotId: "${chatbotid2}",
            domain: "www.chatbase.co"
          }
        `,
      }}
    />,
    <script
      key="new-chatbase-script"
      src="https://www.chatbase.co/embed.min.js"
      chatbotid={chatbotid2}
      domain="www.chatbase.co"
      defer
    />,
  ]);
};

