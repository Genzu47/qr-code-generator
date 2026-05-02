const Head = document.querySelector(".Head");
qrInput = Head.querySelector(".TextBox input");
generateBtn = Head.querySelector(".TextBox button"),
qrImg = Head.querySelector(".QRCode img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    Head.classList.add("active");
});