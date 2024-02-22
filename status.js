<script>
  async function status() {
try {
	// Start Downloading
const response = await fetch('https://sierra.app/c.mobileprovision')
 const data = await response.blob();
 // Create Virtual File with the downloaded data!
	let file = new File([data], "tmp.mobileprovision");
	// Uploading Parameters
	let formData = new FormData();
	formData.append("mp", file);
	// Upload MB to check status
	const status = await fetch('https://ios.100-bt.cn/Index/check_p12', {method: "POST", body: formData});
	const json = JSON.parse(await status.text());
	if (json.state == "正常") {
		console.log("Signed");
	} else { console.log("REVOKED");}
} catch (error) {
    console.log("ERROR");
    
}
}
tmp();
</script>
