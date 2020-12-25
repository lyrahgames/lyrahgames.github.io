console.log('Included \'site.js\'.');

function execute() {
  var text = 'Width x Height: ' + screen.width + ' x ' + screen.height +
      '<br>' +
      'Usable: ' + screen.availWidth + ' x ' + screen.availHeight + '<br>' +
      'Color Depth: ' + screen.colorDepth;
  document.querySelector('p').innerHTML = text;
}