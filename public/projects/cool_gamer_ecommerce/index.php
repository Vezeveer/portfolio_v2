
<?php
  $title = "Home";
  $ha = "active";

?>

<!--main header-->
<?php include  $_SERVER["DOCUMENT_ROOT"] . '/ecommerce/inc/header.php' ; ?>
<?php include  $_SERVER["DOCUMENT_ROOT"] . '/ecommerce/inc/menu.php' ; ?>
<!--page info-->

<!-- body-->
<!--latest game-->
<div>
  <div class="latestgamestitle"><h2>Latest Games</h2></div>
  <div class="latestgames col">
    <img class="col-md-3 latestgimg" src="/ecommerce/imgs/fortniteposter.jpg"/>
    <img class="col-md-3 latestgimg" src="/ecommerce/imgs/fortniteposter.jpg"/>
    <img class="col-md-3 latestgimg" src="/ecommerce/imgs/fortniteposter.jpg"/>
    <img class="col-md-3 latestgimg" src="/ecommerce/imgs/fortniteposter.jpg"/>
  </div>
</div>
<!--container-->
<div class="left">
  <div><h2 class="divhead">Title</h2></div>
</div>


<!--sidebar-->
<div class="right">
  <?php include  $_SERVER["DOCUMENT_ROOT"] . '/ecommerce/inc/sidebar.php' ; ?>
</div>

<!--footer-->
<?php include  $_SERVER["DOCUMENT_ROOT"] . '/ecommerce/inc/footer.php' ; ?>