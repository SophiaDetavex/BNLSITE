var locHref = location.href;
var locHref = locHref.toString();
var fooInd = locHref.indexOf("_msn");
var fooTwo = locHref.indexOf("sdk=msn");
	//MSN Function

function gotosite(site, activeSelect) {
	if (site != "") {
		activeSelect.selectedIndex=0;
		self.location=site;
	}
}
function BuildOption(){
var opt = "";
for(i=0;i<optionAr.length;i++){
	opt += "<option value = '" + optLinksAr[i] + "'>" + optionAr[i] + "</option>"
}
return opt;

}

function sdkBuild(){
sdkType = "family"

if(sdkType == "family"){
msnCode = "CD"
topId = "Family"
topLink = "http://family.msn.com"
cc = "orange"
optionAr = new Array();
optionAr[0] = "Health & Safety"
optionAr[1] = "Learning"
optionAr[2] = "Family Roots"
optionAr[3] = "Baby & Pregnacy"
optLinksAr = new Array();
optLinksAr[0] = "http://www.family.msn.com/hsy/default.aspx?dept=health";
optLinksAr[1] = "http://family.msn.com/lea/default.aspx?dept=learn";
optLinksAr[2] = "http://family.msn.com/frs/default.aspx?dept=familyr";
optLinksAr[3] = "http://www.family.msn.com/bpc/default.aspx?dept=baby";
menueAr = new Array();
menueAr[0] = "Crafts & Activities";
menueAr[1] = "Raising Kids"
menueLinkAr = new Array();
menueLinkAr[0] = "http://family.msn.com/cas/default.aspx?dept=crafts";
menueLinkAr[1] = "http://family.msn.com/rks/default.aspx?dept=raising";
}
	//End MSN Function
sdkAr=new Array()
//--MSN UX HEADER CODE BEGINS HERE-->
sdkAr[0] = '<link rel="stylesheet" type="text/css" href="http://sc.msn.com/global/css/ptnr/'+cc+'.css">'
sdkAr[1] = '<style>body{background-color:#ffffff}.sf {font:11px tahoma, sans-serif;background-color:#D64300;color:#FFFFFF}.big7 {font:11px tahoma, sans-serif;background:#D64300;color:#FFFFFF}</style>'

sdkAr[2] = '<table class="sf" width="100%" cellpadding="0" cellspacing="0" border="0">'
sdkAr[3] = '<tr>'
sdkAr[4] = '<td width="118"><a href="http://g.msn.com/0nwenus0/'+msnCode+'/14" target="_top"><img src="http://logo.msn.com/en-us/dark/logo35.gif" width="118" height="35" border="0" alt="go to MSN.com" title="go to MSN.com" align="absMiddle"></a></td>'
sdkAr[5] = '<td class="sflptrn" width="*" valign="bottom"><a href="'+topLink+'">'+topId+'</a></td>'
sdkAr[6] = '<form>'
sdkAr[7] = '<td class="sflrptrn" width="100%" valign="bottom" height="30">'
//--- Begin Menu Links ---- [MSN PARTNER TO MODIFY] To replace with the property-specific persistent menu links ---->
sdkAr[8] = '<a href="' +menueLinkAr[0] +'">' + menueAr[0] + '</a>&nbsp;&nbsp;|&nbsp;&nbsp; <a href="'+menueLinkAr[1]+'">'+menueAr[1]+'</a>&nbsp;&nbsp;'
sdkAr[9] = '<select class="sfdd" onchange="javascript:gotosite(this.options[this.selectedIndex].value, this);" id="Select2" name=select2>'
sdkAr[10] = '<option value="" selected>More...</option>';
sdkAr[11] = BuildOption()
sdkAr[12] = '</select><br>'
//--- End Menu Links --->
sdkAr[13] = '<div style="WIDTH:1px;HEIGHT:4px"><spacer type="block" height="4" /></div>'
sdkAr[14] = '</td>'
sdkAr[15] = '</form>'
sdkAr[16]= '</td>'
sdkAr[17] = '</tr>'
sdkAr[18] = '</table>'

// declared at the head of the script (fooInd)
	if(fooInd != -1 || fooTwo != -1){
		//from MSN
		if(sdkType != "kidz"){
					if (navigator.appName.indexOf('WebTV') != -1) {
					document.write('<embed src="wtv-tricks:/msndispatch?type=tv-navbar-insert&amp;loc=top-navbar" height="33" width="544"></embed>');
					} else {
					document.write('<div class="dMSNME_1"><table width="100%" height="30" cellpadding="0" cellspacing="1" class="big7" border="0"><form id="form1" name="form1" method="get" action="http://g.msn.com/0nwenus0/'+msnCode+'/16"><input type="hidden" name="cp" value="1252" /><tr><td align="left" valign="middle" width="450">&nbsp;&nbsp;<a href="http://g.msn.com/0nwenus0/'+msnCode+'/00">MSN&nbsp;Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://g.msn.com/0nwenus0/'+msnCode+'/01">My&nbsp;MSN</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://g.msn.com/0nwenus0/'+msnCode+'/02">Hotmail</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://g.msn.com/0nwenus0/'+msnCode+'/04">Shopping</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://g.msn.com/0nwenus0/'+msnCode+'/05">Money</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://g.msn.com/0nwenus0/'+msnCode+'/06">People&nbsp;&amp;&nbsp;Chat</a></td><td width="66"><!-- TODO: PARTNER - INSERT DYNAMIC CODE HERE TO DISPLAY PASSPORT SIGNIN/SIGNOUT LOGO--><!--Removed Passport Sign in--></td><td width="*" align="right" nowrap>Web&nbsp;Search:&nbsp;&nbsp;<input type="text" name="q" size="14" maxlength="150" style="width:46%;" />&nbsp;<input type="submit" id="submit1" name="submit1" size="4" class="GoBtn" value="Go" /></td></tr><input type="hidden" name="FORM" value="'+msnCode+'" /></form></table></div>');
				}
		}
	//end from MSN
		for(i=0;i<sdkAr.length;i++){
			document.write(sdkAr[i])
			}
		}

	}