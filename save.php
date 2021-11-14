<?php

$targetpath = "C:/xampp/htdocs/fileupload_download/". basename($_FILES["name"]["name"]);
echo $targetpath;
move_uploaded_file($_FILES['name']['tmp_name'], $targetpath)


?>