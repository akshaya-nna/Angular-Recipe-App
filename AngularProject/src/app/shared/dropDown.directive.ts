import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class dropDownDirective{
    @HostBinding('class.open') isOpen:boolean=false;
    @HostListener('click') dropDown(e:Event){
        this.isOpen=!this.isOpen;
    }
    
}