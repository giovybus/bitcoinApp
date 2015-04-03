<?php 
	/**
	*
	*	pagina creata per evitare 
	*	no 'access-control-allow-origin'
	*
	*/
	$response = file_get_contents('http://blockchain.info/it/ticker');

    echo $response
?>