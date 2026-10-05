import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsPage } from './pages/rooms-page/rooms-page';
import { RoomDetailsPage } from './pages/room-details/room-details';

const routes: Routes = [
  {
    path: '',
    component: RoomsPage,
  },
  {
    path: ':slug',
    component: RoomDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
