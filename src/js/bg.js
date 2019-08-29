const IPHONE_USER_AGENT =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25";

let popupWindowIds = [];

const rewriteUserAgentHeader = info => {
  info.requestHeaders
    .filter(header => header.name.toLowerCase() === "user-agent")
    .forEach(header => (header.value = IPHONE_USER_AGENT));
  return { requestHeaders: info.requestHeaders };
};

const spoofUserAgentInWindow = windowId => {
  chrome.webRequest.onBeforeSendHeaders.addListener(
    rewriteUserAgentHeader,
    { urls: ["<all_urls>"], windowId: windowId },
    ["blocking", "requestHeaders"]
  );
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const previewWindow = window.open(
    "",
    "_blank",
    "width=375,height=667,top=10,left=10"
  );

  chrome.windows.getCurrent(win => {
    if (!popupWindowIds.includes(win.id)) {
      spoofUserAgentInWindow(win.id);
      popupWindowIds.push(win.id);
    }
    previewWindow.location.href = message["url"];
  });
});
