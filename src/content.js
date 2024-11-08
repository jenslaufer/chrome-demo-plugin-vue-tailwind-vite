// const btn = document.createElement("BUTTON")
// const t = document.createTextNode("CLICK ME");
// btn.appendChild(t);

// document.body.appendChild(btn);

const iframe = document.createElement("iframe");
//iframe.style.display = "none";
iframe.src = chrome.extension.getUrl("index.html/#/frame");
document.body.appendChild(iframe);