import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HexMapComponent } from './hex-map/hex-map.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolSelectorButtonComponent } from './tool-selector-button/tool-selector-button.component';
import { TerrainSelectorButtonComponent } from './terrain-selector-button/terrain-selector-button.component';
import { TerrainComponent } from './terrain/terrain.component';

@NgModule({
  declarations: [
    AppComponent,
    HexMapComponent,
    ToolbarComponent,
    ToolSelectorButtonComponent,
    TerrainSelectorButtonComponent,
    TerrainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
