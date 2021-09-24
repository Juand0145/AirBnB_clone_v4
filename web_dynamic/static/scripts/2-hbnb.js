$(document).ready(function () {
  let checkedAmenities = {};
  $(document).on("change", "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data("id")] = $(this).data("name");
    } else {
      delete checkedAmenities[$(this).data("id")];
    }
    let lst = Object.values(checkedAmenities);
    if (lst.length > 0) {
      $("div.amenities > h4").text(Object.values(checkedAmenities).join(", "));
    } else {
      $("div.amenities > h4").html("&nbsp;");
    }
  });
});

const url = "http://0.0.0.0:5001/api/v1/status/"


$.get(url, function (data, statusText, xhr) {
  if (xhr.status === 200) {
    $("div#api_status").addClass("available");
  } else {
    $("div#api_status").removeClass("available");
  }
});
