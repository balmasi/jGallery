$(document).ready(function(){
    
    $.getJSON(
	'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FList_of_United_States_National_Parks_by_state%22%20AND%20xpath%3D%22%2F%2Fimg%22&format=json&diagnostics=true',
    function(data){
        wrap= $("#wrapper");
        wrapWidth=0;
        var results = data.query.results.img;
        var docfrag = document.createDocumentFragment();
        for (i in results){
            var newItem= document.createElement('img');
            newItem.src = results[i].src;
            wrapWidth+=isNaN(parseInt(results[i]["width"]))? 0 : parseInt(results[i]["width"])+15;  
            docfrag.appendChild(newItem);
            
        }
        wrap.append(docfrag);
        wrap.css("width",wrapWidth);
        var duration = $("img").length * 500; 
        wrap.animate({left: '-='+wrapWidth},duration,'linear');
        wrap.live("mouseover",function() {  
          wrap.stop(true); 
         });
    }
);
      
 
});