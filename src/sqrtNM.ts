function sqrtNM(arg : number){
    const guess = arg / 3;
    // In finding the zero of f(x) = x2 − a,
    // we have f′(x) = 2x
    const epsilon = 0.0000001;
    let x0 : number;
    let x1 = guess;
    do {
        x0 = x1;
        const fx = (x : number) => x * x - arg;
        const fxp = (x : number) => 2 * x;
        x1  = x0 - fx(x0) / fxp(x0);
    } while((Math.abs(x1 - x0) > epsilon));

    return x1;
}
export default sqrtNM;