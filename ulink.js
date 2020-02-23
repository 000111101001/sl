var links = [
  "anuan2.blogspot.com/2020/02/11.html?url=",
  "anuan2.blogspot.com/2020/02/10.html?url=",
  "anuan2.blogspot.com/2020/02/9.html?url=",
  "anuan2.blogspot.com/2020/02/8.html?url=",
  "anuan2.blogspot.com/2020/02/7.html?url=",
  "anuan2.blogspot.com/2020/02/6.html?url=",
  "anuan2.blogspot.com/2020/02/5.html?url=",
  "anuan2.blogspot.com/2020/02/4.html?url=",
  "anuan2.blogspot.com/2020/02/3.html?url=",
  "anuan2.blogspot.com/2020/02/2.html?url=",
  "anuan2.blogspot.com/2020/02/1.html?url="
  ]
var openSite = function() {
  var randIdx = Math.random() * links.length;
  randIdx = parseInt(randIdx, 10);
  var link = 'https://' + links[randIdx];
  return link;
};
