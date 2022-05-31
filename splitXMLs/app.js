const fs = require('fs');
const xml2js = require("xml2js");
const parser = new xml2js.Parser();
function split(){
    var xmlFile = "C:/tokens/tags.xml";
    fs.readFile(xmlFile,"utf-8" ,(err,result)=>{
        if(err){
            console.log(err);
        }
        // else{
        //     parser.parseString(result, (err, arr)=>{
        //         if(err){
        //             console.log(err);
        //         }
        //         else{
        //             for(i = 0; i < arr.tags.row.length ; i++){
        //                 fs.writeFile("C:/tokens/tags1.xml", JSON.stringify(arr.tags.row[i]), (err)=>{
        //                     if(err){
        //                         console.log(err);
        //                     }
        //                 })
        //             }
        //         }
        //     })
        // }
        else{
            console.log(typeof(result));
        }
    })
}

split();