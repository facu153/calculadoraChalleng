
Ext.define('MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid',
    
    title: 'Historial',
     store: {
        type: 'Calculations'
    },
    columns: [
        { text: 'numero1', dataIndex: 'n1' },
        { text: 'numero2', dataIndex: 'n2', flex: 1 },
        { text: 'Resultado', dataIndex: 'result' }
    ],
    height: 200,
    width: 400,
    
 
 });

Ext.define('app.view.main.MainPanelCal', {
    extend: 'Ext.tab.Panel',
    controller: 'calculo',
    width: 400,
    height: 400,

    viewModel: {
        data: {
            numero1: '0',
            numero2: '0',
            operador: '0',
            resultado: '='
        }
    },

    renderTo: document.body,


    items: [{
        title: 'Calculos',


        items: [
            {
                xtype: 'label',
                forId: 'myFieldId',
                text: 'Calculadora'
            },
            {
                xtype: 'textfield',
                label: 'Primer Numero',
                name: 'number1',
                bind: '{numero1}'
            },
            {
                xtype: 'combo',
                fieldLabel: 'Operaciones',
                displayField: 'name',
                valueField: 'value',
                bind: {
                    value: '{operador}'
                },
                listeners: { 
                    select: function(combo, records) {
                      console.log(records.data.value)
                    }
                },
                publishes: 'name',
                store: {
                    type: 'operator'
                }
            },
            {
                xtype: 'textfield',
                label: 'Segundo Numero',
                name: 'number2',
                bind: '{numero2}'
            },
            {
                xtype: 'label',
                forId: 'myFieldId',
                text: 'Resultado:   ',
                cls: 'my-label-style'
            },
            {
                xtype: 'label',
                forId: 'myFieldId',
                text: 'Calculadora',
                bind: '{resultado}',
                cls: 'my-label-style'
            }

        ],



        buttons: [{
            text: 'Calcular',
            handler: 'onTitleButtonClick'  // see Controller
        }]

    },



    {

        title: 'Historial',
       
        items: [{
            xtype: 'mygrid'
         }],
         buttons: [{
            text: 'Reset',
            //handler: 'onTitleButtonRemove'  // see Controller
        }]
    }]
});



