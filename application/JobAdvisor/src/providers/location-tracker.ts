import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTracker {

	public watch: any;
	public lat: number = 0;
	public lng: number = 0;

	constructor(public zone: NgZone, public backgroundGeolocation: BackgroundGeolocation, public geolocation: Geolocation, public http: Http) {

	}

	startTracking(url: string) {

		// Background Tracking

		let config = {
			desiredAccuracy: 1,
			stationaryRadius: 1,
			distanceFilter: 1,
			url: url,
			startOnBoot: true,
			activitiesInterval: 1,
			interval: 1,
			notificationTitle: "JobAdvisor Emergency Tracking",
			notificationText: "You are avaiable for emergency call!",
			notificationIconColor: "#2E4E5C",
		};

		this.backgroundGeolocation.configure(config).subscribe((location) => {

			console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
			let data = {
				currentPosition : {
					lat : location.latitude,
					long : location.longitude
				}
			};
			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			this.http.post(url, data, {"headers": headers})
			.map(res=>res.json())
			.subscribe( (data) => {
				console.log(data);
			});

			// Run update inside of Angular's zone
			this.zone.run(() => {
				this.lat = location.latitude;
				this.lng = location.longitude;
			});

		}, (err) => {

			console.log(err);

		});

		// Turn ON the background-geolocation system.
		this.backgroundGeolocation.start();


		// Foreground Tracking

		let options = {
			frequency: 1,
			enableHighAccuracy: true
		};

		this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

			console.log(position);

			if(position){
				let data = [{
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				}]
				let headers = new Headers();
				headers.append('Content-Type', 'application/json');
				this.http.post(url, data, {"headers": headers})
				.map(res=>res)
				.subscribe( (data) => {
					console.log(data);
				});
			}
			// Run update inside of Angular's zone
			this.zone.run(() => {
				this.lat = position.coords.latitude;
				this.lng = position.coords.longitude;
			});

		}, (err) => {
			console.log("Foreground:");
			console.log(err);
		});

	}

	stopTracking() {

		console.log('stopTracking');

		this.backgroundGeolocation.finish();
		this.backgroundGeolocation.stop();
		if(this.watch){
			this.watch.unsubscribe();
		}

	}

}
