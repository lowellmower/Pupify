var images = document.querySelectorAll('img');
for (var i = 0, l = images.length; i < l; i++){
  var rand_num = String(Math.floor(Math.random()* (15 - 1) + 1));
  var file_name = ".png";
  var new_img = chrome.extension.getURL(rand_num.concat(file_name))
  images[i] = images[i].setAttribute("src", new_img);
}
