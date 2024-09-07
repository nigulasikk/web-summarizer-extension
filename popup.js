document.addEventListener('DOMContentLoaded', function() {
  const summarizeButton = document.getElementById('summarize');
  const summaryDiv = document.getElementById('summary');

  summarizeButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "getSummary"});
    });
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "updateSummary") {
      summaryDiv.textContent = message.summary;
    } else if (message.action === "summaryComplete") {
      summarizeButton.disabled = false;
    } else if (message.action === "showError") {
      summaryDiv.textContent = message.error;
      summarizeButton.disabled = false;
    }
  });
});