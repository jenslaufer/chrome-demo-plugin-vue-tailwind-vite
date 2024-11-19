
// const iframe = document.createElement("iframe");
// iframe.style.width = "100%";
// iframe.style.height = "5%";
// iframe.src = chrome.runtime.getURL("index.html#/frame");
// document.body.appendChild(iframe);


//let myMessage = "...";
//chrome.extension.sendRequest({ message: myMessage }, function (response) { });

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received in background script:', message);
    if (message.action === 'getContent') {
        const elements = document.querySelectorAll('h2');
        const texts = Array.from(elements).map(h2 => h2.textContent);
        sendResponse({ success: true, content: texts });
    } else {
        sendResponse({ success: false, error: 'Unknown action' });
    }
    return true;
});


const iframe = document.createElement('iframe');
iframe.src = chrome.runtime.getURL('index.html#/frame');
iframe.style.position = 'fixed';
//iframe.style.top = '0';
//iframe.style.left = '0';
iframe.style.width = '100%';
iframe.style.height = '100%';
//iframe.style.border = 'none';
//iframe.style.zIndex = '1000';
document.body.insertBefore(iframe, document.body.firstChild);

