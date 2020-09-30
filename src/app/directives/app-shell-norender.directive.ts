import {
    Directive, Inject, OnInit, PLATFORM_ID,
    TemplateRef, ViewContainerRef
} from "@angular/core";
import {isPlatformServer} from "@angular/common";

@Directive({
    selector: "[appShellNoRender]"
})
export class AppShellNoRenderDirective implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platformId,
                private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {

    }

    ngOnInit() {
        if (isPlatformServer(this.platformId)) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }

    }

}
