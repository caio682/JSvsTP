type business = {
    name: string;
    vulgo: string;
    telefone: number;
}
function Ligarr(busi: business): string {
    return "ligando para :" + busi.telefone;
}
Ligarr({
    name: "irede",
    vulgo: "instituto",
    telefone: 185912325123
});