//http://youmightnotneedjquery.com/
var _b = (function( window , document ) {



    HTMLElement.prototype.append = function(appendElement) {

        var el = this;

        // Append it
        el.appendChild(appendElement);
        
        return this;
    
    };


    
    HTMLElement.prototype.prepend = function(prependElement) {

        var el = this

        // Prepend it
        el.insertBefore(prependElement, el.firstChild);    
    
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



})(window , document);