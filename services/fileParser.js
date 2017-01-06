var binary = require("binary");

var fileParser = function() {
    
    this.parseFile = function(contents, callback) {
        // for(var i = 255; i < 1000; i++) {
        //     console.log(contents[i]);
        // }
        // for(var i = 0; i < contents.length; i++) {
        //     var hex = this.ua2hex(contents[i]);
        //     console.log(hex);
        // }

        var result = contents;
        
        binary.parse(contents)
            .skip(256) //magic+size of header
            .loop(function(endSeg, vars){
                if(this.eof()){
                    endSeg()
                }

                this.word8lu('frameType') // 00 = rail
                    .word8lu('frameLen1')
                    .word8lu('frameLen2')
                    .word8lu('railType') // 01 is rechte
                    .word8lu('region')
                    .word8lu('merk') // moet 01 zijn
                    .skip(42) // hierna begint (denk ik) de lengte
                .tap(function (vars) {
                //regular segment
                // if(vars.frameType == 0xFF01){
                //     console.log("Found segment, length:", vars.frameLen);
                //     this.skip(vars.frameLen - 4);
                // } else if(vars.frameType == 0xFFFF) { //last segment
                //     console.log("Done:", vars.frameLen.toString(16));
                //     endSeg();
                // }
                if(vars.frameType == 0){
                    console.log("Found segment, length:", vars.frameLen1);
                    this.skip(vars.frameLen1);
                }
          })
        })
      .tap(function(vars){
        console.dir(vars);
        return callback(result);
      });

    }
    
};

exports.fileParser = fileParser;