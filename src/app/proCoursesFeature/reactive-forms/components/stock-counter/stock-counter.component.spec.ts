import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { Component } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { StockCounterComponent } from './stock-counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('StockCounterComponent', () => {




    let component: StockCounterComponent
    let fixture: ComponentFixture<StockCounterComponent>  // gives nice methods

    let el: DebugElement

    beforeEach(() => {
        // Like ngModule but for testing purposes
        TestBed.configureTestingModule({
            declarations: [
                StockCounterComponent
            ]
        })

        fixture = TestBed.createComponent(StockCounterComponent)
        component = fixture.componentInstance
        el=fixture.debugElement

        component.value = 0
    })
    describe('Component', () => {

        it('Should increment correctly', () => {
            component.increment()
            expect(component.value).toBe(1)
        })

        it('Should decrement correctly', () => {
            component.increment()
            expect(component.value).toBe(1)
            component.decrement()
            expect(component.value).toBe(0)
        })

        it('Should not decrement below the minimum value', () => {
            component.increment()
            expect(component.value).toBe(1)
            component.decrement()
            expect(component.value).toBe(0)
            component.decrement()
            expect(component.value).toBe(0)
        })

        it('Should not increment over the maximum value', () => {
            for (let i = 0; i < 200; i++) {
                component.increment()
            }
            expect(component.value).toBe(100)
        })
    })

    describe('Inputs/Outputs', () => {

        it('Should not increment over the maximum value (testing inputs)', () => {
            // Testing inputs
            component.step = 20
            component.max = 20
            component.increment()
            component.increment()
            expect(component.value).toBe(20)
        })

        it('Should call the output on a value change (testing outputs)', () => {
            // Testing outputs
            spyOn(component.changed, 'emit').and.callThrough()
            component.step = 100
            component.increment()
            expect(component.changed.emit).toHaveBeenCalledWith(100)
        })
    })

    describe('Templates', () => {

        it('Should increment when the + button is clicked', () => {
            el.query(By.css('button:first-child')).triggerEventHandler('click',null)
            fixture.detectChanges()
            expect(component.value).toBe(1)
            expect(el.query(By.css('p')).nativeElement.textContent).toBe('1')
        })

        it('Should increment when the arrow up is pressed', () => {
            const event = new Event('KeyboardEvent') as any
            event.code = 'ArrowUp'
            el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown',event)
            fixture.detectChanges()
            expect(component.value).toBe(1)
        })
    })
})