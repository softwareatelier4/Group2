const SEARCH = {

   name: 'search',

   doneTypingInterval: 500,

   position: {
      city: null,
      state: null,
      latitude: null,
      longitude: null,
      method: null,
      observers: []
   },

   currentResult: [],

   originalResponse: [],

   notSortedResult: undefined,

   freelancerForMarco: [],

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
         // setTimeout(SEARCH.search, 0);
      }

      SEARCH.hashUpdater();
      SEARCH.hashToValue();
      SEARCH.listenerAdd();
      SEARCH.addGeolocationListener();

      SEARCH.getPositionHash();
      SEARCH.setPositionHash();

   },

   addon_init: function() {
      SEARCH.hashUpdater();
      SEARCH.addGeolocationListener();
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

      $('#position').on('keyup', function() {
         if ($('#position').val() == '') {
            $('#position').blur(function() {
               SEARCH.setPosition('reset');
            });
         } else {
            $('#position').off('blur');
         }
      });

      SEARCH.position.observers.push(SEARCH.search);
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

         if (SEARCH.position) {
            lat = SEARCH.position.latitude;
            long = SEARCH.position.longitude;
         } else {
            lat = 46.005265; //temp lat
            long = 8.947147; // temp long
         }

         doJSONRequest("GET", "/api/freelancer/search/" + query + "|" + lat + "," + long + "|" + SEARCH.position.city, null, null, function(res) {
            if (res.error) {
               console.log("error");
            } else {
               SEARCH.currentResult = res;
               SEARCH.originalResponse = res;
               let searchResult = document.getElementById('main-content');
               searchResult.innerHTML = "";
               SEARCH.drawCards(SEARCH.currentResult);

               SEARCH.freelancerForMarco = JSON.parse(JSON.stringify(SEARCH.currentResult));
               SEARCH.freelancerForMarco.sort(function(a, b) {
                  if (a.distance === undefined || a.distance === null)
                     return 1;

                  if (a.distance === undefined || b.distance === null)
                     return -1;

                  return a.distance - b.distance;
               });
               let distResult = [];
               for (let i = 0; i < 10; i++) {

                  if (SEARCH.freelancerForMarco[i] === undefined)
                     continue;
                  let temp = {
                     lat: SEARCH.freelancerForMarco[i].latitude,
                     lng: SEARCH.freelancerForMarco[i].longitude,
                     id: SEARCH.freelancerForMarco[i]._id
                  }
                  distResult.push(temp);
               }
               SEARCH.getGmapRealValue(distResult);

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
      let searchHash = SEARCH_TEXT_QUERY.val().replace(/ /g, '+').replace(/|/g, '');
      let hash = window.location.hash.split('|');
      if (hash[0].split('=')[0] == '#search') {
         hash[0] = hash[0].split('=')[0] + '=' + searchHash;
      } else {
         hash = ['search=' + searchHash];
      }
      window.location.hash = hash.join('|');
   },

   setPosition: function(method, latitude, longitude, city, state) {
      method = method || '';

      if (method == 'user') {
         SEARCH.position = {
            city,
            state,
            latitude,
            longitude,
            method,
            observers: SEARCH.position.observers
         };
      } else {
         if (method == 'empty_location' || SEARCH.position.method != 'user' || method == 'reset') {
            SEARCH.position = {
               city: userPosition.city,
               state: userPosition.state,
               latitude: userPosition.latitude,
               longitude: userPosition.longitude,
               method: method,
               observers: SEARCH.position.observers
            };
         } else {
            return;
         }
      }

      for (cb of SEARCH.position.observers) {
         cb();
      }

      SEARCH.setPositionBox();
      SEARCH.setPositionHash();
   },

   setPositionBox: function() {
      if ($('#position').is(":focus")) {
         return;
      }
      $('#position').val(SEARCH.position.city + ', ' + SEARCH.position.state);
   },

   getPositionHash: function() {
      let hashes = window.location.hash.split('|');

      let hash;
      for (let h of hashes) {
         if (h.split(':')[0] == 'position') {
            hash = h.split(':')[1];
            break;
         }
      }

      if (hash) {
         hash = hash.split('&');
         let hashObj = {};
         for (let h of hash) {
            hashObj[h.split('=')[0]] = h.split('=')[1];
         }

         SEARCH.setPosition('user', hashObj.latitude, hashObj.longitude, hashObj.city, hashObj.state);
      }

   },

   setPositionHash: function() {
      if (currentPage.name != 'search')
         return;
      let hashes = window.location.hash.split('|');

      let positionHash;
      for (let i in hashes) {
         if (hashes[i].split(':')[0] == 'position') {
            positionHash = i;
            break;
         }
      }

      let hash = 'position:city=' + SEARCH.position.city + '&state=' + SEARCH.position.state;
      hash += '&latitude=' + SEARCH.position.latitude + '&longitude=' + SEARCH.position.longitude;

      if (positionHash) {
         hashes[positionHash] = hash;
      } else {
         hashes.push(hash);
      }

      window.location.hash = hashes.join('|');
   },

   //auto complete geo position
   addGeolocationListener: function() {
      $("#position")
         .geocomplete()
         .bind("geocode:result", function(event, result) {
            const city = result.address_components[0].long_name;

            const addressLen = result.address_components.length;
            const state = result.address_components[addressLen - 1].long_name;

            const lat = result.geometry.location.lat();
            const lng = result.geometry.location.lng();
            SEARCH.setPosition('user', lat, lng, city, state);
         });
   },

   getGmapRealValue: function(data) {
      console.log(data);
      const origin = new google.maps.LatLng(SEARCH.position.latitude, SEARCH.position.longitude);

      let destinations = [];

      for (freelancer of data) {
         let destination = new google.maps.LatLng(freelancer.lat, freelancer.lng);
         destinations.push(destination);
      }

      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix({
         origins: [origin],
         destinations: destinations,
         travelMode: 'DRIVING',
         avoidHighways: false,
         avoidTolls: false,
      }, gmapsResults);

      function gmapsResults(response, status) {
         if (status == 'OK') {
            for (let i in response.rows[0].elements) {
               let elem = response.rows[0].elements[i];
               if (elem.status == 'OK') {

                  const freelancerId = data[i].id;
                  const latitude = data[i].lat;
                  const longitude = data[i].lng;
                  const distance = elem.distance.text;
                  const duration = elem.duration.text;


               }
            }

         }
      }

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
      $("#position").off();
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
