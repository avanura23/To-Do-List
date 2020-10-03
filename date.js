module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate() {
  var today = new Date();
  var h = today.getDay();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  var date = today.toLocaleDateString("en-IN", options);
  return date;
}

function getDay() {
  var today = new Date();
  var h = today.getDay();
  var options = {
    weekday: "long",
  };

  var day = today.toLocaleDateString("en-IN", options);
  return day;
}
