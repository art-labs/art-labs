function copyText() {
    var ele = document.getElementsByClassName("text");
    var text = '';
    for(item in ele){
        text += item;
    }
    var textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    textarea.setAttribute('id', 'texts');
    document.body.appendChild(textarea);
    var copy = document.getElementById("texts");
    copy.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
} 