var number_of_articles = 6
var articles = [{

   "article_id": "1",

   "description": "Banana",

   "type_of_food" : "fruit",

   "price" : "1€",

   "link_online" : "https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_960_720.png",

   "link": "https://www.billa.at/produkte/ja-natuerlich-bananen/00-402489",

   "number_of_stock" : 0,

}, {

   "article_id": "2",

   "description": "Apple",

   "type_of_food" : "fruit",

   "price" : "2€",

   "link_online" : "https://cdn.pixabay.com/photo/2016/11/18/13/47/apple-1834639_960_720.jpg",

   "link": "https://www.billa.at/produkte/pink-lady-apfel-tasse/00-89243",

   "" : 200,

}, {

    "article_id": "3",

   "description": "Orange",

   "type_of_food" : "fruit",

   "price" : "3€",

   "link_online" : "https://image.shutterstock.com/image-photo/orang-fruit-isolate-orange-leaves-600w-543103645.jpg",

   "link": "https://www.billa.at/produkte/pink-lady-apfel-tasse/00-89243",

   "number_of_stock" : 50,

}, {

    "article_id": "4",

   "description": "Kiwi",

   "type_of_food" : "fruit",

   "price" : "2€",

   "link_online" : "https://image.shutterstock.com/image-photo/ripe-whole-kiwi-fruit-half-600w-699645964.jpg",

   "link": "https://www.billa.at/produkte/kiwi/00-400018",

   "number_of_stock" : 500,

}, {

    "article_id": "5",

   "description": "Strawberry",

   "type_of_food" : "fruit",

   "price" : "5€",

   "link_online" : "https://image.shutterstock.com/image-photo/three-strawberries-strawberry-leaf-on-600w-771314446.jpg",

   "link": "https://www.billa.at/produkte/da-komm-ich-her-erdbeeren/00-89480",

   "number_of_stock" : 5,

}, {

    "article_id": "6",

   "description": "Blueberry",

   "type_of_food" : "fruit",

   "price" : "8€",

   "link_online" : "https://image.shutterstock.com/image-photo/blueberry-isolated-on-white-background-260nw-1500487817.jpg",

   "link": "https://www.billa.at/produkte/heidelbeeren/00-410607",

   "number_of_stock" : 0,
}];

//wrapper for flexbox
var newItem = '<div class="wrapper"></div>';
//add wrapper
$("body").append(newItem);

for (i = 0; i < number_of_articles; i++)
      {
         // definition of the new element
         var newItem_1 = '<div><img src='+articles[i].link_online+' alt='+articles[i].description+'><p class="description_img">'+articles[i].description+ ' ' + '<span class="number_of_stock">' +articles[i].number_of_stock + '</span></p></div>'; 
         // insert the new element  
         $(".wrapper").append(newItem_1); 
         }

$(".wrapper").css({"display":"flex","flex-wrap":"wrap","width":"100%",});
$(".wrapper>div>p").css({"background-color":"grey"});
$(".wrapper>div>img").css({"width":"600px" , "height" : "400px", "object-fit":"cover",});
$(".wrapper>div>p").css({"text-align":"center" , "font-family":"arial", "font-size" : "20px", });

for (i = 0; i < articles.length; i++)
      {
      if (articles[i].number_of_stock==0)
         {
         $("span:eq("+i+")").css({"background-color":"red"});
         } else {
         $("span:eq("+i+")").css({"background-color":"green"});
         };
      }

