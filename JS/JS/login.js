function select(obj){
		if(obj.className!="border_change"){
			$(obj).addClass("border_change").css("cursor","default").css("background-color","white").siblings().removeClass("border_change");
			if($(obj).attr("name")=="mobile"){
				$(".bottom .bottom2 .login .mobile_info").css("display","block");
				$(".bottom .bottom2 .login .email_info").css("display","none");
			}else if($(obj).attr("name")=="email"){
				$(".bottom .bottom2 .login .mobile_info").css("display","none");
				$(".bottom .bottom2 .login .email_info").css("display","block");
			}
		}

	}
 
	function pr_username_tf(obj){
		var val=obj.value;
		var reg_exp_user=/^(1[3|4|5|7|8])\d{9}/gi;
		var reg_exp_nu6=/\d{6}/gi;
		var reg_exp_ch6=/\D{6}/gi;
		var reg_exp_nu69=eval('/\\d\{'+val.length+'\}/gi')
		var reg_exp_ch69=eval('/\\D\{'+val.length+'\}/gi')
		var reg_exp_psw=/\S{6,16}/gi;
		if(obj.name=="username"){
			if(reg_exp_user.test(val)){
				document.getElementById("vali_user").innerHTML="<img src='picture/true.jpg' />";
			}else if(!val){
				document.getElementById("vali_user").innerHTML="<div><img src='picture/red_x.jpg' /></div>请输入手机号码";
				document.getElementById("vali_user").style.color="red";
			}else{
				document.getElementById("vali_user").innerHTML="<div><img src='picture/red_x.jpg' /></div>手机号码应为11位数字，以13/14/15/17/18开头";
				document.getElementById("vali_user").style.color="red";
			}
		}else if(obj.name=="password"){
				//		alert(val);
			if(!val){
				document.getElementById("vali_psw").innerHTML="<div><img src='picture/red_x.jpg' /></div>请输入登陆密码";
				document.getElementById("vali_psw").style.color="red";
			}else if(reg_exp_psw.test(val)){
			  		if(val.length==6){
						if(val==123456||val==111111){
							document.getElementById("vali_psw").innerHTML="<div><img src='picture/red_x.jpg' /></div>密码强度较弱，请重新输入";
							document.getElementById("vali_psw").style.color="red";
						}else if(reg_exp_ch6.test(val)||reg_exp_nu6.test(val)){
							document.getElementById("vali_psw").innerHTML="<div id='vali_div'>弱：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw").style.color="#808080";	
							document.getElementById("vali_div").style.color="red";
						}else{
							document.getElementById("vali_psw").innerHTML="<div id='vali_div'>中：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw").style.color="#808080";	
							document.getElementById("vali_div").style.color="#69BEEB";
						}
					}
					if(val.length>=7&&val.length<10){
						if(reg_exp_nu69.test(val)||reg_exp_ch69.test(val)){
							document.getElementById("vali_psw").innerHTML="<div id='vali_div'>弱：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw").style.color="#808080";	
							document.getElementById("vali_div").style.color="red";
						}else{
							document.getElementById("vali_psw").innerHTML="<div id='vali_div'>中：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw").style.color="#808080";	
							document.getElementById("vali_div").style.color="#69BEEB";
						}
					}
					if(val.length>=10){
						if(reg_exp_nu69.test(val)||reg_exp_ch69.test(val)){
							document.getElementById("vali_psw").innerHTML="<div id='vali_div'>中：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw").style.color="#808080";	
							document.getElementById("vali_div").style.color="#69BEEB";
						}else{
							document.getElementById("vali_psw").innerHTML="<div id='vali_div'>强：</div>请牢记您的密码";
							document.getElementById("vali_psw").style.color="#808080";	
							document.getElementById("vali_div").style.color="#4BB900";
						}
					}
			}else{
				document.getElementById("vali_psw").innerHTML="<div><img src='picture/red_x.jpg' /></div>密码较短，最短支持6个字符";
				document.getElementById("vali_psw").style.color="red";
			}
			
		}
				
	}

	function pr_username_re(obj){
		if(obj.name=="username"){
			document.getElementById("vali_user").innerHTML="<div><img src='picture/re.jpg' /></div>请使用11位数字，海外用户请使用邮箱注册";
			document.getElementById("vali_user").style.color="#808080";
		}else if(obj.name=="password"){
			document.getElementById("vali_psw").innerHTML="<div><img src='picture/re.jpg' /></div>6-16位字符（字母数字符号），区分大小写";
			document.getElementById("vali_psw").style.color="#808080";
		}
	}
	
	function pr_username_tf_email(obj){
		var val=obj.value;
		var reg_exp_user=/^(\S)+@[1-9a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
		var reg_exp_nu6=/\d{6}/gi;
		var reg_exp_ch6=/\D{6}/gi;
		var reg_exp_nu69=eval('/\\d\{'+val.length+'\}/gi')
		var reg_exp_ch69=eval('/\\D\{'+val.length+'\}/gi')
		var reg_exp_psw=/\S{6,16}/gi;
		if(obj.name=="username_email"){
			if(reg_exp_user.test(val)){
				document.getElementById("vali_user_email").innerHTML="<img src='picture/true.jpg' />";
			}else if(!val){
				document.getElementById("vali_user_email").innerHTML="<div><img src='picture/red_x.jpg' /></div>请输入邮箱";
				document.getElementById("vali_user_email").style.color="red";
			}else{
				document.getElementById("vali_user_email").innerHTML="<div><img src='picture/red_x.jpg' /></div>请输入正确的邮箱";
				document.getElementById("vali_user_email").style.color="red";
			}
			
		}else if(obj.name=="password_email"){
			if(!val){
				document.getElementById("vali_psw_email").innerHTML="<div><img src='picture/red_x.jpg' /></div>请输入登陆密码";
				document.getElementById("vali_psw_email").style.color="red";
			}else if(reg_exp_psw.test(val)){
			  		if(val.length==6){
						if(val==123456||val==111111){
							document.getElementById("vali_psw_email").innerHTML="<div><img src='picture/red_x.jpg' /></div>密码强度较弱，请重新输入";
							document.getElementById("vali_psw_email").style.color="red";
						}else if(reg_exp_ch6.test(val)||reg_exp_nu6.test(val)){
							document.getElementById("vali_psw_email").innerHTML="<div id='vali_div_email'>弱：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw_email").style.color="#808080";	
							document.getElementById("vali_div_email").style.color="red";
						}else{
							document.getElementById("vali_psw_email").innerHTML="<div id='vali_div_email'>中：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw_email").style.color="#808080";	
							document.getElementById("vali_div_email").style.color="#69BEEB";
						}
					}
					if(val.length>=7&&val.length<10){
						if(reg_exp_nu69.test(val)||reg_exp_ch69.test(val)){
							document.getElementById("vali_psw_email").innerHTML="<div id='vali_div_email'>弱：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw_email").style.color="#808080";	
							document.getElementById("vali_div_email").style.color="red";
						}else{
							document.getElementById("vali_psw_email").innerHTML="<div id='vali_div_email'>中：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw_email").style.color="#808080";	
							document.getElementById("vali_div_email").style.color="#69BEEB";
						}
					}
					if(val.length>=10){
						if(reg_exp_nu69.test(val)||reg_exp_ch69.test(val)){
							document.getElementById("vali_psw_email").innerHTML="<div id='vali_div_email'>中：</div>试试字母、数字和标点混合";
							document.getElementById("vali_psw_email").style.color="#808080";	
							document.getElementById("vali_div_email").style.color="#69BEEB";
						}else{
							document.getElementById("vali_psw_email").innerHTML="<div id='vali_div_email'>强：</div>请牢记您的密码";
							document.getElementById("vali_psw_email").style.color="#808080";	
							document.getElementById("vali_div_email").style.color="#4BB900";
						}
					}
			}else{
				document.getElementById("vali_psw_email").innerHTML="<div><img src='picture/red_x.jpg' /></div>密码较短，最短支持6个字符";
				document.getElementById("vali_psw_email").style.color="red";
			}
		}
	}

	function pr_username_re_mail(obj){
		if(obj.name=="username_email"){
			document.getElementById("vali_user_email").innerHTML="<div><img src='picture/re.jpg' /></div>请输入您的登录邮箱。<a href=''>我没有邮箱</a>";
			document.getElementById("vali_user_email").style.color="#808080";
		}else if(obj.name=="password_email"){
			document.getElementById("vali_psw_email").innerHTML="<div><img src='picture/re.jpg' /></div>6-16位字符（字母数字符号），区分大小写";
			document.getElementById("vali_psw_email").style.color="#808080";
		}
	}
	function refreash_code(){
		document.getElementById("code_pic").src="vai_code.php?"+Math.random();
	}