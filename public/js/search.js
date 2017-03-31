const SEARCH = {

   name: 'search',

   doneTypingInterval: 500,

   position: null,

   currentResult: [],

   originalResponse: [],

   notSortedResult: undefined,

   filters: {
      sort: {
         idBtn: undefined,
         type: undefined
      },
      price: false,
      distance: false
   },

   /**
    * Set up the search
    * @return {void}
    */
   init: function() {

      let searchVal = window.location.hash.split('|')[0].split('=')[1];

      // Display the search in fullscreen if nothing in search bar, else display header and search
      if (searchVal == '') {
         SEARCH.searchFullScreen()
      } else {
         SEARCH.searchHeader();
         setTimeout(SEARCH.search, 0);
      }

      SEARCH.hashUpdater();
      SEARCH.hashToValue();
      SEARCH.listenerAdd();
      SEARCH.addGeolocationListener();

   },

   addon_init: function() {
      SEARCH.hashUpdater();
      SEARCH.addGeolocationListener();
      SEARCH.geoLocation();
   },


   /**
    * View the search bar in full screen
    * @return {void}
    */
   searchFullScreen: function() {
      MAIN_JS.style.visibility = "hidden";
      MAIN_JS.style.flexGrow = 0;
      MAIN_DIV.style.display = "flex";
      MAIN_DIV.style.backgroundColor = "rgb(46, 78, 92)";

      /* CLEANING ALL THE FILTERS AND SORTING BUTTONS */
      FILTER_DISTANCE_QUERY[0].value = "";
      FILTER_PRICE_QUERY[0].value = "";
      SEARCH.filters = {
         sort: {
            idBtn: undefined,
            type: undefined
         },
         price: false,
         distance: false
      };
      SORTING_OPTIONS.style.visibility = 'hidden';
      let btns = document.getElementsByClassName('filter-btn');
      for (let elem of btns) {
         elem.style.textDecoration = '';
         elem.dataset.sorttype = 'neutral';
      }
      let arrowsup = document.getElementsByClassName('up-arrow');
      for (arrow of arrowsup) {
         arrow.style.display = 'inline';
         arrow.style.visibility = 'hidden';
      }
      let arrowsdown = document.getElementsByClassName('down-arrow');
      for (arrow of arrowsdown) {
         arrow.style.display = 'none';
         arrow.style.visibility = 'hidden';
      }
      //////////////////////////////////////////////////////////////////
   },


   /**
    * View the search bar as a header
    * @return {void}
    */
   searchHeader: function() {
      MAIN_JS.style.visibility = "visible";
      MAIN_JS.style.flexGrow = 1;
      MAIN_DIV.style.display = "inline";
      MAIN_DIV.style.backgroundColor = "rgb(231, 231, 231)";
      SORTING_OPTIONS.style.visibility = 'visible';
   },


   /**
    * Add the needed event listeners to the search bar
    * @return {void}
    */
   listenerAdd: function() {
      let typingTimer;

      //on keyup, start the countdown
      SEARCH_TEXT_QUERY.on('keyup', function() {
         clearTimeout(typingTimer);
         typingTimer = setTimeout(SEARCH.search, SEARCH.doneTypingInterval);
      });

      //on keydown, clear the countdown
      SEARCH_TEXT_QUERY.on('keydown', function() {
         clearTimeout(typingTimer);
      });

      //on keyup, start the countdown
      FILTER_DISTANCE_QUERY.on('keyup', function(e) {
         clearTimeout(typingTimer);
         typingTimer = setTimeout(SEARCH.applyFilters, SEARCH.doneTypingInterval);
      });

      //on keydown, clear the countdown
      FILTER_PRICE_QUERY.on('keydown', function() {
         clearTimeout(typingTimer);
      });

      //on keyup, start the countdown
      FILTER_PRICE_QUERY.on('keyup', function(e) {
         clearTimeout(typingTimer);
         typingTimer = setTimeout(SEARCH.applyFilters, SEARCH.doneTypingInterval);
      });

      //on keydown, clear the countdown
      FILTER_DISTANCE_QUERY.on('keydown', function() {
         clearTimeout(typingTimer);
      });
   },

   /**
    * AJAX request and formatting for the search
    * @return {void}
    */
   search: function() {
      let query = SEARCH_TEXT_QUERY.val(); //$input is an array so the value is in the first element.
      if (query.length > 0) {
         SEARCH.searchHeader();

         let lat;
         let long;

         // if (SEARCH.position) {
         //    lat = SEARCH.position.lat;
         //    long = SEARCH.position.long;
         // } else if (){
         //
         // }

         lat = 46.005265; //temp lat
         long = 8.947147; // temp long

         doJSONRequest("GET", "/api/freelancer/search/" + query + "|" + lat + "," + long, null, null, function(res) {
            if (res.error) {
               console.log("error");
            } else {
               SEARCH.currentResult = res;
               SEARCH.originalResponse = res;
               let searchResult = document.getElementById('main-content');
               searchResult.innerHTML = "";
               SEARCH.drawCards(SEARCH.currentResult);
            }
            let spinner = document.getElementById('spinner');
            if (spinner) {
               spinner.style.display = "none";
            }
         });
      } else {
         SEARCH.searchFullScreen();
         MAIN_JS.innerHTML = SEARCH.spinner;

      }
   },

   /**
    * Redraw freelancers cards in a sorted way based on properties (price, score,ecc)
    * @param {String} buttonId - Id of the button which calls this function to set the property
    * @return {void}
    */
   sortSearchFreelancers: function(buttonId) {
      if (SEARCH.currentResult === undefined)
         return;

      if (SEARCH.notSortedResult === undefined)
         SEARCH.notSortedResult = JSON.parse(JSON.stringify(SEARCH.currentResult));

      let currentButton = document.getElementById(buttonId);
      let currentOrder = currentButton.textContent || currentButton.innerText;

      var arrowUp = currentButton.getElementsByClassName('up-arrow')[0];
      var arrowDown = currentButton.getElementsByClassName('down-arrow')[0];

      let buttons = document.getElementById('sorting-buttons').childNodes;

      let sortType = currentButton.dataset.sorttype;

      for (let i = 0; i < buttons.length; i++) {
         // skip current clicked button or not buttons
         if (buttons[i].id === buttonId || buttons[i].tagName != 'SPAN')
            continue;

         buttons[i].style.textDecoration = '';
         if (buttons[i].innerText !== undefined) {
            arrowUp.style.visibility = 'hidden';
            arrowDown.style.display = 'none';
            buttons[i].getElementsByClassName('up-arrow')[0].style.visibility = 'hidden';
            buttons[i].getElementsByClassName('up-arrow')[0].style.display = 'inline';
            buttons[i].getElementsByClassName('down-arrow')[0].style.display = 'none';
            buttons[i].getElementsByClassName('down-arrow')[0].style.visibility = 'hidden';
            buttons[i].dataset.sorttype = "neutral";

         }
      }

      switch (sortType) {
         case "neutral":
            arrowUp.style.visibility = 'visible';
            // currentButton.innerText = currentButton.innerText + " ↑";
            sortType = "asc";
            currentButton.style.textDecoration = 'underline';
            currentButton.dataset.sorttype = 'asc';
            SEARCH.cardSort(buttonId, sortType);
            break;
         case "asc":
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'inline';
            arrowDown.style.visibility = 'visible';
            currentButton.dataset.sorttype = 'desc';
            // currentButton.innerText = currentButton.innerText.replace(" ↑", " ↓");
            sortType = "desc";
            SEARCH.cardSort(buttonId, sortType);
            break;
         case "desc":
            sortType = "neutral";
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'inline';
            arrowUp.style.visibility = 'hidden';
            // currentButton.innerText = currentButton.innerText.replace(" ↓", "");
            currentButton.style.textDecoration = '';
            currentButton.dataset.sorttype = 'neutral';
            SEARCH.drawCards(SEARCH.notSortedResult);
            break;
      }

      currentButton.dataset.sorttype = sortType;
      if (sortType !== "neutral") {
         SEARCH.filters.sort.idBtn = buttonId;
         SEARCH.filters.sort.type = sortType;
      } else {
         SEARCH.filters.sort.idBtn = undefined;
         SEARCH.filters.sort.type = undefined;
      }
   },

   cardSort: function(buttonId, sortType) {
      SEARCH.currentResult.sort(function(a, b) {
         switch (buttonId) {
            case "btn-score":
               if (sortType === "asc")
                  return b.score - a.score;
               else {
                  return a.score - b.score;
               }
               break;
            case "btn-price":
               if (sortType === "desc") {
                  if (a.price === undefined)
                     return 1;

                  if (b.price === undefined)
                     return -1;

                  return b.price - a.price;
               } else {
                  if (a.price === undefined)
                     return 1;

                  if (a.price === undefined)
                     return -1;

                  return a.price - b.price;
               }
               break;
            case "btn-time":
               SEARCH.sortCurrentByTime(sortType);
               break;
            case "btn-distance":
               if (sortType === "desc") {
                  if (a.distance === undefined || a.distance === null)
                     return 1;

                  if (b.distance === undefined || b.distance === null)
                     return -1;

                  return b.distance - a.distance;
               } else {
                  if (a.distance === undefined || a.distance === null)
                     return 1;

                  if (a.distance === undefined || b.distance === null)
                     return -1;

                  return a.distance - b.distance;
               }
               break;
            case "btn-name":
               if (sortType === "asc") {
                  if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
                     return -1;
                  if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
                     return 1;
                  return 0;
               } else {
                  if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
                     return -1;
                  if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
                     return 1;
                  return 0;
               }
               break;
         }

      });

      SEARCH.drawCards(SEARCH.currentResult);
   },

   sortCurrentByTime: function(sortType) {
      let i = 0;
      for (freelancer of SEARCH.currentResult) {
         if (i < 5) {
            freelancer.time = freelancer.distance / 60; // temp, need google api
         } else {
            freelancer.time = freelancer.distance / 60;
         }
      }

      SEARCH.currentResult.sort(function(a, b) {
         if (sortType === "desc") {
            if (a.time === undefined || a.time === 0)
               return 1;

            if (b.time === undefined || b.time === 0)
               return -1;

            return b.time - a.time;
         } else {
            if (a.time === undefined || a.time === 0)
               return 1;

            if (a.time === undefined || b.time === 0)
               return -1;

            return a.time - b.time;
         }
      })
   },

   drawCards: function(freelancers) {
      let searchResult = document.getElementById('main-content');
      searchResult.innerHTML = "";
      for (freelancer of freelancers) {
         SEARCH.insertCard(freelancer);
      }
      if (SEARCH.currentResult.length == 0) {
         searchResult.innerHTML = "<h3 style='margin-top:30px;'> No result </h3>";
      }
   },

   applyFilters: function() {
      let priceInput = document.getElementById("price-input");
      let distanceInput = document.getElementById("distance-input");
      let maxPrice = priceInput.value;
      let maxDistance = distanceInput.value;

      SEARCH.currentResult = SEARCH.originalResponse;

      // apply price filter
      if (!isNaN(maxPrice - 0) && maxPrice !== null && maxPrice !== "" && maxPrice !== false) {
         SEARCH.currentResult = SEARCH.currentResult.filter(function(freelancer) {
            if (freelancer.price)
               return freelancer.price <= maxPrice;
         });
      }

      // apply distance filter
      if (!isNaN(maxDistance - 0) && maxDistance !== null && maxDistance !== "" && maxDistance !== false) {
         SEARCH.currentResult = SEARCH.currentResult.filter(function(freelancer) {
            if (freelancer.distance)
               return freelancer.distance <= maxDistance;
         });
      }

      SEARCH.notSortedResult = SEARCH.currentResult;

      SEARCH.cardSort(SEARCH.filters.sort.idBtn, SEARCH.filters.sort.type);
   },

   /**
    * Update the current URL adding the searched value
    * @return {void}
    */
   hashUpdater: function() {
      SEARCH_TEXT_QUERY.on('keyup', SEARCH.setSearchHash);
      $('#basic-addon1').on('click', SEARCH.setSearchHash);
   },

   setSearchHash: function() {
      console.log('setSeatc');
      let searchHash = SEARCH_TEXT_QUERY.val().replace(/ /g, '+');
      let hash = window.location.hash.split('|');
      if (hash[0].split('=')[0] == '#search') {
         hash[0] = hash[0].split('=')[0] + '=' + searchHash;
      } else {
         hash = ['search=' + searchHash];
      }
      window.location.hash = hash.join('|');
   },

   geoLocation: function() {
      if (document.activeElement.id == 'position' || $('#position').val() != '') {
         $('#position').attr('placeholder', 'Insert a city');
      } else {
         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(SEARCH.gpsLocation, SEARCH.ipLocation);
         } else {
            SEARCH.ipLocation();
         }
         $('#position').attr('placeholder', 'Loading position');
      }

      setTimeout(SEARCH.geoLocation, 1000);
   },

   //take position by gps
   gpsLocation: function(pos) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}&sensor=true`;
      doJSONRequest("GET", url, null, null, function(res) {

         if (document.activeElement.id != 'position' && $('#position').val() == '') {
            SEARCH.position = {
               longitude: pos.coords.longitude,
               latitude: pos.coords.latitude,
            }

            const city = res.results[0].address_components[2].long_name;
            const state = res.results[0].address_components[4].long_name;

            $('#position').val(city + ', ' + state);
         }
      });
   },

   //take position by ip
   ipLocation: function(gpsError) {
      console.log(gpsError);
      const url = 'https://freegeoip.net/json/?'
      doJSONRequest("GET", url, null, null, function(res) {

         if (document.activeElement.id != 'position' && $('#position').val() == '') {
            SEARCH.position = {
               longitude: res.longitude,
               latitude: res.latitude,
            }
            $('#position').val(res.city + ', ' + res.country_name);
         }
      });
   },

   //auto complete geo position
   addGeolocationListener: function() {
      $("#position")
         .geocomplete()
         .bind("geocode:result", function(event, result) {
            SEARCH.position = {
               latitude: result.geometry.location.lat(),
               longitude: result.geometry.location.lng()
            }
         });
   },

   /**
    * Update the value of the input-search putting the value of the current URL
    * @return {void}
    */
   hashToValue: function() {
      let value = window.location.hash.split('|')[0].split('=')[1];
      value = value.replace('+', ' ');
      SEARCH_TEXT_QUERY.val(value);
   },

   /**
    * Remove not needed listeners from the input-search
    * @return {void}
    */
   remover: function() {
      SEARCH_TEXT_QUERY.off();
      $('#basic-addon1').off();
   },

   /**
    * Insert and view Cards as result of the search
    * @param {Freelancer} freelancer - Object Freelancer
    * @return {void}
    */
   insertCard: function(freelancer) {
      $.get("/html/searchCard.html", function(card) {

         let distance;
         if (freelancer.distance) {
            distance = freelancer.distance + "km";
         } else {
            distance = "";
         }

         let price;
         if (freelancer.price) {
            price = freelancer.price + "€";
         } else {
            price = "";
         }

         let data = {
            'freelancer': {
               'id': freelancer._id,
               'photo': freelancer.photo,
               'name': freelancer.firstName + " " + freelancer.lastName,
               'description': freelancer.description.length > 230 ? freelancer.description.substring(0, 230) + "..." : freelancer.description,
               'price': price,
               'distance': distance
            }
         };

         dust.renderSource(card, data, function(err, out) {
            MAIN_JS.insertAdjacentHTML('beforeend', out);

            let link = document.getElementById(freelancer._id).getElementsByTagName('a')[0];
            link.addEventListener('click', SEARCH.selectProfile);
         });

      }, 'html');
   },

   checkInput: function(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
      var regex = /[0-9]|\./;
      if (!regex.test(key)) {
         theEvent.returnValue = false;
         if (theEvent.preventDefault) theEvent.preventDefault();
      }
   },

   /**
    * Change URL putting the id-freelancer in order to open the selected profile
    * @param {EventListener} ev - event Listener
    * @return {void}
    */
   selectProfile: function(ev) {
      let elem = ev.target;
      let id = elem.parentNode.parentNode.id;

      let arrowsup = document.getElementsByClassName('up-arrow');
      for (arrow of arrowsup) {
         arrow.style.visibility = 'hidden';
      }
      let arrowsdown = document.getElementsByClassName('down-arrow');
      for (arrow of arrowsdown) {
         arrow.style.visibility = 'hidden';
      }

      window.location.hash = 'freelancer=' + id;
   },

   spinner: `<svg id="spinner" class="circle-loader" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="15"></circle>
</svg>`,
}
