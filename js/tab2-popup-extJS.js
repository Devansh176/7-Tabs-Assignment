window.openEditorPopup = function() {
    console.log("Attempting to open popup...");

    // 1. Safety Check
    if (typeof Ext === 'undefined') {
        alert("ExtJS still not loaded! Check your <head> links.");
        return;
    }

    // 2. Create Window
    Ext.create('Ext.window.Window', {
        title: 'Patient Details',
        modal: true,
        width: 700,
        height: 550,
        layout: {
            type: 'vbox',
            align: 'stretch' // Ensures children stretch to full width
        },
        bodyPadding: 10,
        closeAction: 'destroy',

        items: [
            // --- TOP SECTION: Patient Info ---
            {
                xtype: 'container',
                height: 200,
                layout: 'hbox',
                style: {
                    borderBottom: '1px solid #ccc',
                    marginBottom: '10px',
                    paddingBottom: '10px'
                },
                items: [
                    // Column 1
                    {
                        xtype: 'component',
                        flex: 1,
                        html: '<div style="line-height:1.8; font-family:Arial; font-size:12px;">' +
                              '<b>Name</b> : MAN<br>' +
                              '<b>MRN</b> : <br>' +
                              '<b>Date Of Birth</b> : <br>' +
                              '<b>Age</b> : <br>' +
                              '<b>Gender</b> : <br>' +
                              '<b>Address</b> : <br>' +
                              '<b>Reg Date</b> : <br>' +
                              '<b>Status</b> : ' +
                              '</div>'
                    },
                    // Column 2
                    {
                        xtype: 'component',
                        flex: 1,
                        html: '<div style="line-height:1.8; font-family:Arial; font-size:12px;">' +
                              'CT SCAN<br>' +
                              'CYTOLOGY<br>' +
                              'DIGITAL X-RAY<br>' +
                              'FLUID EXAMINATION<br>' +
                              'GASTROENTEROLOGY INVESTIGATION<br>' +
                              'HAEMATOLOGY<br>' +
                              'HARMONES<br>' +
                              'HISTOPATHOLOGY' +
                              '</div>'
                    }
                ]
            },
            
            // --- MIDDLE SECTION: Label ---
            {
                xtype: 'component',
                html: '<b>Text Editor</b>',
                margin: '0 0 5 0'
            },

            // --- BOTTOM SECTION: HTML Editor ---
            {
                xtype: 'htmleditor',
                flex: 1, 
                enableColors: true,
                enableAlignments: true,
                value: 'CT SCAN, CYTOLOGY, DIGITAL X-RAY, FLUID EXAMINATION, GASTROENTEROLOGY INVESTIGATION'
            }
        ],

        buttons: [{
            text: 'Close',
            handler: function(btn) {
                btn.up('window').close();
            }
        }]
    }).show();
};