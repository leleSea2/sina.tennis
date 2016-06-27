<?php
	$checkcode="";
	for($i=0;$i<4;$i++){
		$checkcode.=dechex(rand(0,15));
	}
	$_SESSION['checkcode']=$checkcode;
	$str="1234";
	$img=imagecreatetruecolor(102,36);
	$color=imagecolorallocate($img,rand(0,255),rand(0,255),rand(0,255));
	$white=imagecolorallocate($img,255,255,255);
	$black=imagecolorallocate($img,0,0,0);
	$gray=imagecolorallocate($img,200,200,200); 
	imagefill($img,0,0,$gray);
	imagerectangle($img,0,0,(102-1),(36-1),$black);
	 for ($i = 0; $i < 80; $i++) { 
        imagesetpixel($img, rand(0, 102), rand(0, 36), $black); 
    } 

	imagestring($img,5,30,10,$checkcode,$color);
	ob_clean();
	header("content-type:image/png");
	imagepng($img);
	imagedestroy($img);
?>