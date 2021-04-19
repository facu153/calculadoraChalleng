Ext.define('app.view.main.MainCalculosCtrl', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.calculo',

    numero1: 100,
    numero2: 200,

    calcular: function () {
        console.log('llegue mama');
    },

    /* onTitleButtonClick: function() {
        var title = 'Title' + Ext.Number.randomInt(1, 100);
        this.getViewModel().set('title', title);
    }, */

    onTitleButtonClick: function () {
        let n1 = parseInt(this.getViewModel().get('numero1'))
        let sacado2 = parseInt(this.getViewModel().get('numero2'))
        let ope = this.getViewModel().get('operador')
       
        console.log(n1, sacado2, ope);


        switch (ope) {
            case '1':
                result = n1 + sacado2;
                this.getViewModel().set('resultado', result);
                this.getStore('Calculations').insert(0,[n1,sacado2,result])
                break;

            case '2':
                result = n1 - sacado2;
                this.getViewModel().set('resultado', result);
                break;

            case '3':
                result = n1 * sacado2;
                this.getViewModel().set('resultado', result);
                break;

            case '4':
                result = n1 / sacado2;
                this.getViewModel().set('resultado', result);
                break;
        }
    },



/*     onTitleButtonRemove:Function(){
        grid.getStore().removeAll();
        grid.getStore().sync();
    }, */
})