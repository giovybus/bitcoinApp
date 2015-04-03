<?php 
	/**
	*
	*	pagina creata per evitare 
	*	no 'access-control-allow-origin'
	*
	*/
    $yourToken = "";
	$response = file_get_contents('https://mining.bitcoin.cz/accounts/profile/json/' . $yourToken);

    echo $response
?>