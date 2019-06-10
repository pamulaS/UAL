window.onload = function(){
    if(document.getElementsByTagName('body')){  
        var UDO_Obj = document.createElement('script');
        var UDO_Obj_Data = document.createTextNode('var utag_data = {}');
        UDO_Obj.appendChild(UDO_Obj_Data);
        var tealium_lib= document.createElement('script');
        var tealium_lib_Data = document.createTextNode("(function(a,b,c,d){a='//tags.tiqcdn.com/utag/unitedairlines/sandbox/prod/utag.js';b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);})()");
        tealium_lib.appendChild(tealium_lib_Data);
        document.body.insertBefore(tealium_lib, document.body.firstChild)
        document.body.insertBefore(UDO_Obj, document.body.firstChild)
        }
}



