import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { ReviewComponent } from './review/review/review.component';
import { TitleComponent } from './review/title/title.component';
import { ImageComponent } from './review/image/image.component';
import { ReviewDescriptionComponent } from './review/review-description/review-description.component';
import { SuperComponent } from './directive/super/super.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TaskComponent } from './todo/task/task.component';
import { TodoWithReactiveFormComponent } from './todo/todo-with-reactive-form/todo-with-reactive-form.component';
import { InBuiltComponent } from './pipe/in-built/in-built.component';
import { SortstringPipe } from './custompipe/sortstring.pipe';
import { SortnumberPipe } from './custompipe/sortnumber.pipe';
import { ConsumeserviceComponent } from './consume/consumeservice/consumeservice.component';
import { Consumeservice2Component } from './consume/consumeservice2/consumeservice2.component';
import { ConsumeRemoteServiceComponent } from './consume/consume-remote-service/consume-remote-service.component';
import { UpdatefriendComponent } from './consume/updatefriend/updatefriend.component';
import { ParentComponent } from './eventbindingfolder/parent/parent.component';
import { ChildComponent } from './eventbindingfolder/child/child.component';
import { AnimateComponent } from './animation/animate/animate.component';
import { Delete1Component } from './delete/delete1/delete1.component';
import { SampleComponent } from './bootstrap/sample/sample.component';
import { LazyModuleModule } from './lazy/lazy-module.module';
//import { LazycomponentComponent } from './lazy/lazycomponent/lazycomponent.component';

const myRoutes: Routes = [
  {
    path: '',
    redirectTo: 'family',
    pathMatch: "full"

  },
  {
    path: 'family',
    component: FamilyComponent,
    children: [
      {
        path: '',
        redirectTo: 'father',
        pathMatch: 'full'
      },
      {
        path: 'father',
        component: FatherComponent
      },
      {
        path: 'mother',
        component: MotherComponent

      },
      {
        path: "son",
        component: SonComponent
      }
    ]
  },
  {
    path: 'directive',
    component: SuperComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'template',
    component: TemplateFormComponent
  },
  {
    path: "reactive",
    component: ReactiveFormComponent
  },
  {
    path: "todo",
    component: TaskComponent
  },
  {
    path: "todoWithReactive",
    component: TodoWithReactiveFormComponent
  },
  {
    path: 'pipe',
    component: InBuiltComponent
  },
  {
    path: 'consume1',
    component: ConsumeserviceComponent
  },
  {
    path: 'consume2',
    component: Consumeservice2Component
  },
  {
    path: 'consumeRemote',
    component: ConsumeRemoteServiceComponent
  },
  {
    path: 'updateFriend/:myid',
    component: UpdatefriendComponent
  },
  {
    path: 'animate',
    component: AnimateComponent
  },

  {
    path: "eventbinding",
    component: ParentComponent
  },
  {
    path: "bootstrap",
    component: SampleComponent
  },
  {
    path: "lazy",
    loadChildren: './lazy/lazy-module.module#LazyModuleModule'
  },
  {
    path: '**',
    component: NotfoundComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    DaughterComponent,
    SonComponent,
    ReviewComponent,
    TitleComponent,
    ImageComponent,
    ReviewDescriptionComponent,
    SuperComponent,
    NotfoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TaskComponent,
    TodoWithReactiveFormComponent,
    InBuiltComponent,
    SortstringPipe,
    SortnumberPipe,
    ConsumeserviceComponent,
    Consumeservice2Component,
    ConsumeRemoteServiceComponent,
    UpdatefriendComponent,
    ParentComponent,
    ChildComponent,
    AnimateComponent,
    Delete1Component,
    SampleComponent
    //LazycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
