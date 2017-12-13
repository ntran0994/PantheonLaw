import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RoutingDefined } from './app.routing';
import { AppComponent } from './pages/app/app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FooterCopyRightComponent } from './pages/footer-copy-right/footer-copy-right.component';
import { FooterBreadcrumComponent } from './pages/footer-breadcrum/footer-breadcrum.component';
import { MainNavigatorComponent } from './pages/main-navigator/main-navigator.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestCodeComponent } from './pages/test-code/test-code.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterCopyRightComponent,
    FooterBreadcrumComponent,
    MainNavigatorComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TestCodeComponent
  ],
  imports: [
    RoutingDefined,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
