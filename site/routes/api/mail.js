'use strict';
const nodemailer = require('nodemailer');
const juice = require('juice');

module.exports.sendMail = function(to, subject, content, callback) {
	// content is a object with title and body
	let from = '"JobAdvisor" <jobadvisor@usi.ch>';

	const template = `
	<html>
	<head>
	<style>
	.container-fluid{margin-right:auto;margin-left:auto;padding-right:2rem;padding-left:2rem}.row{box-sizing:border-box;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex:0 1 auto;-webkit-box-flex:0;flex:0 1 auto;-ms-flex-direction:row;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-1rem;margin-left:-1rem}.row.reverse{-ms-flex-direction:row-reverse;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.col.reverse{-ms-flex-direction:column-reverse;-webkit-box-orient:vertical;-webkit-box-direction:reverse;flex-direction:column-reverse}.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-xs{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-xs-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-xs-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-xs-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-xs-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-xs-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-xs-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-xs-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-xs-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-xs-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-xs-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-xs-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-xs-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-xs-offset-1{margin-left:8.333%}.col-xs-offset-2{margin-left:16.667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.333%}.col-xs-offset-5{margin-left:41.667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.333%}.col-xs-offset-8{margin-left:66.667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.333%}.col-xs-offset-11{margin-left:91.667%}.start-xs{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-xs{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-xs{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-xs{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-xs{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-xs{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-xs{-ms-flex-pack:distribute;justify-content:space-around}.between-xs{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-xs{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-xs{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}@media only screen and (min-width:48em){.container{width:46rem}.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-sm{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-sm-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-sm-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-sm-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-sm-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-sm-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-sm-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-sm-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-sm-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-sm-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-sm-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-sm-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-sm-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-sm-offset-1{margin-left:8.333%}.col-sm-offset-2{margin-left:16.667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.333%}.col-sm-offset-5{margin-left:41.667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.333%}.col-sm-offset-8{margin-left:66.667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.333%}.col-sm-offset-11{margin-left:91.667%}.start-sm{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-sm{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-sm{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-sm{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-sm{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-sm{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-sm{-ms-flex-pack:distribute;justify-content:space-around}.between-sm{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-sm{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-sm{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}@media only screen and (min-width:62em){.container{width:61rem}.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-md{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-md-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-md-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-md-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-md-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-md-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-md-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-md-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-md-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-md-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-md-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-md-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-md-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-md-offset-1{margin-left:8.333%}.col-md-offset-2{margin-left:16.667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.333%}.col-md-offset-5{margin-left:41.667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.333%}.col-md-offset-8{margin-left:66.667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.333%}.col-md-offset-11{margin-left:91.667%}.start-md{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-md{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-md{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-md{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-md{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-md{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-md{-ms-flex-pack:distribute;justify-content:space-around}.between-md{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-md{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-md{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}@media only screen and (min-width:75em){.container{width:71rem}.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{box-sizing:border-box;-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding-right:1rem;padding-left:1rem}.col-lg{-webkit-flex-grow:1;-ms-flex-positive:1;-webkit-box-flex:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-lg-1{-ms-flex-preferred-size:8.333%;flex-basis:8.333%;max-width:8.333%}.col-lg-2{-ms-flex-preferred-size:16.667%;flex-basis:16.667%;max-width:16.667%}.col-lg-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-lg-4{-ms-flex-preferred-size:33.333%;flex-basis:33.333%;max-width:33.333%}.col-lg-5{-ms-flex-preferred-size:41.667%;flex-basis:41.667%;max-width:41.667%}.col-lg-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-lg-7{-ms-flex-preferred-size:58.333%;flex-basis:58.333%;max-width:58.333%}.col-lg-8{-ms-flex-preferred-size:66.667%;flex-basis:66.667%;max-width:66.667%}.col-lg-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-lg-10{-ms-flex-preferred-size:83.333%;flex-basis:83.333%;max-width:83.333%}.col-lg-11{-ms-flex-preferred-size:91.667%;flex-basis:91.667%;max-width:91.667%}.col-lg-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-lg-offset-1{margin-left:8.333%}.col-lg-offset-2{margin-left:16.667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.333%}.col-lg-offset-5{margin-left:41.667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.333%}.col-lg-offset-8{margin-left:66.667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.333%}.col-lg-offset-11{margin-left:91.667%}.start-lg{-ms-flex-pack:start;-webkit-box-pack:start;justify-content:flex-start;text-align:start}.center-lg{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;text-align:center}.end-lg{-ms-flex-pack:end;-webkit-box-pack:end;justify-content:flex-end;text-align:end}.top-lg{-ms-flex-align:start;-webkit-box-align:start;align-items:flex-start}.middle-lg{-ms-flex-align:center;-webkit-box-align:center;align-items:center}.bottom-lg{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.around-lg{-ms-flex-pack:distribute;justify-content:space-around}.between-lg{-ms-flex-pack:justify;-webkit-box-pack:justify;justify-content:space-between}.first-lg{-ms-flex-order:-1;-webkit-box-ordinal-group:0;order:-1}.last-lg{-ms-flex-order:1;-webkit-box-ordinal-group:2;order:1}}
	</style>
	<style>
		body {
			font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
		}

		.logo {
			font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
			font-size: 40px;
			font-weight: bold;
			color: rgb(46, 78, 92);
		}

		.container {
			margin-top: 40px;
		}

		.card {
			background-color: white;
			border-radius: .25rem;
			border: 1px solid rgba(46, 78, 92, .425);
		}

		.header {
			background-color: #f7f7f9;
			border-top-left-radius: .25rem;
			border-top-right-radius: .25rem;
			padding: 15px 15px 14px 15px;
			border-bottom: 1px solid rgba(46, 78, 92, .225);
			font-weight: 450;
			font-size: 18px;
			color: black;
		}

		.content {
			background-color: #ffffff;
			padding: 15px;
			text-align: justify;
			color: black;
		}

		.footer {
			background-color: #ffffff;
			text-align: right;
			padding: 15px 50px 15px 15px;
			color: black;
		}

		.footer img {
			width: 20%;
			min-width: 130px;
		}

		.confirmBtn {
			text-decoration: none;
			color: rgb(41, 124, 128);
			padding: 10px 3% 10px 3%;
			border: 5px solid rgb(41, 124, 128);
		}

		.confirmBtn:hover {
			text-decoration: none;
			color: white;
			background-color: rgb(41, 124, 128);
			padding: 10px 3% 10px 3%;
			border: 5px solid rgb(41, 124, 128);
			-webkit-transition: background-color 250ms ease-out;
			-ms-transition: background-color 250ms ease-out;
			transition: background-color 250ms ease-out;
			-webkit-transition: color 250ms ease-out;
			-ms-transition: color 250ms ease-out;
			transition: color 250ms ease-out;
		}
	</style>
</head>

<body>
	<div class="row center-xs">
		<div class="col-xs-12">
			<div class="logo">
				JobAdvisor
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8 container">
			<div class="card">
				<div class="header">
					${content.title}
				</div>
				<div class="content">
					${content.body}
				</div>
				<div class="footer">
					<img src="http://i.imgur.com/Urwt3yi.png" />
				</div>
			</div>
		</div>
	</div>
</body>

</html>`;

	let templateInline = juice(template);

	templateInline = templateInline.substring(0, templateInline.indexOf('<style>')) + templateInline.substring(templateInline.indexOf('</style>') + '</style>'.length, templateInline.length);

	let transporter = nodemailer.createTransport({
		sendmail: true,
		newline: 'unix',
		path: '/usr/sbin/sendmail'
	});

	transporter.sendMail({
		from, // sender address
		to, // list of receivers
		subject, // Subject line
		'html': templateInline, // html body
	}, (err, info) => {
		console.log(info);
		if (callback)
			callback(err, info);
	});
}
