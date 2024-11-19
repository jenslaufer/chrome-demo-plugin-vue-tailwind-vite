chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received in background script:', message);
    if (message.action === 'getContent') {
        const elements = document.querySelectorAll('h1');
        const texts = Array.from(elements).map(e => e.textContent);
        sendResponse({ success: true, content: texts });
    } else {
        sendResponse({ success: false, error: 'Unknown action' });
    }
    return true;
});


const iframe = document.createElement('iframe');
iframe.src = chrome.runtime.getURL('index.html#/frame');
iframe.style.top = '0';
iframe.style.left = '0';
iframe.style.width = '100%';
iframe.style.height = '10%';
iframe.style.border = 'none';
iframe.style.zIndex = '1000';
document.body.insertBefore(iframe, document.body.firstChild);

