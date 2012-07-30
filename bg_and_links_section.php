<?php
function putLinksSectionItem($id, $alt, $link) {
    $isThisPage = ($link == $_SERVER["DOCUMENT_URI"]);
    if (! $isThisPage) {
        printf("<a href=\"%s\">", $link);
    }
    printf("<img id=\"link_%s\" src=\"new/%s_link%s.png\" alt=\"%s\" />", $id, $id, $isThisPage ? "h" : "", $alt);
    if (! $isThisPage) {
        printf("</a>");
    }
}
?>

<img id="bgimage" src="new/background1.jpg" alt="background1"/>
<img id="curtaintop" src="new/background2top.png" alt="background2"/>
<img id="curtainbottom" src="new/background2bottom.png" alt="background2"/>

<div id="links_section">
<?php
    putLinksSectionItem("aboutus", "О нас", "/index.php");
    putLinksSectionItem("performances", "Выступления", "/performances.php");
    putLinksSectionItem("contacts", "Наши контакты", "/contacts.php");
    putLinksSectionItem("archive", "Архив", "/archive/repert.htm");
?>
</div>

<script type="text/javascript">registerNavigationMenuAlligner()</script>