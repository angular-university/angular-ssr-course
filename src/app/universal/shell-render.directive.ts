

import {Directive, Inject, OnInit, ViewContainerRef, TemplateRef, PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';


@Directive({
    selector: '[shellNoRender]'
})
export class ShellNoRender implements OnInit {

    constructor(
        private _viewContainer: ViewContainerRef,
        private _templateRef: TemplateRef<Object>,
        @Inject(PLATFORM_ID) private platformId) {}

    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this._viewContainer.clear();
        } else {
            this._viewContainer.createEmbeddedView(this._templateRef);
        }
    }
}




@Directive({
    selector: '[shellRender]'
})
export class ShellRender implements OnInit {
    constructor(
        private _viewContainer: ViewContainerRef,
        private _templateRef: TemplateRef<Object>,
        @Inject(PLATFORM_ID) private platformId) {}

    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this._viewContainer.createEmbeddedView(this._templateRef);
        } else {
            this._viewContainer.clear();
        }
    }
}