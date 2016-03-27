var shell = require('shell');

module.exports = {
  config: {
    purl: {
      title: 'Parameterized URL',
      description: 'Example: https://www.google.com/?q=${0}',
      type: 'string',
      default: 'https://www.google.com/?q=${0}'
    }
  },
  activate: function () {
    atom.commands.add('atom-workspace', {
      'purl:open': this.open
    });
  },
  open: function () {
    var editor = atom.workspace.getActivePaneItem();
    var param = editor.getWordUnderCursor();
    var purl = atom.config.get('purl.purl');

    shell.openExternal(purl.replace(/\$\{\d\}/, param));
  }
}
