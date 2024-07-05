function copyToClipboard(textToCopy, popupId) {


    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);


    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");


    document.body.removeChild(tempTextArea);
    alert("Copied");
}
