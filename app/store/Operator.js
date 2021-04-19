Ext.define('app.store.Operator',{
    extend:'Ext.data.Store',

    alias:'store.operator',

    model:'app.model.Operator',

    data: { items: [
        { name: 'Suma', value: "1" },
        { name: 'Resta',     value: "2" },
        { name: 'Multiplicacion',   value: "3" },
        { name: 'Division',     value: "4" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
})