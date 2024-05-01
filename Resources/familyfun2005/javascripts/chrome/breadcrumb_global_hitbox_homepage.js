
  bCrumbLevel_1 = "FamilyFun";

  if( peelback )
  {
    cell1 = 335;
    cell2 = 190;

    document.write( '<!-- CHROME -->' );
    document.write( '<link rel="stylesheet"  href="http://familyfun.go.com/Resources/familyfun2005/css/chrome.css" type="text/css">' );
    document.write( '<table id="chromeContainer" width="770" cellpadding="0" cellspacing="0">' );
    document.write( ' <tr>' );
    document.write( '   <td align="left" valign="center" width="127" height="25">&nbsp;</td>' );
    document.write( '   <td align=left width=' + cell1 + '>&nbsp;</td>' );
    document.write( '   <td align="right" width=128>&nbsp;</td>' );
    document.write( '   <td width=' + cell2 + ' align="center"><img src="http://adimages.go.com/ad/sponsors/blank/blank.gif" width="' + cell2 + '" height="1" border="0"></td>' );
    document.write( ' </tr>' );
    document.write( '</table>' );
    document.write( '<!-- END OF CHROME -->' );  
  }


  // GLOBAL JAVASCRIPT INCLUDE FILE FOR ALL SPONSORSHIP SITES

  // This is the global popDisclaimer function for ad served elements
  function deliverPopDisclaimer( mLink ) 
  {
    var popDisclaimer = window.open( "","disclaimer","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=370,height=210,top=100,left=150,screenX=180,screenY=100" );
    popDisclaimer.document.write( '<html><head><title>FamilyFun.com - Disclaimer</title>' );
    popDisclaimer.document.write( '<SCR'+'IPT TYPE="text/javascript" LANGUAGE="JavaScript">' );
    popDisclaimer.document.write( 'sendTimer = setTi'+'meout( "sendToClientSide()",1500);closeTimer = setT'+'imeout( "window.close()",45000);' );
    popDisclaimer.document.write( 'func'+'tion sendToCl'+'ientSide(){window.op'+'en( "'+mLink+'" ); this.focus();}' );
    popDisclaimer.document.write( '</scr'+'ipt>' );
    popDisclaimer.document.write( '</head><body bgcolor="#FFFFFF" text="#0065CE" link="#FFFF80" vlink="#FFFF80" alink="#FFFF80" leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>' );
    popDisclaimer.document.write( '<table width="370" height="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><img src="/Resources/global/ff_disclaimer_top.gif" width="370" height="27" alt="" border="0"></td></tr><tr><td><table width="330" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td><br><FONT FACE="Verdana,sans-serif" SIZE="2" COLOR="#0065CE"><b>The web site you are about to link to is not controlled by FamilyFun.com and different terms of use and privacy policy will apply. By proceeding you agree and understand that FamilyFun.com is not responsible for the site you are about to access.</b></FONT><br><br><FONT FACE="Verdana,sans-serif" SIZE="2" COLOR="red"><b>If the window does not open, <a href="'+mLink+'" target="_blank"><FONT FACE="Verdana,sans-serif" SIZE="2" COLOR="red">click here</A></font><FONT FACE="Verdana,sans-serif" SIZE="2" COLOR="red">.</b></font></td></tr></table>' );
    popDisclaimer.document.write( '</td></tr><tr bgcolor="#ffffff"><td align="center" height="20"><a href="javascript:window.close();"><FONT FACE="Verdana,sans-serif" SIZE="1" COLOR="#006699"><b>Close this window</b></font></a><BR></td></tr></table>' );
    popDisclaimer.document.write( '</body></html>' );
    popDisclaimer.document.close();
    //  alert(mLink)
  }


  // Netscape 4.0 redirect
  document.write( '<script language="javascript">' );
  document.write( '   if( !document.getElementById ) top.location.replace( "http://disney.go.com/home/html/index.html" );' );
  document.write( '</script>' );