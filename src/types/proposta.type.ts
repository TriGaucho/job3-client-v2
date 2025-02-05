type TProduto = IProduto

interface IProduto {
    id?: number,
    produto_id: number,
    valor: float,
    unidade: number,
    quantidade: number
}