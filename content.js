chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getSummary") {
    const pageContent = document.body.innerText;
    chrome.runtime.sendMessage({ action: "summarize", content: pageContent });
  }
});