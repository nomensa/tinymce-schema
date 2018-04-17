import _ from 'lodash';

const plugin = (editor) => {
    editor.addButton('schema', {
        text: 'schema',
        icon: false,
        onclick: () => {
        // Open window
        editor.windowManager.open({
        title: 'schema plugin',
        body: [
            { type: 'textbox', name: 'title' }
        ],
        onsubmit(e) {
            // Insert content when the window form is submitted
            const kebabbyString = _.kebabCase(e.data.title);
            editor.insertContent(kebabbyString);
        }
    });
}
});
};

export default plugin;
