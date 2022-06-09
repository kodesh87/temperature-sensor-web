	function getSuhu(){
		$.ajax({
			url: 'http://localhost/tmw/script/get.php',
			//url: 'http://wirasihombing.rumahweb.org/script/get.php',
			//url: 'http://testing.hostzi.com/script/get.php',
			//url: 'http://terrysitumorang2.tk/script/get.php',
			success: function(data) {
				$temp = data.substring(0,2);
				$updateInfo = data.substring(2,22);
				
				//$("#suhu").html(data+"<span id='derajat'>o</span><span id='celcius'>C</span>");
				$("#suhu").html($temp+"<span id='derajat'>o</span><span id='celcius'>C</span>");
				$("#updatestatus").html("last update: " + $updateInfo);
				setTimeout("getSuhu()",100);
			}
		});
	}
		
	$(document).ready(function () {
		getSuhu();
	});