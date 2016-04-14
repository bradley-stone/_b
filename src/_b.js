//http://youmightnotneedjquery.com/
var _b = (function( window ) {



    HTMLElement.prototype.append = function(htmlContent) {

        // Grab an element
        var el = this; //document.getElementById('thingy'),
        
        // Make a new div
        var elChild = document.createElement('div');

        // Give the new div some content
        elChild.innerHTML = htmlContent;

        // Jug it into the parent element
        el.appendChild(elChild);
        
        return this;
    
    };


    
    HTMLElement.prototype.prepend = function(htmlContent) {

        var el = this
        elChild = document.createElement('div');
        elChild.innerHTML = htmlContent;

        // Prepend it
        el.insertBefore(elChild, el.firstChild);    
    
        return this;
        
    };
    
    
    
    
    HTMLElement.prototype.addClass = function(className) {

        if (this.classList)
            this.classList.add(className);
        else
            this.className += ' ' + className;
            
        
        return this;
        
    }

    
    
    return function(query) {
        
        return document.querySelectorAll(query)[0];
        
    };



})(window);