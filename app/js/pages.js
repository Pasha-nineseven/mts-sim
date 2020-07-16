// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="index-error.html">Index-error</a></li> \
		<li><a href="step1.html">Step1</a></li> \
		<li><a href="step2.html">Step2</a></li> \
		<li><a href="step3.html">Step3</a></li> \
		<li><a href="step3-info.html">Step3-info</a></li> \
	</ol> \
</div>');