#target illustrator
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"HueShiftPalette","windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Hue Shift Palette","preferredSize":[3,9],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-4":{"id":4,"type":"Button","parentId":15,"style":{"enabled":true,"varName":"checkReturnsBtn","text":"Check returns","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-5":{"id":5,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"street","text":"Street: #f4f4f4 to #ebebeb","preferredSize":[0,0],"alignment":"left","helpTip":null}},"item-7":{"id":7,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"colorSwapPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Color Swapping","preferredSize":[250,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-8":{"id":8,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"grass","text":"Grass: #eef2ed to #d9e5d3","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"trails","text":"Trails: #e4e7e4 to #e9ece9","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"golf","text":"Golf:  #ced8d0 to #c5d4be","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"altGolf","text":"Alt Golf: #d8e0d9 to #c5d4be","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"lake","text":"Lakes: #bddbf2 to #93cee5","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Checkbox","parentId":7,"style":{"enabled":true,"varName":"building","text":"Buildings: #d6d2cb to #d1c9bc","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Button","parentId":7,"style":{"enabled":true,"varName":"swapColorsBtn","text":"Swap Selected Colors","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-15":{"id":15,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"checkReturnsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Check returns","preferredSize":[250,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-16":{"id":16,"type":"StaticText","parentId":15,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Remove any soft returns","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":null}},"item-17":{"id":17,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"courtsPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Adjust courts","preferredSize":[250,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-18":{"id":18,"type":"Button","parentId":17,"style":{"enabled":true,"varName":"selectCourtsBtn","text":"Select courts","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-19":{"id":19,"type":"StaticText","parentId":17,"style":{"enabled":true,"varName":"courtTxt","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Make courts #ccd5cc","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-20":{"id":20,"type":"Button","parentId":17,"style":{"enabled":true,"varName":"changeCourtsBtn","text":"Change courts","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-21":{"id":21,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-22":{"id":22,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-23":{"id":23,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"hideHomesitesPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Hide homesites","preferredSize":[250,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-24":{"id":24,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-25":{"id":25,"type":"Button","parentId":23,"style":{"enabled":true,"varName":"hideHomesitesBtn","text":"Hide","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-26":{"id":26,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-27":{"id":27,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"exportPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Export","preferredSize":[250,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-28":{"id":28,"type":"Button","parentId":27,"style":{"enabled":true,"varName":"exportBtn","text":"Export SVG","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}}},"order":[0,15,16,4,22,7,5,8,9,10,11,12,13,14,21,17,18,19,20,24,23,25,26,27,28],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 
//#target Illustrator
//#target illustrator-28;

#targetengine main; 

//DEFINE WORKING DOCUMENT
var myDoc = app.activeDocument;

//**** REPLACE SOFT RETURN ****
//FIND soft return replace with hard return
// ai translates soft returns into asciII ETX for "end of text" which is CharCode(3)
//CONNECT TO checkReturnsBtn
function replaceSoftRet(){
    var search_string = String.fromCharCode(3); // ETX asciII
    var replace_string = "\r";//regex for hard return
    var text_frames = myDoc.textFrames;
    var this_text_frame, this_text_frame;
    //loop through text frames for a find and replace
    if (text_frames.length > 0) {
    for (var i = 0 ; i < text_frames.length; i++) {
            this_text_frame = text_frames[i];
            new_string = this_text_frame.contents.replace(search_string, replace_string);
            this_text_frame.contents = new_string;
    }
    }
}
//* * * * * * * * * * * * * * * * *
//function to test connection to check box hueShift - SAVE TO TEST OTHER CHECKBOXES IF NEEDED
function testCheckbox(){
    if (lake.value === true) {
    // Checkbox is checked
    // Perform some action
    alert("Checkbox is checked!");
} else {
    // Checkbox is not checked
    // Perform some other action
    alert("Checkbox is not checked!");
}}
//* * * * * * * * * * * * * * * * *

//ADDING FUNCTION FOR SINGLE COLOR BUT WILL NEED TO CHANGE TO MAKE IT DRY FOR ALL COLORS

