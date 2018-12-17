import { TestBed } from '@angular/core/testing';
import { CountriesService } from './countries.service';
describe('CountriesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CountriesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=countries.service.spec.js.map