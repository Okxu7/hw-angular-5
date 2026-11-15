import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CardsContainer } from './cards-container/cards-container';
import { CardBlock } from './card-block/card-block';
import { UnorderedList } from './unordered-list/unordered-list';
import { ListItem } from './list-item/list-item';



@NgModule({
  declarations: [App, CardsContainer, CardBlock, UnorderedList, ListItem],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
