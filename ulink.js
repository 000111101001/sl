var links = [
              "indramayunetworks.blogspot.com/p/anu1.html?url=",
              "indramayunetworks.blogspot.com/2020/02/anuan.html?url=",
              "indramayunetworks.blogspot.com/p/anu2.html?url=",
              "indramayunetworks.blogspot.com/p/anu3.html?url="
            ]
           var openSite = function() {
              var randIdx = Math.random() * links.length;
              randIdx = parseInt(randIdx, 10);
              var link = 'http://' + links[randIdx];
     return link;
    };