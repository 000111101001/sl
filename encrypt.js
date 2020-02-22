if(window.addEventListener){
 window.addEventListener(&#39;load&#39;, function(){
  for(i = 0; i &lt; document.getElementsByClassName(&#39;post-body&#39;)[0].getElementsByTagName(&#39;a&#39;).length; i++){
   document.getElementsByClassName(&#39;post-body&#39;)[0].getElementsByTagName(&#39;a&#39;)[i].href = openSite() + Base64.encode(document.getElementsByClassName(&#39;post-body&#39;)[0].getElementsByTagName(&#39;a&#39;)[i].href);
  }
 }, false);
}else{
 window.attachEvent(&#39;onload&#39;, function(){
  for(i = 0; i &lt; document.getElementsByClassName(&#39;post-body&#39;)[0].getElementsByTagName(&#39;a&#39;).length; i++){
   document.getElementsByClassName(&#39;post-body&#39;)[0].getElementsByTagName(&#39;a&#39;)[i].href = openSite() + Base64.encode(document.getElementsByClassName(&#39;post-body&#39;)[0].getElementsByTagName(&#39;a&#39;)[i].href);
  }
 });
}
