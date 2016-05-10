describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return 5 and Success', function () {
            expect(answer.calculateArea(7,2,1,"Success","Error")).toEqual({ area : 5, message : 'Success'});
            expect(answer.calculateArea(1,7,0,"Success","Error")).toEqual({ area : 7, message : 'Success'});
            expect(answer.calculateArea(2,9,3,"Success","Error")).toEqual({ area : 3, message : 'Success'});
            expect(answer.calculateArea(8,2,2,"Success","Error")).toEqual({ area : 4, message : 'Success'});
            expect(answer.calculateArea(3,8,1,"Success","Error")).toEqual({ area : 5, message : 'Success'});
            expect(answer.calculateArea(1,5,0,"Success","Error")).toEqual({ area : 5, message : 'Success'});
            expect(answer.calculateArea(1,1,0,"Success","Error")).toEqual({ area : 1, message : 'Success'});
            expect(answer.calculateArea(5,5,-5,"Success","Error")).toEqual({ area : 30, message : 'Success'});
            expect(answer.calculateArea(8,5,-5,"Success","Error")).toEqual({ area : 33, message : 'Success'});
        });
        it('should return false when arguments age wrong', function(){
            expect(answer.calculateArea("kot",3,1,"kot","kot")).toEqual(false);
            expect(answer.calculateArea(3,"kot",1,"kaczka","koty")).toEqual(false);
            expect(answer.calculateArea(2,2,"kota","kptki","kotek")).toEqual(false);
            expect(answer.calculateArea(2,2,2,2,"kaczka")).toEqual(false);
            expect(answer.calculateArea(2,2,2,"kaczuszka",2)).toEqual(false);
            expect(answer.calculateArea(2,3,2,"cat",2)).toEqual(false);
        });
        it('should return area with error message', function(){
            expect(answer.calculateArea(3,8,19,"Success","Error")).toEqual({ area : -49, message : 'Error'});
            expect(answer.calculateArea(3,2,11,"Success","Error")).toEqual({ area : -19, message : 'Error'});
            expect(answer.calculateArea(3,7,9,"Success","Error")).toEqual({ area : -20, message : 'Error'});
            expect(answer.calculateArea(3,9,15,"Success","Error")).toEqual({ area : -36, message : 'Error'});
            expect(answer.calculateArea(3,3,15,"Success","Error")).toEqual({ area : -42, message : 'Error'});
            expect(answer.calculateArea(3,5,15,"Success","Error")).toEqual({ area : -40, message : 'Error'});

        });
        it('should return 0 with message', function(){
            expect(answer.calculateArea(0,0,0,"Success","Error")).toEqual({ area : 0, message : 'Big null'});
        });

    });
});
