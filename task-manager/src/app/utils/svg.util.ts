import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResoures = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('smile',ds.bypassSecurityTrustResourceUrl('assets/svgs/smile.svg'))
}