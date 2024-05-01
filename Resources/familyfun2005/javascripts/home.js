

 /* rollovers
    ========================================================================================================================== */
   
    if( document.images )
    {    
        // cache all images

        siteMap     = new Image();
        siteMap_ro  = new Image();
        find        = new Image();
        find_on     = new Image();        
        bullet1     = new Image();
        bullet1_ro  = new Image();
        bullet2     = new Image();
        bullet2_ro  = new Image();
        

        siteMap.src     = "http://familyfun.go.com/Resources/familyfun2005/images/home/text_site-map.gif";
        siteMap_ro.src  = "http://familyfun.go.com/Resources/familyfun2005/images/home/text_site-map_on.gif";    
        find.src        = "http://familyfun.go.com/Resources/familyfun2005/images/home/button_find.gif";    
        find_on.src     = "http://familyfun.go.com/Resources/familyfun2005/images/home/button_find_on.gif";
        bullet1.src     = "http://familyfun.go.com/Resources/familyfun2005/images/home/bullet_green.gif";
        bullet1_ro.src  = "http://familyfun.go.com/Resources/familyfun2005/images/home/bullet_green_ro.gif";
        bullet2.src     = "http://familyfun.go.com/Resources/familyfun2005/images/home/bullet_green.gif";
        bullet2_ro.src  = "http://familyfun.go.com/Resources/familyfun2005/images/home/bullet_green_ro.gif";
    }



    // use of eval() saves us coding

    function buttonOn( imageName ) { if( document.images ) document[ imageName ].src = eval( imageName + "_ro.src" ); }
    function buttonOff( imageName ) { if( document.images ) document[ imageName ].src = eval( imageName + ".src" ); }


    function updateHighlight( searchField )
    {
        if( document.images )
        {
          if( trimWhiteSpaces( searchField.value ) != "" ) document.getElementById( 'find' ).src = find_on.src;
          else document.getElementById( 'find' ).src = find.src;
        } 
    }




 /* validation
    ========================================================================================================================== */
   
    function validateSearch( searchForm )
    {
        trimmedValue = trimWhiteSpaces( searchForm.q.value );

        if( trimmedValue != "" )
        {
            searchForm.q.value = trimmedValue;
            return true;
        }
        else
          return false;
    }



    // trim leading and trailing white spaces
    function trimWhiteSpaces( str )
    {
        return str.replace( /^\s+/g, '' ).replace( /\s+$/g, '' );
    }
 
 
 
 
 /* navigation
    ========================================================================================================================== */
   
    function jumpListGo( URLs )
    {        
        var selectedIndex = URLs.selectedIndex;
        
        if( URLs[ selectedIndex ].value == "" ) 
          return;
        
        // add hitbox entry
        try
        {
          hitbox.Set_hbSet( 'lid', "HomeDropdown/" + URLs.name );
          hitbox.Set_hbSet( 'lpos', URLs[ selectedIndex ].text );
          hitbox.Set_hbSend();
        }
        catch( e ) {}        
        
        // now redirect
        window.location.href = URLs[ selectedIndex ].value;
    }
    
    
    
    function resetJumpLists()
    {
        document.forms[ "jumpList1" ].I_Want_Ideas_For.selectedIndex = 0;
        document.forms[ "jumpList2" ].My_Child_Is_Crazy_About.selectedIndex = 0;
        document.forms[ "jumpList3" ].I_Am_A.selectedIndex = 0;
    }


    function replaceText1( object ) { object.I_Want_Ideas_For.options[0].text = 'Please choose:'; }
    function resetText1( object ) { object.I_Want_Ideas_For.options[0].text = '6- to 8-year-olds'; document.forms[ "jumpList1" ].I_Want_Ideas_For.selectedIndex = 0; }
    function replaceText2( object ) { object.My_Child_Is_Crazy_About.options[0].text = 'Please choose:'; }
    function resetText2( object ) { object.My_Child_Is_Crazy_About.options[0].text = 'Princesses'; document.forms[ "jumpList2" ].My_Child_Is_Crazy_About.selectedIndex = 0; }
    function replaceText3( object ) { object.I_Am_A.options[0].text = 'Please choose:'; }
    function resetText3( object ) { object.I_Am_A.options[0].text = 'Teacher'; document.forms[ "jumpList3" ].I_Am_A.selectedIndex = 0; }
