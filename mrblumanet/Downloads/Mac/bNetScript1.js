//feel free to change anything in the below group of values.

var introParagraph = "Welcome to MrBlumaNet, the list of links for lots of laughs!<br>Liberating taste in cookery, culture, and community, we give you Mr. Bluma!";
//contents of first paragraph on website

var backToTopButton = "<a href=\"#top\" class=\"back\">Back to Top</a>";
//lengthy code for the "Back to Top" buttons

var quotes = [
	"\"This is your epic, your life, so choose the label you wear wisely.\"",
	"\"Race is a vage illusion\"",
	"\"A planner a day keeps the zero away!\"",
	"\"And that's why sometimes you'll hear stories on the news about two little boys who get lost in the woods and don't pay attention to all the wild, Black Death infected animals around them until it's too late.\""
];
//Mr. Bluma's quotes in an array

var linkToDicus = "MrBlumaDiscussion.html";
//link to discussion page



var breakEls = document.getElementsByClassName("divBreak");
for (var b = 0; b < breakEls.length; b++) {
	breakEls[b].innerHTML = "<p><br></p>";
} //gives <div class="break"></div> its value

var intro = document.getElementById("introp");
intro.innerHTML = introParagraph;
//gives first paragraph its value

var tocLink = document.querySelectorAll("ol a");
for (var i = 0; i < tocLink.length; i++) {
	tocLink[i].class = "ToC";
} //gives all table of contents links the "ToC" class, though the class doesn't seem to do anything...

var topperEls = document.getElementsByClassName("topper");
for (var t = 0; t < topperEls.length; t++) {
	topperEls[t].innerHTML = backToTopButton;
} //gives value to "Back to Top" links

var quoteEls = document.getElementsByClassName("quote");
for (var q = 0; q < quotes.length; q++) {
	quoteEls[q].innerHTML = quotes[q];
} //gives quotes values

var linkDiscus = document.getElementById("linkDiscus");
linkDiscus.innerHTML = "<a href=\"" + linkToDiscus + "\">The Discussion Page</a>";
//gives discussion link a value