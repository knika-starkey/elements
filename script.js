$(function () {
  $("#h1text").click(function () {
    $("h1").css("color", "yellow");
    $("h1").css("background", "darkviolet");
  });
  $("#author").click(function () {
    $("h2").text("гнілуоР наожД");
    $("h2").css("color", "green");
  });
  $("#addparagraph").click(function () {
    $("body").append(
      "<p>Залізши до ліжка, місіс Дурслі швиденько заснула, а от містер Дурслі ще довго міркував над тим усім.</p>"
    );
  });
  $("#text").click(function () {
    $("p").css("color", "darkred");
    $("p:first").css("background", "lightblue");
    $("p:last").css("font-weight", "bold");
  });
  $("#name").click(function () {
    $("h3").css("font-size", "30px");
  });
});
