import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalRef } from '../modal-ref';
import { ModalConfig } from '../modal-config';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _componentFactory: ComponentFactory<ModalComponent>;
  private _injector: Injector;
  constructor(compoenentFactoryResolver: ComponentFactoryResolver) {
    this._componentFactory =
      compoenentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this._createComponentRef();
    componentRef.instance.config = config;
    console.log(`config: `, config);
    console.log('componentRef :>> ', componentRef);
    return new ModalRef(componentRef);
  }

  private _createComponentRef(): ComponentRef<ModalComponent> {
    return this._componentFactory.create(this._injector);
  }
}
