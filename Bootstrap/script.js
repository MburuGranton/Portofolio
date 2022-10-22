AOS.init({
    duration: 1000,
});

var i = 0,
    typingText;
typingText = "Hello, world, I'm Granton. A web designer from Kenya."

function typing() {
    if (i < typingText.length) {
        document.getElementById("typingText").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typing, 100);
    }

}
typing();

var j = 0,
    secondText;
secondText = "I am a Frontend developer utilising code to build visually stunning platforms."

function typingSecondText() {
    if (j < secondText.length) {
        document.getElementById("secondTypedText").innerHTML += secondText.charAt(j);
        j++;
        setTimeout(typingSecondText, 400)

    }
}
typingSecondText();