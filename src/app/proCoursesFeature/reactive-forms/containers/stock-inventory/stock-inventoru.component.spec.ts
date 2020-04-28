import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { StockCounterComponent } from '../../components/stock-counter/stock-counter.component';
import { StockBranchComponent } from '../../components/stock-branch/stock-branch.component';
import { StockProductsComponent } from '../../components/stock-products/stock-products.component';
import { StockSelectorComponent } from '../../components/stock-selector/stock-selector.component';
import { StockInventoryComponent } from './stock-inventory.component';
import { StockInventoryService } from '../../services/stock-inventory.service/stock-inventory.service';
import { Product } from '../../models/product.interface'


import { Observable, of } from 'rxjs';


const cartItems = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 20 }]
const productItems: Product[] = [{ id: 1, price: 10, name: 'Test' }, { id: 2, price: 20, name: 'anotherTest' }]

class MockStockInventoryService {

    getCartItems() {
        return of(cartItems)
    }
    getProducts() {
        return of(productItems)
    }
}

describe('StockInventoryComponent', () => {

    describe('Container with async providers', () => {

        let component: StockInventoryComponent
        let fixture: ComponentFixture<StockInventoryComponent>
        let el: DebugElement
        let service: StockInventoryService

        beforeEach(() => {
            // Like ngModule but for testing purposes
            TestBed.configureTestingModule({
                imports: [ReactiveFormsModule],
                declarations: [
                    StockInventoryComponent,
                    StockBranchComponent,
                    StockProductsComponent,
                    StockSelectorComponent,
                    StockCounterComponent
                ],
                providers: [
                    { provide: StockInventoryService, useClass: MockStockInventoryService }
                ],
                schemas:[NO_ERRORS_SCHEMA] // enable to import and use the component without worrying about its child components
                // so we don't have to import and declare child components
                // faster than compiling all chil components
            })

            fixture = TestBed.createComponent(StockInventoryComponent)
            component = fixture.componentInstance
            el = fixture.debugElement

            service = el.injector.get(StockInventoryService)
        })

        it('should get cart items and products on init', () => {
            spyOn(service, 'getProducts').and.callThrough()
            spyOn(service, 'getCartItems').and.callThrough()
            component.ngOnInit()
            expect(service.getProducts).toHaveBeenCalled()
            expect(service.getCartItems).toHaveBeenCalled()
        })

        it('should create a map from the service response', () => {
            component.ngOnInit()
            expect(component.productMap.get(1)).toEqual({ id: 1, price: 10, name: 'Test' })
            expect(component.productMap.get(2)).toEqual({ id: 2, price: 20, name: 'anotherTest' })
        })

        it('should store the product response', () => {
            component.ngOnInit()
            expect(component.products).toEqual(productItems)
        })

        it('should create a stock item for each cart item', () => {
            spyOn(component, 'addStock')
            component.ngOnInit()
            expect(component.addStock).toHaveBeenCalledWith({ product_id: 1, quantity: 10 })
            expect(component.addStock).toHaveBeenCalledWith({ product_id: 2, quantity: 20 })
        })
    })
})