$.get("includes/navigation.html", function (data) {
    $("#navigation").replaceWith(data);
});
$.get("includes/footer.html", function (data) {
    $("#footer").replaceWith(data);
});