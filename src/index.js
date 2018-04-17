import plugin from './plugin';

tinymce.PluginManager.add('schema', function (editor, url) {

  editor.addButton('schema', {
    title: 'Add schema',
    text: 'Add schema',
    onclick: function () {
      var bodyOptions = {
        type: 'textbox',
        name: 'schema',
        label: 'Schema property:'
      };

      // Opens a HTML page inside a TinyMCE dialog
      editor.windowManager.open({
        title: 'Adding schema',
        body: bodyOptions,
        onsubmit: function(event) {
          /*
           * Wraps selected content in a span that contains the schema
           * Constraints: Only works for itemprop schema.
           */
          var selectedContent = tinymce.activeEditor.selection.getContent(),
              schemaValue = event.data.schema,
              newMarkup = '<span itemprop="' + schemaValue + '">' + selectedContent + '</span>';

          tinymce.activeEditor.selection.setContent(newMarkup);
        }
      });
    }
  });
});