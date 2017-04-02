const FREELANCER = {

   name: 'freelancer',

	/**
	 * Set up the freelancer
	 * @return {void}
	 */
	init: function() {
		console.log('Freelancer - initialization');

      SEARCH.searchHeader();
      SEARCH.addon_init();


      let main = document.getElementById('main');
      main.style.display = "inherit";
      main.style.backgroundColor = "rgb(231, 231, 231)";

      SORTING_OPTIONS.style.visibility = 'hidden';

      FREELANCER.renderProfile();
   },

   remover: function() {
      SEARCH.remover();
   },
	/**
	 * Render the profile of freelancer
	 * @return {void}
	 */

   renderProfile: function() {
      var url = window.location.href;
      var idFreelancer = url.split('=')[1];

      doJSONRequest("GET", "/api/freelancer/" + idFreelancer, null, null, function(res) {
         if (res.error) {
            console.log("error");
         } else {
            $.get("/html/freelancer.html", function(html) {
               res.score = FREELANCER.getHtmlRankStar({
                  full: res.score,
                  empty: 5 - res.score
               });
               let data = {
                  freelancer: res
               };

               dust.renderSource(html, data, function(err, out) {
                  MAIN_JS.innerHTML = out;
                  FREELANCER.renderReview(idFreelancer);
               });
            });
         }
      });
   },
   
	/**
	 * Render reviews of a freelancer
	 * @param {idFreelancer} - id of the Freelancer
	 * @return {void}
	 */
   renderReview: function(idFreelancer) {
      doJSONRequest("GET", "/api/review/freelancer/" + idFreelancer, null, null, function(result) {

         $.get("/html/review.html", function(reviewHtml) {

            for (res of result) {
               res.score = FREELANCER.getHtmlRankStar({
                  full: res.score,
                  empty: 5 - res.score
               });
            }
				dust.renderSource(reviewHtml, result, function(err, out) {
					document.getElementById('cardReviews').innerHTML = out;

					let freelancerReplyButtons = document.getElementsByName('freelancer-reply');
					for (let freelancerReplyButton of freelancerReplyButtons) {
						freelancerReplyButton.addEventListener('click', FREELANCER.showReplyReview);
					}
				});
			});
         });

   },
	/**
	 * Create html code for show the rank of a single review
	 * @param {Object} - starObj = {full, half, empty}
	 * @return {string} - return string of html code
	 */

   getHtmlRankStar: function(starObj) {
      // starObj = {full, half, empty}
      starObj.full = starObj.full | 0;
      starObj.half = starObj.half | 0;
      starObj.empty = starObj.empty | 0;

      html = '';
      for (let i = 0; i < starObj.full; i++) {
         html += "<i class='fa fa-star blue' aria-hidden='true'></i>";
      }

      for (let i = 0; i < starObj.half; i++) {
         html += "<i class='fa fa-star-half-o blue' aria-hidden='true'></i>";
      }

      for (let i = 0; i < starObj.empty; i++) {
         html += "<i class='fa fa-star-o blue' aria-hidden='true'></i>";
      }

      return html;
	},

	/**
	 * Show button and form for add a new review's reply
	 * @param {event} - event
	 * @return {void}
	 */
	showReplyReview: function(e) {
		const form = e.target.parentNode.getElementsByTagName('form')[0];
		const textArea = form.getElementsByTagName('textarea')[0];
		const submitButton = form.getElementsByTagName('button')[0];

		$(e.target).fadeOut(100);
		$(form).slideDown(400);
		$(textArea).focus();


		submitButton.addEventListener('click', FREELANCER.senderReplyReview);
	},

	/**
	 * Abilitate button for send the reply
	 * @param {event} - event
	 * @return {void}
	 */
	senderReplyReview: function(e) {
		e.preventDefault();

		const form = e.target.parentNode;
		const reply = form.parentNode.getElementsByClassName('reply')[0];
		const cardBlock = reply.getElementsByClassName('card-block')[0];
		const reviewId = e.target.parentNode.name;
		const textArea = e.target.parentNode.getElementsByTagName('textarea')[0];
		const data = {
			review: textArea.value
		};

		doJSONRequest("POST", "/api/review/" + reviewId, null, data, function(result) {
			$(form).slideUp(400);
			$(cardBlock).slideDown(400);
			reply.getElementsByTagName('p')[0].innerHTML = textArea.value;
		});
	}
}
