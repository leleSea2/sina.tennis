function GetAjaxObj(){
	var ajax_obj
	try{
		ajax_obj=new XMLHttpRequest();
	}catch(e){
			ajax_obj=new ActiveXObject("Microsoft.XMLHTTP");
		}
	return ajax_obj;
	}