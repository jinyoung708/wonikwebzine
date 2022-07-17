$(window).load(function(){
    $("#sbtn").click(function() {
        $.ajax({
            type:"POST",
            url : "/web/commentSave.do",
            data:{
            	content : $("#uinfo").val(),
            	phone : $("#phone").val(),
            	email : $("#mail").val(),
            	registername : $("#usrname").val(),
            	menuid : $("#menuid").val(),
            	mid : $("#mid").val()
            },
            dataType: "json",
            success : function(result){
                alert("등록완료");
                $("#uinfo").val('');
            	$("#phone").val('');
            	$("#mail").val('');
            	$("#usrname").val('');
            	
            	goList();
            }
        })
    });
    
    $("#sort").change(function() {
    	goList();
    });
    
    function goList(){
    	$.ajax({
            type:"POST",
            url : "/web/commentList.do",
            data:{
            	menuid : $("#menuid").val(),
            	mid : $("#mid").val(),
            	sort : $("#sort").val()
            },
            dataType: "json",
            success : function(result){
            	$('.comlist').remove();
            	if(result.length>0){
            		$("#count").text(result.length+" 댓글");
            		var com = "";
            		for(i=0; i<result.length; i++){
            			com = com + "<div class='user-comment comlist'><p class='profile'></p><div class='comment'><div class='user-info'><strong class='user-info-name'>"+result[i].registername+"</strong><span class='user-info-time'>"+result[i].updt+"</span></div><div class='user-comment-view'><p>"+result[i].content+"</p></div></div></div>";
            		}
            		$(com).insertAfter( ".sorting" );
            	}else{
            		$("#count").text("0 댓글");
            	}
            }
        })
    }
    goList();
});