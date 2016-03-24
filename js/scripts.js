function Ticket(title, time, price) {
  this.title = title;
  this.time = time;
  this.price = price;
}

Ticket.prototype.age = function() {
  var userAge = prompt("How old are you?");
}

Ticket.prototype.discount = function() {
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
