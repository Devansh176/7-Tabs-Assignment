Ext.onReady(function () {
    // Define a simple data store
    var staticStore = Ext.create('Ext.data.Store', {
        fields: ['name'],
        data: [
            { "name": "STATIC VALUE 1" },
            { "name": "STATIC VALUE 2" },
            { "name": "STATIC VALUE 3" }
        ]
    });

    // Create the ComboBox
    Ext.create('Ext.form.field.ComboBox', {
        renderTo: 'extDropdown', // Renders into the <div id="extDropdown">
        width: 180,
        store: staticStore,
        queryMode: 'local',
        displayField: 'name',
        valueField: 'name',
        emptyText: 'STATIC VALUE',
        editable: false,
        
        // Force the component to be visible immediately
        style: {
            display: 'inline-block',
            marginBottom: '0px' 
        }
    });
});