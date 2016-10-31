var svgHelper = function() {
    this.svg = '';

    this.addLine = function() {

    }

    this.addPath = function() {
        this.svg = this.svg + '<path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />';
    }

    this.getSvg = function() {
        return '<svg height="400" width="450">' + this.svg + '</svg>';
    }
};

exports.svgHelper = svgHelper;