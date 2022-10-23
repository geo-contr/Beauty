function initMap(){
	var pos = {lat: 41.71990374258761, lng: 44.77593855310735};
	var opt = {
		center: pos,
		zoom: 12,
		streetViewControl: true
	};

	var myMap = new google.maps.Map(document.getElementById("map"), opt);

	// var marker = new google.maps.Marker({
	// 	position: pos,
	// 	map: myMap,
	// 	title: 'Beauty boutique',
	// 	icon: './img/marker5.png'
	// });

	var marker = new google.maps.Marker({
		position: {lat: 41.72603788426659, lng: 44.75452499744392},
		map: myMap,
		title: 'Beauty boutique',
		icon: './img/marker5.png'
	});

	var marker1 = new google.maps.Marker({
		position: {lat: 41.72724465159201, lng: 44.766322774423465},
		map: myMap,
		title: 'Beauty boutique',
		icon: './img/marker4.png'
	});

	// var marker2 = new google.maps.Marker({
	// 	position: {lat: 41.71990374258761, lng: 44.77593855310735},
	// 	map: myMap,
	// 	title: 'Beauty boutique',
	// 	icon: './img/marker3.png'
	// });

	var marker2 = new google.maps.Marker({
		position: pos,
		map: myMap,
		title: 'Beauty boutique',
		icon: './img/marker3.png'
	});

	var marker3 = new google.maps.Marker({
		position: {lat: 41.7219039486991, lng: 44.788246105809506},
		map: myMap,
		title: 'Beauty boutique',
		icon: './img/marker2.png'
	});

	var marker4 = new google.maps.Marker({
		position: {lat: 41.71270857027613, lng: 44.794696835962235},
		map: myMap,
		title: 'Beauty boutique',
		icon: './img/marker1.png'
	});

	var info = new google.maps.InfoWindow({
		content: '<img src="./img/5f466be642f43f001ddff183.webp"><h4>Beauty boutique</h4><p>26 Vazha Pshavela Ave, Tbilisi</p><a href="tel:+1589785324896">(+158)9785324896</a>',
	});

	var info1 = new google.maps.InfoWindow({
		content: '<img src="./img/download.jpg"><h4>Beauty boutique</h4><p>8 Vazha Pshavela Ave, Tbilisi</p><a href="tel:+1589785324896">(+158)9785324896</a>'
	});

	var info2 = new google.maps.InfoWindow({
		content: '<img src="./img/565656.png"><h4>Beauty boutique</h4><p>6 Pekini Ave, Tbilisi</p><a href="tel:+1589785324896">(+158)9785324896</a>'
	});

	var info3 = new google.maps.InfoWindow({
		content: '<img src="./img/89988.jpg"><h4>Beauty boutique</h4><p>6 Giorgi Tsabadze Str, Tbilisi</p><a href="tel:+1589785324896">(+158)9785324896</a>'
	});	

	var info4 = new google.maps.InfoWindow({
		content: '<img src="./img/s_image.webp"><h4>Beauty boutique</h4><p>1 Jansugh Kakhidze Str, Tbilisi</p><a href="tel:+1589785324896">(+158)9785324896</a>'
	});


	marker.addListener('click', function(){
		info.open(myMap, marker);
		info1.close(myMap, marker1);
		info2.close(myMap, marker2);
		info3.close(myMap, marker3);
		info4.close(myMap, marker4);
		marker.setIcon('./img/marker5-red.png');
		marker1.setIcon('./img/marker4.png');
		marker2.setIcon('./img/marker3.png');
		marker4.setIcon('./img/marker1.png');
		marker3.setIcon('./img/marker2.png');
	});

	marker1.addListener('click', function(){
		info1.open(myMap, marker1);
		info.close(myMap, marker);
		info2.close(myMap, marker2);
		info3.close(myMap, marker3);
		info4.close(myMap, marker4);
		marker.setIcon('./img/marker5.png');
		marker2.setIcon('./img/marker3.png');
		marker1.setIcon('./img/marker4-red.png');
		marker4.setIcon('./img/marker1.png');
		marker3.setIcon('./img/marker2.png');
	});

	marker2.addListener('click', function(){
		info2.open(myMap, marker2);
		info.close(myMap, marker);
		info1.close(myMap, marker1);
		info3.close(myMap, marker3);
		info4.close(myMap, marker4);
		marker2.setIcon('./img/marker3-red.png');
		marker1.setIcon('./img/marker4.png');
		marker.setIcon('./img/marker5.png');
		marker4.setIcon('./img/marker1.png');
		marker3.setIcon('./img/marker2.png');
	});

	marker3.addListener('click', function(){
		info3.open(myMap, marker3);
		info.close(myMap, marker);
		info1.close(myMap, marker1);
		info2.close(myMap, marker2);
		info4.close(myMap, marker4);
		marker3.setIcon('./img/marker2-red.png');
		marker1.setIcon('./img/marker4.png');
		marker.setIcon('./img/marker5.png');
		marker2.setIcon('./img/marker3.png');
		marker4.setIcon('./img/marker1.png');
	});

	marker4.addListener('click', function(){
		info4.open(myMap, marker4);
		info.close(myMap, marker);
		info1.close(myMap, marker1);
		info2.close(myMap, marker2);
		info3.close(myMap, marker3);
		marker4.setIcon('./img/marker1-red.png');
		marker3.setIcon('./img/marker2.png');
		marker1.setIcon('./img/marker4.png');
		marker.setIcon('./img/marker5.png');
		marker2.setIcon('./img/marker3.png');
	});

	myMap.addListener('click', function(){
		info.close(myMap, marker);
		info1.close(myMap, marker1);
		info2.close(myMap, marker2);
		info3.close(myMap, marker3);
		info4.close(myMap, marker4);
		marker4.setIcon('./img/marker1.png');
		marker3.setIcon('./img/marker2.png');
		marker1.setIcon('./img/marker4.png');
		marker.setIcon('./img/marker5.png');
		marker2.setIcon('./img/marker3.png');

		infoWindow.close(); /* not popup maps belonging infoWindow */

	
		// $(".gm-style-iw-t").toggle('.hide'); /* built-in marker's infoWindow close */
	});

	google.maps.event.addListener(info, "closeclick", function(){
      marker.setIcon('./img/marker5.png');
	});

	google.maps.event.addListener(info1, "closeclick", function(){
      marker1.setIcon('./img/marker4.png');
	});

	google.maps.event.addListener(info2, "closeclick", function(){
      marker2.setIcon('./img/marker3.png');
	});

	google.maps.event.addListener(info3, "closeclick", function(){
      marker3.setIcon('./img/marker2.png');
	});

	google.maps.event.addListener(info4, "closeclick", function(){
      marker4.setIcon('./img/marker1.png');
	});
}



