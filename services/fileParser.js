var binary = require("binary");

var fileParser = function() {
    
    this.parseFile = function(contents) {
        // for(var i = 255; i < 1000; i++) {
        //     console.log(contents[i]);
        // }
        for(var i = 0; i < contents.length; i++) {
            var hex = this.ua2hex(contents[i]);
            console.log(hex);
        }
        
    //     binary.parse(contents)
    //         .skip(256) //magic+size of header
    //         .loop(function(endSeg, vars){
    //             if(this.eof()){
    //                 endSeg()
    //             }

    //             this.word8lu('frameType')
    //                 .word8lu('frameLen1')
    //                 .word8lu('frameLen2')
    //             .tap(function (vars) {
    //             //regular segment
    //             // if(vars.frameType == 0xFF01){
    //             //     console.log("Found segment, length:", vars.frameLen);
    //             //     this.skip(vars.frameLen - 4);
    //             // } else if(vars.frameType == 0xFFFF) { //last segment
    //             //     console.log("Done:", vars.frameLen.toString(16));
    //             //     endSeg();
    //             // }
    //             if(vars.frameType == 0){
    //                 console.log("Found segment, length:", vars.frameLen1 + vars.frameLen2);
    //                 this.skip(vars.frameLen1 + vars.frameLen2 - 3);
    //             }
    //       })
    //     })
    //   .tap(function(vars){
    //     console.dir(vars)
    //   });

    }

    this.ua2hex = function(ua) {
        var h = '';
        for (var i = 0; i < ua.length; i++) {
            h += "\\0x" + ua[i].toString(16);
        }
        return h;
    }
};

exports.fileParser = fileParser;