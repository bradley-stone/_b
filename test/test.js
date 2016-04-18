var window = this;

var jsdom = require('mocha-jsdom')
var expect = require('chai').expect



describe('mocha tests', function () {

  jsdom();
  
  
  
  it('selector', function () {

    var _b = require('../src/_b.js');

    var html = '<div id="one">one</div><div id="two">two</div>';

    var div = document.createElement('div')
    div.id = "wrapper";
    div.innerHTML = html;
    document.body.appendChild(div);

    
    //var testDiv = document.querySelectorAll('#one')[0];
    var testDiv = _b;
    expect(testDiv.innerHTML).eq('one');
    
  })

});