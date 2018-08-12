import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResoures = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('smile',ds.bypassSecurityTrustResourceUrl('assets/svgs/smile.svg'))
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl('assets/svgs/month.svg'))
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl('assets/svgs/week.svg'))
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl('assets/svgs/day.svg'))

    ir.addSvgIcon('boy',ds.bypassSecurityTrustResourceUrl('assets/portrait/boy.svg'))
    ir.addSvgIcon('jenny',ds.bypassSecurityTrustResourceUrl('assets/portrait/jenny.svg'))
    ir.addSvgIcon('lily',ds.bypassSecurityTrustResourceUrl('assets/portrait/lily.svg'))
    ir.addSvgIcon('man',ds.bypassSecurityTrustResourceUrl('assets/portrait/man.svg'))
    ir.addSvgIcon('sugar',ds.bypassSecurityTrustResourceUrl('assets/portrait/sugar.svg'))
}