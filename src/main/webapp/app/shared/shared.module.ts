import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnlineShopSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [OnlineShopSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [OnlineShopSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlineShopSharedModule {
  static forRoot() {
    return {
      ngModule: OnlineShopSharedModule
    };
  }
}
