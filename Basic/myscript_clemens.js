/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
// $("p").css("background-color", "red");

// the p element with an ID of "intro"
// $("p#intro").css("background-color", "green");

// all elements with a class of "note"
// $(".note").css("background-color", "blue");

// all DIV elements with a class of note
// $("div.note").css("background-color", "salmon");

// all p elements in the article element
// $("article > p").css("background-color", "darkred");

// the last element in any section which is a p tag
// $("p:last-of-type").css("background-color", "orange");

// the first paragraph on the page
// $("p:first").css("background-color", "blue");

// all p elements which have a link
// $("p > [href]").css("background-color", "blue");

// the second li within nested ul element
// $("li:nth-child(2)").css("background-color", "blue");

// every second and third p element
// $("p:nth-of-type(2),p:nth-of-type(3)").css("background-color", "blue");