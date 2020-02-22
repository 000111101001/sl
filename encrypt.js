if(window.addEventListener){
 window.addEventListener('load', function(){
  for(i = 0; i &lt; document.getElementsByClassName('post-body')[0].getElementsByTagName('a').length; i++){
   document.getElementsByClassName('post-body')[0].getElementsByTagName('a')[i].href = openSite() + Base64.encode(document.getElementsByClassName('post-body')[0].getElementsByTagName('a')[i].href);
  }
 }, false);
}else{
 window.attachEvent('onload', function(){
  for(i = 0; i &lt; document.getElementsByClassName('post-body')[0].getElementsByTagName('a').length; i++){
   document.getElementsByClassName('post-body')[0].getElementsByTagName('a')[i].href = openSite() + Base64.encode(document.getElementsByClassName('post-body')[0].getElementsByTagName('a')[i].href);
  }
 });
}