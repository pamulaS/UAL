var Utag_Data = (function(){
var scriptUDOTag = document.createElement('script');
var scriptUDOData = document.createTextNode('var utag_data = {}');
scriptUDOTag.appendChild(scriptUDOData);
if(document.getElementsByTagName('body')){
document.body.insertBefore(scriptUDOTag, document.body.firstChild)

}
}());
export default Utag_Data;
