/**
	contentHtml:自定义内容（包括标题、图片、提示内容等，弹出框按钮除外的内容）
	btnOkText：确认按钮，如不需要用''（空字符）代替
	btnCancelText：取消按钮，如不需要用''（空字符）代替
	okCallback：确认按钮点击回调函数
*/
function dialog(contentHtml,btnOkText,btnCancelText,okCallback){
	var _html = '<div class="dialog-mobile-cover">\
					<div class="dialog-content">\
						<div class="dialog-inner-content">\
						</div>\
						<div class="dialog-btn-container">\
							<a href="javascript:void(0);" class="dialog-ok">确定</a>\
							<a href="javascript:void(0);" class="dialog-cancel">取消</a>\
						</div>\
					</div>\
				</div>';
	$('.dialog-mobile-cover').remove();
	$('body').append(_html);


	$('.dialog-inner-content').html(contentHtml);


	if(btnOkText == '' || btnOkText == null){
		$('.dialog-btn-container .dialog-ok').hide();
	}else{
		$('.dialog-btn-container .dialog-ok').text(btnOkText).on('click',function(){
			$('.dialog-mobile-cover').remove();
			if(typeof okCallback == 'function'){
				okCallback();
			}
		});
	}


	if(btnCancelText == '' || btnCancelText == null){
		$('.dialog-btn-container .dialog-cancel').hide();
	}else{
		$('.dialog-btn-container .dialog-cancel').text(btnCancelText).on('click',function(){
			$('.dialog-mobile-cover').remove();
		});
	}

	if((btnOkText == '' || btnOkText == null) && (btnCancelText == '' || btnCancelText == null)){
		$('.dialog-btn-container').hide();
		$('.dialog-mobile-cover').on('click',function(){
			$('.dialog-mobile-cover').remove();
		});
	}
}