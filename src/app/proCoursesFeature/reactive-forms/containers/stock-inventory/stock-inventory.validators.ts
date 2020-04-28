import { AbstractControl } from '@angular/forms';


export class StockValidators {

    //CONTROL VALIDATOR
    static checkBranch(control: AbstractControl) { // "static" permet de ne pas avori à créer une nouvelle instance de StockValidators pour utiliser cette méthode
        const regexp = /^[a-z]\d{3}$/i;  // on détermine la forme générale de l'expression voulue
        //A123
        const valid = regexp.test(control.value)
        return valid ? null : { invalidBranch: true }
    }

    // FORM VALIDATOR
    static checkStockExists(control: AbstractControl) {
        const stockItem = control.get('stock')
        const selector = control.get('selector')

        if (!(stockItem && selector)) return null; // safety check

        const exists = stockItem.value.some((stock) => {
            return stock.product_id === parseInt(selector.value.product_id, 10)
        })
        // La méthode some() teste si au moins un élément du tableau passe le test implémenté par la fonction fournie.
        // Elle renvoie un booléen indiquant le résultat du test.

        return exists ? { stockExists: true } : null

    }

}