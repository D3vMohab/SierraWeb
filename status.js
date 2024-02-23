
  async function fetchStatus() {
try {
	// Start Downloading
const response = await fetch('https://sierra.app/c.mobileprovision')
 const data = await response.blob();
	if (response.status == 404) {
	        document.getElementById("status").innerHTML = "Error";
	        document.getElementById("status").style.color="red";
		 return;
	}
 // Create Virtual File with the downloaded data!
	let file = new File([data], "tmp.mobileprovision");
	// Uploading Parameters
	let formData = new FormData();
	formData.append("mp", file);
	// Upload MB to check status
	const status = await fetch('https://ios.100-bt.cn/Index/check_p12', {method: "POST", body: formData});
	const json = JSON.parse(await status.text());
	if (json.state == "正常") {
		document.getElementById("status").innerHTML = "Signed";
			document.getElementById("status").style.color="lightgreen";
	} else if (json.state = "撤销") {
		document.getElementById("status").innerHTML = "Revoked";
			document.getElementById("status").style.color="red";
	} else {
		document.getElementById("status").innerHTML = "Error";
			document.getElementById("status").style.color="red";
	}
} catch (error) {
    document.getElementById("status").innerHTML = "Error";
	document.getElementById("status").style.color="red";
    
}
}
// Call Function
fetchStatus();