function colorSwapNow(){
      if (lake.value === true) {
        var myDoc = app.activeDocument;
        var swatch = findSpotSwatchByName(myDoc, "Lakes");

        // Function to find a spot color swatch by name
        function findSpotSwatchByName(doc, name) {
            for (var i = 0; i < doc.spots.length; i++) {
                if (doc.spots[i].name === name) {
                    return doc.spots[i];
                }
            }
            return null; // Swatch not found
        }

        // Check if swatch is found and update color if needed
        if (swatch !== null) {
            swatch.color = makeSpotColor(147, 206, 229);
        } else {
            alert("Swatch named 'Lakes' not found!");
        }

        // Function to update the color of an existing spot color swatch
        function makeSpotColor(red, green, blue) {
            var newColor = new RGBColor();
            newColor.red = red;
            newColor.green = green;
            newColor.blue = blue;

            return newColor;
        }
    }
};









// HUESHIFTPALETTE
// ===============
var HueShiftPalette = new Window("palette"); 
    HueShiftPalette.text = "Hue Shift Palette"; 
    HueShiftPalette.preferredSize.width = 3; 
    HueShiftPalette.preferredSize.height = 9; 
    HueShiftPalette.orientation = "column"; 
    HueShiftPalette.alignChildren = ["left","top"]; 
    HueShiftPalette.spacing = 10; 
    HueShiftPalette.margins = 16; 

// CHECKRETURNSPANEL
// =================
var checkReturnsPanel = HueShiftPalette.add("panel", undefined, undefined, {name: "checkReturnsPanel"}); 
    checkReturnsPanel.text = "Check returns"; 
    checkReturnsPanel.preferredSize.width = 250; 
    checkReturnsPanel.orientation = "column"; 
    checkReturnsPanel.alignChildren = ["left","top"]; 
    checkReturnsPanel.spacing = 10; 
    checkReturnsPanel.margins = 10; 

var statictext1 = checkReturnsPanel.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Remove any soft returns"; 
    statictext1.alignment = ["fill","top"]; 

var checkReturnsBtn = checkReturnsPanel.add("button", undefined, undefined, {name: "checkReturnsBtn"}); 
    checkReturnsBtn.text = "Check returns"; 
    checkReturnsBtn.alignment = ["center","top"]; 

// HUESHIFTPALETTE
// ===============
var divider1 = HueShiftPalette.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// COLORSWAPPANEL
// ==============
var colorSwapPanel = HueShiftPalette.add("panel", undefined, undefined, {name: "colorSwapPanel"}); 
    colorSwapPanel.text = "Color Swapping"; 
    colorSwapPanel.preferredSize.width = 250; 
    colorSwapPanel.orientation = "column"; 
    colorSwapPanel.alignChildren = ["left","top"]; 
    colorSwapPanel.spacing = 10; 
    colorSwapPanel.margins = 10; 

var street = colorSwapPanel.add("checkbox", undefined, undefined, {name: "street"}); 
    street.text = "Street: #f4f4f4 to #ebebeb"; 
    street.alignment = ["left","top"]; 

var grass = colorSwapPanel.add("checkbox", undefined, undefined, {name: "grass"}); 
    grass.text = "Grass: #eef2ed to #d9e5d3"; 

var trails = colorSwapPanel.add("checkbox", undefined, undefined, {name: "trails"}); 
    trails.text = "Trails: #e4e7e4 to #e9ece9"; 

var golf = colorSwapPanel.add("checkbox", undefined, undefined, {name: "golf"}); 
    golf.text = "Golf:  #ced8d0 to #c5d4be"; 

var altGolf = colorSwapPanel.add("checkbox", undefined, undefined, {name: "altGolf"}); 
    altGolf.text = "Alt Golf: #d8e0d9 to #c5d4be"; 

var lake = colorSwapPanel.add("checkbox", undefined, undefined, {name: "lake"}); 
    lake.text = "Lakes: #bddbf2 to #93cee5"; 

