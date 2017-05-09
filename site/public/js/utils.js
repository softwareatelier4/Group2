const UTILS = {
   geoLocation: function() {
      if (userPosition && userPosition.time + 10000 > Date.now()) {
         return;
      }

      // localStorage import
      if (localStorage) {
         if (localStorage.position) {
            let p = JSON.parse(localStorage.position);
            UTILS.setLocation(p.latitude, p.longitude, p.city, p.formatted_address, p.method);
         }
      }

      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(UTILS.gpsLocation);
      }

      UTILS.ipLocation();
   },

   setLocation: function(latitude, longitude, city, formatted_address, method) {
      if (UTILS.getMethodValue(userPosition.method) >= UTILS.getMethodValue(method)) {
         userPosition.method = method;
         userPosition.city = city;
         userPosition.formatted_address = formatted_address;
         userPosition.latitude = latitude;
         userPosition.longitude = longitude;
         userPosition.time = Date.now();
         userPosition.method = method;

         if (method.split('-')[0] != 'localstorage') {
            let position = {};
            position.city = city;
            position.formatted_address = formatted_address;
            position.latitude = latitude;
            position.longitude = longitude;
            position.time = Date.now();
            position.method = 'localstorage-' + method;
            localStorage.position = JSON.stringify(position);
         }

         for (let cb of userPosition.onChangeCall) {
            cb('geolocation_automatic');
         }
      }
   },

   getMethodValue: function(method) {
      switch (method) {
         case 'gps':
            return 0;
            break;
         case 'ip':
            return 2;
            break;
         case 'localstorage-gps':
            return 1;
            break;
         case 'localstorage-ip':
            return 3;
            break;
         default:
            return 4;
      }
   },

   gpsLocation: function(pos) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}&sensor=true`;
      doJSONRequest("GET", url, null, null, function(res) {
         if (res.status != 'OK')
            return;
         const longitude = pos.coords.longitude;
         const latitude = pos.coords.latitude;
         const formatted_address = res.results[0].formatted_address;
         const city = UTILS.googleFindType(res.results[0].address_components, 'locality').long_name;
         const method = 'gps';
         UTILS.setLocation(latitude, longitude, city, formatted_address, method);
      });
   },

   //take position by ip
   ipLocation: function() {
      const url = 'https://freegeoip.net/json/?'
      doJSONRequest("GET", url, null, null, function(res) {

         const longitude = res.longitude;
         const latitude = res.latitude;
         const city = res.city;
         const formatted_address = res.city + ', ' + res.country_name;
         const method = 'ip';

         UTILS.setLocation(latitude, longitude, city, formatted_address, method);
      });
   },

   googleFindType: function(address, searchType) {
      for (let a of address) {
         let types = a.types;

         for (let type of types) {
            if (type == searchType)
               return a;
         }
      }
   }
}
