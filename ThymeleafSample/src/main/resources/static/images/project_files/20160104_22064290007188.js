<!-- LOGGER SCRIPT FOR SETTING ENVIRONMENT V.27 :  / FILL THE VALUE TO SET. -->
<!-- COPYRIGHT (C) 2002-2016 BIZSPRING INC. LOGGER(TM) ALL RIGHTS RESERVED. -->

/* FOR BIZ., COM. AND ENT. SERVICE. */
var title = $(document).attr("title");

var titles = title.split(">");
var newtitle = "";
for(i=0; i<titles.length; i++){
    newtitle = newtitle + "/" + titles[i].replace(/(^\s*)|(\s*$)/gi, "");
}
console.log(newtitle);
_TRK_CP = newtitle; /* Contents Path */
_TRK_PI = ""; /* Page Identity */
_TRK_PN = ""; /* Product Name */
_TRK_MF = ""; /* Manufacture Name */
_TRK_OA = ""; /* Order Amount(s) with ';' Separated */
_TRK_OP = ""; /* Order Product(s) with ';' Separated */
_TRK_OE = ""; /* Order EA with ';' Separated */
_TRK_CC = ""; /* Campaign Code */
_TRK_RK = ""; /* Reserved Key */
_TRK_SX = ""; /* Members Gender - M,F,U */
_TRK_AG = ""; /* Member Age - A,B,C,D,E,F,G */
_TRK_IK = ""; /* Inner Search Keyword */

<!-- END OF ENVIRONMENT SCRIPT -->

