function Ticket(title, time, price) {
  this.title = title;
  this.time = time;
  this.price = price;
}

  ticket1 = new Ticket("Revenant","9:30", 10);
  ticket2 = new Ticket("Hail Caesar","3:30", 12);


Ticket.prototype.age = function() {
  var userAge = prompt("How old are you?");
  return parseInt(userAge);
}

Ticket.prototype.discount = function() {
  var userAge = prompt("How old are you?");

  if (userAge <=17) {
    return true;
  }
  else if (userAge > 55) {
    return true;
  }
  else {
    return false;
  }
}
