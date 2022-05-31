const splitFile = require("split-file");

splitFile.splitFileBySize("C:/Users/sarthasingh/Desktop/Week4-Mini Assignment/splitXMLs/xmls/votes.xml", 16777216)
.then((names)=>{
    console.log(names);
})
.catch((err)=>{
    console.log(err);
})