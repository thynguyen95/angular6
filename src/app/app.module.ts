import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaiTapComponent } from './bai-tap/bai-tap.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { BaiTap2Component } from './bai-tap2/bai-tap2.component';
import { BaiTap2HeaderComponent } from './bai-tap2/bai-tap2-header/bai-tap2-header.component';
import { BaiTap2ContentComponent } from './bai-tap2/bai-tap2-content/bai-tap2-content.component';
import { BaiTap2IndexComponent } from './bai-tap2/bai-tap2-index/bai-tap2-index.component';
import { BaiTap2SliderComponent } from './bai-tap2/bai-tap2-slider/bai-tap2-slider.component';
import { BaiTap2ItemComponent } from './bai-tap2/bai-tap2-item/bai-tap2-item.component';
import { BaiTap2FooterComponent } from './bai-tap2/bai-tap2-footer/bai-tap2-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BaiTapComponent,
    SidebarComponent,
    ContentComponent,
    BaiTap2Component,
    BaiTap2HeaderComponent,
    BaiTap2ContentComponent,
    BaiTap2IndexComponent,
    BaiTap2SliderComponent,
    BaiTap2ItemComponent,
    BaiTap2FooterComponent
  ], // nơi khai báo các component cho module
  imports: [
    BrowserModule
  ],// nơi import các module khác của ứng dụng của module này
  bootstrap: [AppComponent] //component chạy trong file index.html
})
export class AppModule { }
