import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FootprintsComponent } from './pages/footprints/footprints.component';
import { ManufacturersComponent } from './pages/manufacturers/manufacturers.component';
import { StorageLocationsComponent } from './pages/storage-locations/storage-locations.component';
import { DistributorsComponent } from './pages/distributors/distributors.component';
import { PartMeasurementUnitsComponent } from './pages/part-measurement-units/part-measurement-units.component';
import { UnitsComponent } from './pages/units/units.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    FootprintsComponent,
    ManufacturersComponent,
    StorageLocationsComponent,
    DistributorsComponent,
    PartMeasurementUnitsComponent,
    UnitsComponent,
  ],
  exports: [AboutComponent, HomeComponent, ProjectsComponent],
})
export class ModulesModule {}
