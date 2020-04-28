import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpResponse, HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { StockInventoryService } from './stock-inventory.service';
import { ResponseOptions } from '@angular/http';

function createResponse(body) {
    return of(
        { body: JSON.stringify(body) }
        // new HttpResponse({ body: JSON.stringify(body) })
    )
}

class MockHttp {
    get() {
        return createResponse([])
    }
}

const cartItems = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 20 }]
const productItems = [{ id: 1, price: 10, name: 'Test' }, { id: 2, price: 20, name: 'anotherTest' }]

describe('StockInventoryService', () => {

    let service: StockInventoryService
    let http: HttpClient

    beforeEach(() => {
        let bed = TestBed.configureTestingModule({
            providers: [
                StockInventoryService,
                { provide: HttpClient, useClass: MockHttp } //Overriding the value of HttpClient injected in the service by MockHttp
            ]
        })
        http = bed.get(HttpClient)
        service = bed.get(StockInventoryService)
    })

    // it('Should get cart items', () => {
    //     spyOn(http, 'get').and.returnValue(createResponse([...cartItems]))

    //     service.getCartItems().subscribe((result) => {
    //         let newResult = JSON.stringify(result)
    //         console.log(newResult)
    //         console.log(result)
    //         expect(newResult.length).toBe(2)
    //         // expect(newResult).toEqual(cartItems)
    //     })
    // });

    // it('Should get product items', () => {
    //     spyOn(http, 'get').and.returnValue(createResponse([...productItems]))

    //     service.getProducts().subscribe((result) => {
    //         let newResult = JSON.stringify(result)
    //         console.log(newResult)
    //         console.log(result)
    //         expect(newResult.length).toBe(2)
    //         // expect(newResult).toEqual(productItems)
    //     })
    // });


})