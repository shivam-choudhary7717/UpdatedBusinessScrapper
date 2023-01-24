
function ScrapperTest(Name , page){
    switch(Name) {
        case "zomato":
            page.goto(
                `https://magicpin.in`
            );
        case "swiggy":
            console.log("swiggy test");
        case "magicpin":
            console.log("magicpin test");
        default :
           console.log("Field Name not found");
    }
}

module.exports = {
    ScrapperTest,
}


// switch (DataFieldType) {
//     case "Switch":
//         let BooleanField = new CMSBooleanField()
//         return await BooleanField.getEditModeWithoutHelp(DataFieldType, Element,Mode);
//     case "Time":
//         let TimeField = new CMSTimeField();
//         return await TimeField.getCMSTime(DataFieldType, Element);
//     case "TextField":
//         let TextField = new CMSTextField();
//         return await TextField.getTextField(DataFieldType, Element, Mode);
//     case "LocalizedTextField":
//         let LocalizedTextField = new CMSLocalizedTextField();
//         return await LocalizedTextField.getEditMode(DataFieldType, Element , Langcode);
//     case "LocalizedRichTextField":
//         let LocalizedRichText = new CMSLocalizedRichTextField();
//         return await LocalizedRichText.getLocalizedRichTextNote(DataFieldType, Element , Langcode);
//     case "ListSearch":
//         let ListSearch = new CMSGridListField();
//         return await ListSearch.CreateListSearch(DataFieldType, Element,Mode);
//     case "Media":
//         let MediaField = new CMSMediaField();
//         return await MediaField.getFeaturedImage(DataFieldType, Element, Mode);
//     case "TimeRange":
//         let TimeRangeField  = new CMSTimeRange();
//         return await TimeRangeField.getCMSTimeRange(DataFieldType, Element,Mode);
//     case "POSSelector":
//         let POSField = new CMSPOSSelector();
//         return await POSField.getPOSSelector(DataFieldType , Element , Mode);
//     case "Numeric":
//         let NumericField = new CMSNumericField();
//         return await NumericField.getNumericField(DataFieldType , Element , Mode);
//     default:
//         return {
//             CMSField: `Filed not recognized ${DataFieldType}`,
//             Msg: "will be created soon",
//         }
// }