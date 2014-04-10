// JavaScript Document

function generateop()
{
	var iFrame = $("<iframe id=\"opframe\" width=\"100%\" height=\""+$(".clm").height()+"\" frameborder=\"0\"></iframe>");
	$('#op').html(iFrame);
	var iFrameDoc = iFrame[0].contentDocument || iFrame[0].contentWindow.document;
	iFrameDoc.write("<html><head><style type=\"text/css\">"+ document.getElementById("textcss").value +"</style><script type=\"text/javascript\">"+ document.getElementById("textjs").value +"</script></head><body>"+ document.getElementById("texthtml").value +"</body></html>");
	iFrameDoc.close();
}
