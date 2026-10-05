import { NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { PublicLayout } from './public-layout/public-layout';

@NgModule({
  declarations: [Header, Footer, PublicLayout],
  imports: [NgOptimizedImage, RouterModule],
})
export class LayoutModule {}
