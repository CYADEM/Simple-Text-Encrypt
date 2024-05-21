const abc = "abcdefghijklmnopqrstuvwxyz";

function encrypt() {
      const text = document.querySelector('textarea').value;
      var letter = "";
      var newText = "";
      for (var a = 0; a < text.length; a++) {
            var c = 0;
            letter = text[a].toLowerCase();
            for (var b = 0; b < abc.length; b++) {
                  if (letter == abc[b]) {
                        c = (b + 2) % 26;
                        break;
                  }
            }
            newText += (c == 0 ? letter : abc[c]);
      }
      document.querySelector('textarea').value = newText;
}

function copy() {
      const text = document.querySelector('textarea').value;
      if (text.length < 1) {
            alert("Text was not encrypted yet.");
      } else {
            navigator.clipboard.writeText();
            alert("Text successfully copied.");
      }
}