chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "summarize") {
    summarizeContent(message.content);
  }
});

async function summarizeContent(content) {
  try {
    const response = await fetch('http://127.0.0.1:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen2',
        prompt: `请总结以下内容:\n\n${content}\n\n总结:`,
        stream: true
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    let decoder = new TextDecoder();
    let summary = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');
      for (const line of lines) {
        if (line.trim() !== '') {
          const parsedLine = JSON.parse(line);
          if (parsedLine.response) {
            summary += parsedLine.response;
            chrome.runtime.sendMessage({ action: "updateSummary", summary: summary });
          }
        }
      }
    }

    chrome.runtime.sendMessage({ action: "summaryComplete" });
  } catch (error) {
    console.error('Error:', error);
    chrome.runtime.sendMessage({ action: "showError", error: `获取总结时出错: ${error.message}` });
  }
}