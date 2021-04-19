Ext.define('app.store.Calculations',{
    extend:'Ext.data.Store',

    alias:'store.Calculations',

    model:'app.model.Calculations',

    data: { items: [
        { n1: '-', n2: '-',result:'-' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
})