/*导航栏渐变逻辑*/
$(document).ready(fade());
function fade() {
		$("#in").on("click",function(){
		$("#div1").fadeToggle(500);
		$("#div2").fadeToggle(500);
		$("#div3").fadeToggle(500);
		$("#div4").fadeToggle(500);
		$("#div5").fadeToggle(500);
		$("#div6").fadeToggle(500);
		$("#div7").fadeToggle(500);
	});
};
/*点击div跳转*/
 $(".space").click(function(){
   window.location=$(this).find("a").attr("href");
   return false;
});
 $(".navbar-hidden").click(function(){
   window.location=$(this).find("a").attr("href");
   return false;
});
  $(".notice").click(function(){
   window.location=$(this).find("a").attr("href");
   return false;
});
  /*正负号判断*/
  $(document).ready(function(){
  	var type = 1;
  	if (type == 1) {
  		$(".isnum").prepend("+");
  	} else {
  		$(".isnum").prepend("-");
  	}
  });
  /*账号状态判断：审核，正常，待处理*/
   $(document).ready(function(){
  	var type = 1;
  	  	var type = 1;
  	if (type == 1) {
  		$(".idtype").append("审核");
  	} else if(type == 2){
  		$(".idtype").append("正常");
  	}else{
  		$(".idtype").append("待处理");
  	}
  });
/*点击提示*/
$(".idtype").click(function() {
      alert("提示内容");
    });
/*提交成功后提示*/
$.validator.setDefaults({
    submitHandler: function() {
      alert("提交成功!");
    }
});
/*检验合法性*/
$().ready(function() {
// 在键盘按下并释放及提交后验证提交表单
	 $("#LockForm").validate({
	    rules: {
	      password: {
	        required: true,
	        minlength: 5
	      },
	      confirm_password: {
	        required: true,
	        minlength: 5,
	        equalTo: "#password"
	      }
	    },
	    messages: {
	      password: {
	        required: "请输入密码",
	        minlength: "密码长度不能小于 5 个字母"
	      },
	      confirm_password: {
	        required: "请输入密码",
	        minlength: "密码长度不能小于 5 个字母",
	        equalTo: "两次密码输入不一致"
	      }
	    }
	});
	 $("#SetupForm").validate({
	    rules: {
	     buid: {
	      	digits:true,
	      	maxlength:12
	      },
	      wuid: {
	      	digits:true,
	      	maxlength:12
	      },
	      username: {
	        required: true,
	        rangelength:[2,12]
	      }
	    },
	    messages: {
	      buid: {
	      	digits:"必须输入合法的ID",
	      	maxlength:"必须输入合法的ID"
	      },
	      wuid: {
	      	digits:"必须输入合法的ID",
	      	maxlength:"必须输入合法的ID"
	      },
	      username: {
	        required: "请输入用户名",
	        rangelength: "用户名长度请限制在2到12个字符内"
	      }
	 }
	});
	$("#RegForm").validate({
	    rules: {
	      qq: {
	        required: true,
	        rangelength:[6,12]
	      },
	      username: {
	        required: true,
	        rangelength:[2,12]
	      },
	      password: {
	        required: true,
	        minlength: 5
	      },
	      confirm_password: {
	        required: true,
	        minlength: 5,
	        equalTo: "#password"
	      }
	    },
	    messages: {
	      qq: {
	      	required: "请输入QQ号",
	        rangelength: "必须输入合法的ID"
	      },
	      username: {
	        required: "请输入用户名",
	        rangelength: "用户名长度请限制在2到12个字符内"
	      },
	      password: {
	        required: "请输入密码",
	        minlength: "密码长度不能小于 5 个字母"
	      },
	      confirm_password: {
	        required: "请输入密码",
	        minlength: "密码长度不能小于 5 个字母",
	        equalTo: "两次密码输入不一致"
	      }
	 }
	});
});
