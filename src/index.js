import run from './app/app';
import { AlertService } from './app/alert.service';
import { ComponentService } from './app/component.service';
const alertService = new AlertService();
const componentService = new ComponentService();
console.log('hi!');
run(alertService, componentService);
