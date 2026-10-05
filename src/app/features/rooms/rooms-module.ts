import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing-module';
import { RoomsPage } from './pages/rooms-page/rooms-page';
import { RoomDetailsPage } from './pages/room-details/room-details';

@NgModule({
  declarations: [RoomsPage, RoomDetailsPage],
  imports: [CommonModule, RoomsRoutingModule],
})
export class RoomsModule {}