var building = colorSwapPanel.add("checkbox", undefined, undefined, {name: "building"}); 
    building.text = "Buildings: #d6d2cb to #d1c9bc"; 

var swapColorsBtn = colorSwapPanel.add("button", undefined, undefined, {name: "swapColorsBtn"}); 
    swapColorsBtn.text = "Swap Selected Colors"; 
    swapColorsBtn.alignment = ["center","top"]; 

// HUESHIFTPALETTE
// ===============
var divider2 = HueShiftPalette.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

// COURTSPANEL
// ===========
var courtsPanel = HueShiftPalette.add("panel", undefined, undefined, {name: "courtsPanel"}); 
    courtsPanel.text = "Adjust courts"; 
    courtsPanel.preferredSize.width = 250; 
    courtsPanel.orientation = "column"; 
    courtsPanel.alignChildren = ["left","top"]; 
    courtsPanel.spacing = 10; 
    courtsPanel.margins = 10; 

var selectCourtsBtn = courtsPanel.add("button", undefined, undefined, {name: "selectCourtsBtn"}); 
    selectCourtsBtn.text = "Select courts"; 
    selectCourtsBtn.alignment = ["center","top"]; 

var courtTxt = courtsPanel.add("statictext", undefined, undefined, {name: "courtTxt"}); 
    courtTxt.text = "Make courts #ccd5cc"; 
    courtTxt.preferredSize.width = 250; 

var changeCourtsBtn = courtsPanel.add("button", undefined, undefined, {name: "changeCourtsBtn"}); 
    changeCourtsBtn.text = "Change courts"; 
    changeCourtsBtn.alignment = ["center","top"]; 

// HUESHIFTPALETTE
// ===============
var divider3 = HueShiftPalette.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.alignment = "fill"; 

// HIDEHOMESITESPANEL
// ==================
var hideHomesitesPanel = HueShiftPalette.add("panel", undefined, undefined, {name: "hideHomesitesPanel"}); 
    hideHomesitesPanel.text = "Hide homesites"; 
    hideHomesitesPanel.preferredSize.width = 250; 
    hideHomesitesPanel.orientation = "column"; 
    hideHomesitesPanel.alignChildren = ["left","top"]; 
    hideHomesitesPanel.spacing = 10; 
    hideHomesitesPanel.margins = 10; 

var hideHomesitesBtn = hideHomesitesPanel.add("button", undefined, undefined, {name: "hideHomesitesBtn"}); 
    hideHomesitesBtn.text = "Hide"; 
    hideHomesitesBtn.alignment = ["center","top"]; 

// HUESHIFTPALETTE
// ===============
var divider4 = HueShiftPalette.add("panel", undefined, undefined, {name: "divider4"}); 
    divider4.alignment = "fill"; 

// EXPORTPANEL
// ===========
var exportPanel = HueShiftPalette.add("panel", undefined, undefined, {name: "exportPanel"}); 
    exportPanel.text = "Export"; 
    exportPanel.preferredSize.width = 250; 
    exportPanel.orientation = "column"; 
    exportPanel.alignChildren = ["left","top"]; 
    exportPanel.spacing = 10; 
    exportPanel.margins = 10; 

var exportBtn = exportPanel.add("button", undefined, undefined, {name: "exportBtn"}); 
    exportBtn.text = "Export SVG"; 
    exportBtn.alignment = ["center","top"]; 

 //PLACE ALL BUTTON EVENTS HERE
//add event listener, use BridgeTalk to communicate with the active document from a palette. Assign desired actions/function to bt.body
checkReturnsBtn.onClick = function() {

    var bt=new BridgeTalk();
    bt.target = "illustrator-28";
    bt.body = 'replaceSoftRet()';
    return bt.send();
}
//swapColorsBtn
swapColorsBtn.onClick = function() {

    var bt=new BridgeTalk();
    bt.target = "illustrator-28";
    bt.body = 'colorSwapNow()';
    return bt.send();
}

 //SHOW PALETTE   

HueShiftPalette.show();

