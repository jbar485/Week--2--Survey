
$(document).ready(function(){
  $(".sbt-btn").click(function(){
    var firstName = $("#first").val();
    var lastName = $("#last").val();
    var favoriteFood = $("#favorite-food").val();
    var favoriteMusic = $("#favorite-music").val();
    var color = $("#color").val();
    var favoriteBook = $("#favorite-book").val();
    var beverage = $("#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $(".list").append("<li>" + firstName + "</li>");
    $(".list").append("<li>" + lastName + "</li>");
    $(".list").append("<li>" + favoriteFood + "</li>");
    $(".list").append("<li>" + favoriteMusic + "</li>");
    $(".list").append("<li>" + color + "</li>");
    $(".list").append("<li>" + favoriteBook + "</li>");
    $(".list").append("<li>" + beverage + "</li>");
    $(".list").append("<li>" + flavor + "</li>");


  });
});
