var remote = require('remote')
var Menu = remote.require('menu')
var MenuItem = remote.require('menu-item')

// Build our new menu
var menu = new Menu()
menu.append(new MenuItem({
  label: 'Delete',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Deleted')
  }
}))
menu.append(new MenuItem({
  label: 'More Info...',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Here is more information')
  }
}))

  alert(1);
// Add the listener
document.addEventListener('DOMContentLoaded', function () {
  alert(2);
  document.querySelector('.js-context-menu').addEventListener('click', function (event) {
    alert(3);
    menu.popup(remote.getCurrentWindow());
  })
})
