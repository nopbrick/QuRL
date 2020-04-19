chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    let qr = new QRCode(document.getElementById("qrCode"));
    qr.makeCode(url);
});
