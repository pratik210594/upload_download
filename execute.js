function execute()
{
	var upload = document.getElementById('name');
	
	console.log(upload.files[0].name);
	
	const formData = new FormData();
	formData.append("name", upload.files[0]);
	
	fetch("save.php",{
		
		   
           method: "post",
           body: formData
           
	}).catch(console.error);
}