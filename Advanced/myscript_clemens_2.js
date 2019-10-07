$("a").prop("href", "http://www.codefactory.wien/");

$("code").css("color", "red");

// Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element

$("ol > li").css("background-color", "#2a7b90");

// Within the form, change the placeholder text to "Express your opinion"

$("textarea").val("Express your opinion....");

// Replace all images on the page with this one "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png"

$("img").prop("src", "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_960_720.jpg");

// Change the background color to orange for all blockquote elements and the font-style to italic

$("blockquote").css({"background-color":"orange", "font-style":"italic"});

// At the top of the page, change the logo color "Simple" to black and "Blog" to white

$("#logo").css("color", "black");
$("#logo > span").css("color", "white");

// 8. Remove the "Oct 01, 2006" Date from the page

$(".date").remove();

// 9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"

var newItem = $('<li><a href="http://all-free-download.com/free-website-templates/">New Templates</a></li><li><a href="http://all-free-download.com/free-website-templates/">Order Template</a></li><li><a href="http://all-free-download.com/free-website-templates/">Contact Us</a></li>'); // definition of the new element
$('.sidemenu').append(newItem); 
// insert the new element before the <li> tag

// 10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."

$("#sidebar > p").replaceWith("I want a programming language in which I need only to say what I wish, and done', give him a lollipop."); 
