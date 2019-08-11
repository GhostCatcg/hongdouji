
$(document).ready(function(){
	web.main();
});

var web={
	main : function(){
		web.init();
		web.getImgUrl();
	},
	init : function(){
		this.file_Id=$("#file");
		this.img_Id=$("#img");
		this.expImg_Id=$("#expImg");
		this.btn_Id=$("#btn");
		this.c=document.createElement("canvas");
		this.ctx=this.c.getContext("2d");
	},
	getImgUrl : function(){
		var fileUrl="",imgDataUrl="",reader=new FileReader(),imgW=0,imgH=0,expW=0,expH=0,imgMax=800;
		
		web.btn_Id.click(function(){
			imgW=0;
			imgH=0;
			expW=0;
			expH=0;
			web.img_Id[0].src="";
			
			//转换图片为base64格式
			fileUrl=web.file_Id[0].files[0];
			reader.readAsDataURL(fileUrl);
            console.log(reader.readAsDataURL(fileUrl))
            
			// reader.onload=function(e){
			// 	web.img_Id[0].src=this.result;
				
			// 	imgW=web.img_Id.width();
			// 	imgH=web.img_Id.height();
				
			// 	//改变图片尺寸，这个根据自己的实际需求来写算法
			// 	if(imgW>imgMax&&imgW>=imgH){
			// 		expW=imgMax;
			// 		expH=parseInt((imgMax*imgH)/imgW);
			// 	}else if(imgH>imgMax&&imgH>imgW){
			// 		expH=imgMax;
			// 		expW=parseInt((imgMax*imgW)/imgH);
			// 	}else{
			// 		expW=imgW;
			// 		expH=imgH;
			// 	}
				
			// 	web.c.width=expW;
			// 	web.c.height=expH;
				
			// 	web.ctx.drawImage(web.img_Id[0],0,0,expW,expH);
				
			// 	imgDataUrl=web.c.toDataURL(); //默认输出PNG格式
			// 	//imgDataUrl=web.c.toDataURL("image/jpeg",0.8); //设置输出jpg格式，第二个参数为图片质量
            //     web.expImg_Id[0].src=imgDataUrl;
            //     console.log(web)
			// }
		})
	}
}