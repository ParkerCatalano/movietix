function Ticket(title, time, price) {
  this.title = title;
  this.time = time;
  this.price = price;
}

  ticket1 = new Ticket("Revenant","9:30", 10);
  ticket2 = new Ticket("Hail Caesar","3:30", 12);
  ticket3 = new Ticket("Zootopia", "15:00", 7);


Ticket.prototype.age = function() {
  var userAge = prompt("How old are you?");
  return parseInt(userAge);
}

Ticket.prototype.discount = function() {
  var userAge = prompt("How old are you?");

  if (userAge <=17) {
    ticket1.price = (ticket1.price - 2);
    ticket2.price = (ticket2.price - 2);
    ticket3.price = (ticket3.price - 2);
  }
  else if (userAge > 55) {
    return true;
  }
  else {
    return false;
  }
}


$(document).ready(function() {

  //$("#add-movie").click(function() {
  //  $("h2#listing").append('<div class="form-group">' + '<label for="movie-title">Movie Title</label>' + '<input type="text" class="form-control" id="movie-title">' + '</div>');

  //});

  $("form#movie").submit(function(event) {
  event.preventDefault();
   $("p#listing1").text(ticket1.title + " " + ticket1.time + " $" + ticket1.price);
   $("p#listing2").text(ticket2.title + " " + ticket2.time + " $" + ticket2.price);
   $("p#listing3").text(ticket3.title + " " + ticket3.time + " $" + ticket3.price);

   $("ul#show-specs").append("<li><span class='contact'>" + ticket1.time + "</span></li>");

  $("p#listing1").click(function() {
    $(ticket1.discount);
    $("p#listing1").text(ticket1.title + " " + ticket1.time + " $" + ticket1.price);
  })
  $("p#listing2").click(function() {
    $(ticket2.discount);
    $("p#listing2").text(ticket2.title + " " + ticket2.time + " $" + ticket2.price);
  })
  $("p#listing3").click(function() {
    $(ticket3.discount);
    $("p#listing3").text(ticket3.title + " " + ticket3.time + " $" + ticket3.price);
  })
});
});
