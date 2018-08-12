import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResoures = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('smile',ds.bypassSecurityTrustResourceUrl('assets/svgs/smile.svg'))
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl('assets/svgs/month.svg'))
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl('assets/svgs/week.svg'))
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl('assets/svgs/day.svg'))
}