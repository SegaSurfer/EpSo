/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let config = '{ "Weapons" : [' +
'{ "image":"sword_clash.png" , "sound":"sword_clash.mp3" },' +
'{ "image":"musket.png" , "sound":"musket.mp3" },' +
'{ "image":"crossbow_shot.png" , "sound":"crossbow_shot.wav" },' +
'{ "image":"gun_revolver_pistol.png" , "sound":"gun_revolver_pistol.wav" },' +
'{ "image":"weapon_nature_vines_tree_impact.png" , "sound":"weapon_nature_vines_tree_impact.wav" }' +
'], '+
'"Nature" : [' +
'{ "image":"thunder.png" , "sound":"thunder.wav" },' +
'{ "image":"nature_(elemental).png" , "sound":"nature_(elemental).mp3" }' +
'],' +
'"Background" : [' +
'{ "image":"horror_background.png" , "sound":"horror_background.m4a" },' +
'{ "image":"horror_background_sanft.png" , "sound":"horror_background_sanft.m4a" },' +
'{ "image":"battle_background.png" , "sound":"battle_background.wav" },' +
'{ "image":"battle_background_epicer.png" , "sound":"battle_background_epicer.wav" },' +
'{ "image":"battle_For_The_Assault.png" , "sound":"battle_For_The_Assault.wav" },' +
'{ "image":"battle_Night_Siege.png" , "sound":"battle_Night_Siege.wav" },' +
'{ "image":"music_Adventurers_Road.png" , "sound":"music_Adventurers_Road.m4a" },' +
'{ "image":"music_Country_Market.png" , "sound":"music_Country_Market.m4a" }' +
'], '+
'"Overlay" : [' +
'{ "image":"overlay_rain.png" , "sound":"overlay_rain.wav" },' +
'{ "image":"overlay_bird_crows.png" , "sound":"overlay_bird_crows.wav" },' +
'{ "image":"overlay_fly_buzz_flying.png" , "sound":"overlay_fly_buzz_flying.wav" },' +
'{ "image":"overlay_wind_cold_howling_haunted.png" , "sound":"overlay_wind_cold_howling_haunted.wav" }' +
']}';







function playAudio(url) {
    new Audio(url).play();
  }

function playMusik(url) {
    var x = document.getElementById("myAudio");
    x.innerHTML = '<source src="' + url + '" type="audio/mpeg"> Your browser does not support the audio element.';
    x.loop = true;
    x.load();
 }

 function playOverlay(url) {
    var x = document.getElementById("myAudioOverlay");
    x.innerHTML = '<source src="' + url + '" type="audio/mpeg"> Your browser does not support the audio element.';
    x.loop = true;
    x.load();
 }

 var x = document.getElementById("myAudio");
 x.loop = true;
 x.load();

 var z = document.getElementById("myAudioOverlay");
 z.loop = true;
 z.load();

const parsed_config = JSON.parse(config);
Object.entries(parsed_config).forEach((entry) => {
    const [key, value] = entry;  
    const id = entry[0];

    let outer ='<section class="py-6"><div class="container px-4 px-lg-5 mt-5"><h5 class="display-6 fw-bolder">' + id + '</h5><div class="row gx-4 gx-lg-5 row-cols-4 row-cols-md-6 row-cols-xl-8 justify-content-center" id="'+ id +'"></div></div></section>';
    document.getElementById("content").innerHTML += outer;

    let menu = '<li class="nav-item"><a class="nav-link" href="#' + id + '">' + id +'</a></li>';
    document.getElementById("menu").innerHTML += menu;

    const element = document.getElementById(id);
    
    if (element !== null)
    {
        let inner = '';

        for (let i=1; i < entry.length; i++) {
            for (let j=0; j < entry[i].length; j++){
                let obj = entry[i][j];
                inner += '<div class="col mb-3"><div class="card"><img class="card-img-top"';
                if(id.match("Background")){
                    inner += ' src="assets/' + obj.image + '" onclick="playMusik(\'assets/' + obj.sound + '\')"/>';
                }
                else if(id.match("Overlay")){
                    inner += ' src="assets/' + obj.image + '" onclick="playOverlay(\'assets/' + obj.sound + '\')"/>';
                }
                else{
                    inner += ' src="assets/' + obj.image + '" onclick="playAudio(\'assets/' + obj.sound + '\')"/>';
                }
                inner += '</div></div>';
            }
        }
        element.innerHTML = inner;
    }
  });
