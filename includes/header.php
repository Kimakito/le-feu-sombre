<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($title) ? $title : "Ikami"; ?></title>
    <link rel="icon" href="/assets/images/logos/favicon.ico" type="image/x-icon">
    <link type="text/css" rel="preload" href="/assets/css/output.css?v=1.0" as="style" onload="this.rel='stylesheet'">

    <!-- Fonts -->
    <link rel="stylesheet" href="/assets/icomoon/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;800&family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">

    <!--Swiper-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>

    <script src="/assets/js/utils.js"></script>
</head>

<!--
//echo '<link rel="stylesheet" href="src/output.css?' . filemtime('src/output.css') . '">';
//        echo '<img src=img/annonce/23572_1.jpg"?' . filemtime('src="img/annonce/23572_1.jpg"') . '" alt="Image">';
//		
//		ou 
//			
//	    $image_url = 'img/annonce/23572_1.jpg';
//		echo '<img src="' . $image_url . '?' . filemtime($image_url) . '" alt="Image">';-->