import plugin from './plugin';

tinymce.PluginManager.add('microdata', function (editor, url) {

  editor.addButton('microdata', {
    title: 'Add microdata',
    text: 'Add microdata',
    onclick: function () {
      var bodyOptions = {
        type: 'textbox',
        name: 'microdata',
        label: 'Schema property:'
      };

      // Opens a HTML page inside a TinyMCE dialog
      editor.windowManager.open({
        title: 'Adding schema',
        body: bodyOptions,
        onsubmit: function(event) {
          /*
           * Wraps selected content in a span that contains the microdata
           * Constraints: Only works for itemprop microdata.
           */
          var selectedContent = tinymce.activeEditor.selection.getContent(),
            microdataValue = event.data.microdata,
            newMarkup = '<span itemprop="' + microdataValue + '">' + selectedContent + '</span>';

          tinymce.activeEditor.selection.setContent(newMarkup);
        }
      });
    }
  });
});