  var showFeedback = document.querySelector(".show-feedback");
  var closeFeedback = document.querySelector(".feedback-close-btn");
  var feedback = document.querySelector(".feedback");

  showFeedback.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.add("modal-content-show");
  });

  closeFeedback.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("modal-content-show");
  });



  function initMap() {
        var uluru = {lat: 59.938631, lng: 30.323055};
        var uluruCenter = {lat: 59.939, lng: 30.329055};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluruCenter,
          disableDefaultUI: true
        });
        var markerImage = new google.maps.MarkerImage(
          'img/pin.png',
          new google.maps.Size(218,142),
          new google.maps.Point(0,0),
          new google.maps.Point(36,142)
        );
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: markerImage
        });
      }
