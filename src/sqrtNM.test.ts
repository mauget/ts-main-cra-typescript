import sqrt from './sqrtNM';
describe('sqrtNM', ()=>{

    it('should return sqrt(4) = 2', ()=> {
        expect(sqrt(4)).toBe(2);
    });

    it('should return sqrt(100) = 10', ()=> {
        expect(sqrt(100)).toBe(10);
    });

    it('should return sqrt(15) = 3.8729833462074166', ()=> {
        expect(sqrt(15)).toBe(3.8729833462074166);
    });

    it('should return sqrt(0.2) = 0.447213595499958', ()=> {
        expect(sqrt(0.2)).toBe(0.447213595499958);
    });
});