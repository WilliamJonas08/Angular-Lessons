import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Advanced Component Courses
//Containers
import { GlobalComponent } from './advanced-component/containers/global/global.component';
import { DynamicComponentGenerationComponent } from './advanced-component/containers/dynamic-component-generation/dynamic-component-generation.component';
import { NgTemplateComponent } from './advanced-component/containers/ng-template/ng-template.component';
import { ViewEncapsulationComponent } from './advanced-component/containers/view-encapsulation/view-encapsulation.component';
// Components
import { ChangeDetectionStrategyComponent } from './advanced-component/containers/change-detection-strategy/change-detection-strategy.component';
import { ChildComponent } from './advanced-component/components/child/child.component';
import { BindedChildComponent } from './advanced-component/components/binded-child/binded-child.component';
import { MessageComponent } from './advanced-component/components/message/message.component';
import { Example1Component } from './advanced-component/components/view-encapsulation-examples/example1/example1.component';
import { Example2Component } from './advanced-component/components/view-encapsulation-examples/example2/example2.component';
import { Example3Component } from './advanced-component/components/view-encapsulation-examples/example3/example3.component';
import { ExampleOneComponent } from './advanced-component/components/change-detection-strategy-examples/example-one/example-one.component';
import { ExampleTwoComponent } from './advanced-component/components/change-detection-strategy-examples/example-two/example-two.component';

// Directives
import { CreditCardDirective } from './directives/directives/credit-card/credit-card.directive';
import { CreditCardComponent } from './directives/containers/credit-card/credit-card.component';
import { TooltipDirective } from './directives/directives/tooltip/tooltip.directive';
import { MyForDirective } from './directives/directives/my-for/my-for.directive';
import { MyForComponent } from './directives/containers/my-for/my-for/my-for.component';

// Pipes
import { PipeComponent } from './pipes/containers/pipe/pipe.component';
import { FileSizePipe } from './pipes/pipes/file-size.pipe';

// Reactive Forms
import { StockInventoryComponent } from './reactive-forms/containers/stock-inventory/stock-inventory.component';
import { StockSelectorComponent } from './reactive-forms/components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './reactive-forms/components/stock-products/stock-products.component';
import { StockBranchComponent } from './reactive-forms/components/stock-branch/stock-branch.component';
import { StockInventoryService } from './reactive-forms/services/stock-inventory.service/stock-inventory.service';
import { StockCounterComponent } from './reactive-forms/components/stock-counter/stock-counter.component';

// Routing
import { OneComponent } from './routing/components/one/one.component';
import { TwoComponent } from './routing/components/two/two.component';
import { ButtonsComponent } from './routing/components/buttons/buttons.component';
import { RoutingContainerComponent } from './routing/containers/routing-container/routing-container.component';
import { RoutingCoursesService } from './/routing/services/routing-courses.service'

// Dependency Injection & Zones
import { API_TOKEN } from './token';
import { DependencyInjectionCComponent } from './dependency injection & zones/container/dependency-injection-c/dependency-injection-c.component';
import { DependencyInjectionService } from './dependency injection & zones/service/dependency-injection.service';
// State Management RXJS
import { StateManagementContainerComponent } from './state-management-rxjs/containers/state-management-container/state-management-container.component';
import { Store } from './store';
import { SongsFavouritesComponent } from './state-management-rxjs/components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './state-management-rxjs/components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './state-management-rxjs/components/songs-playlist/songs-playlist.component'
import { SongService } from './state-management-rxjs/services/song.service';
import { SongListComponent } from './state-management-rxjs/components/song-list/song-list.component';

const routes: Routes = [
    {
        path: 'pro-courses',
        // on définit les routes complémentaires à "/pro-courses"
        children: [
            { path: '', redirectTo: 'advanced-component/child-content', pathMatch: 'full' },
            // Advanced Components
            { path: 'advanced-component/child-content', component: GlobalComponent },
            { path: 'advanced-component/dynamic-gen', component: DynamicComponentGenerationComponent },
            { path: 'advanced-component/ng-template', component: NgTemplateComponent },
            { path: 'advanced-component/view-encapsulation', component: ViewEncapsulationComponent },
            { path: 'advanced-component/change-detection', component: ChangeDetectionStrategyComponent },
            { path: 'advanced-component', redirectTo: 'advanced-component/child-content' },
            // Directives
            { path: 'directive/building-directive', component: CreditCardComponent },
            { path: 'directive/custom-directive', component: MyForComponent },
            { path: 'directive', redirectTo: 'directive/building-directive' },
            // Pipes
            { path: 'pipe', component: PipeComponent },
            // Reactive Forms
            { path: 'reactive-forms', component: StockInventoryComponent },
            // Routing
            { path: 'routing', component: RoutingContainerComponent },
            { path: 'detail/:id', component: TwoComponent, outlet: "secondOutlet" }, //outlet:"secondOutlet"
            // State Management RXJS
            { path: 'state-management', component: StateManagementContainerComponent}, 

        ],
    }
];

@NgModule({
    declarations: [
        // Advanced Component Courses
        GlobalComponent,
        ChildComponent,
        BindedChildComponent,
        MessageComponent,
        DynamicComponentGenerationComponent,
        NgTemplateComponent,
        ViewEncapsulationComponent,
        Example1Component,
        Example2Component,
        Example3Component,
        ExampleOneComponent,
        ExampleTwoComponent,
        ChangeDetectionStrategyComponent,
        // Directives
        CreditCardDirective,
        CreditCardComponent,
        TooltipDirective,
        MyForDirective,
        MyForComponent,
        // Pipes
        PipeComponent,
        FileSizePipe,
        // Reactive Forms
        StockInventoryComponent,
        StockSelectorComponent,
        StockProductsComponent,
        StockBranchComponent,
        StockCounterComponent,
        // Routing
        OneComponent,
        TwoComponent,
        ButtonsComponent,
        RoutingContainerComponent,
        DependencyInjectionCComponent,
        // State Management RXJS
        StateManagementContainerComponent,
        SongsFavouritesComponent,
        SongsListenedComponent,
        SongsPlaylistComponent,
        SongListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
    exports: [
        GlobalComponent,
    ],
    // Permet de référencer les components générés dynamiquement
    entryComponents: [
        ChildComponent,
    ],
    // providers: [
    //     StockInventoryService,
    //     RoutingCoursesService,
    //     {provide: API_TOKEN /*'API'*/, useValue: 'http://localhost:3000/'}, //injecte la seconde valeur "dans" la première (cf stock-inventory service)
    //     DependencyInjectionService
    // ],
    bootstrap: [],
})
export class ProCoursesModule {
    // EXEMPLE: Configurated ngModule
    static forRoot(providersConfigExemple:string): ModuleWithProviders { // Static method doesn't need an instance of the class to be called
        return {
            ngModule: ProCoursesModule,
            // providers deleted in the original file to be defined here
            providers: [
                StockInventoryService,
                RoutingCoursesService,
                { provide: API_TOKEN , useValue: providersConfigExemple || 'http://localhost:3000/' }, 
                //On utilise la config passée en argument via le AppModule ou alors une url par défaut
                DependencyInjectionService,                
                Store, // State Management RXJS
                SongService,
            ]
        }
    }
}