/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const paragraph = document.querySelector("p");
const textArr = paragraph.innerText.split(" ");
let wordCount = 0;
const spanedArr = textArr.map(word => {
  wordCount++;
  let wordLength = word.length;
  if(word.match(".")) wordLength--;
  if(word.match(",")) wordLength--;
  if(word.match("!")) wordLength--;
  if(word.match(/\?/)) wordLength--;
  if(wordLength > 8) {
    return `<span class='eightLong'>${word}</span>`;
  }
  return word;
});

paragraph.innerHTML = spanedArr.join(" ");
const longWords = paragraph.querySelectorAll(".eightLong");
longWords.forEach(longWord => {
  longWord.style.backgroundColor = "yellow";
});
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const lineBreak = document.createElement("br");
const link = document.createElement("a");
link.setAttribute("href", "http://officeipsum.com/");
link.innerText = "Source";
paragraph.appendChild(lineBreak);
paragraph.appendChild(link);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
const paragraph2 = paragraph.innerHTML;
paragraph.innerHTML = "";
const sentences = [];
let container = '';
for(let i = 0; i < paragraph2.length; i++) {
  container += paragraph2[i];
  if(paragraph2[i] === '.' && `${paragraph2[i + 1]}${paragraph2[i + 2]}${paragraph2[i + 3]}` !== "com") {
    sentences.push(container);
    container = '';
  } else if(i === paragraph2.length - 1) {
    sentences.push(container);
    container = '';
  }
}

sentences.forEach(sentence => {
  const p = document.createElement("p");
  p.innerHTML = sentence;
  paragraph.appendChild(p);
});

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCountNode = document.createElement("h2");
wordCountNode.innerText = `Word count: ${wordCount}`;
document.querySelector("body").insertBefore(wordCountNode, paragraph);


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲)
*/
const paragraph3 = paragraph.childNodes;
console.log(paragraph3);
paragraph3.forEach(p => {
  p.innerHTML = p.innerHTML.replace("?", "🤔");
  p.innerHTML = p.innerHTML.replace("!", "😲");
});

