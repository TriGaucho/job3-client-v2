import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    InputLabel,
    Select,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const empresas = [
    { id: 1, nome: 'Empresa A' },
    { id: 2, nome: 'Empresa B' },
    { id: 3, nome: 'Empresa C' },
];

const clientesPorEmpresa = {
    1: ['Cliente A1', 'Cliente A2', 'Cliente A3'],
    2: ['Cliente B1', 'Cliente B2'],
    3: ['Cliente C1', 'Cliente C2', 'Cliente C3', 'Cliente C4'],
};

const produtosComPrecos = [
    { id: 1, nome: 'Produto 1', preco: 100.00 },
    { id: 2, nome: 'Produto 2', preco: 200.00 },
    { id: 3, nome: 'Produto 3', preco: 150.00 },
];

const FormProposta = () => {
    const [dataPrevisao, setDataPrevisao] = useState(dayjs());
    const [empresaId, setEmpresaId] = useState('');
    const [cliente, setCliente] = useState('');
    const [produtoId, setProdutoId] = useState('');
    const [valor, setValor] = useState('');
    const [unidade, setUnidade] = useState('');
    const [produtosDaProposta, setProdutosDaProposta] = useState([]);
    const [clientes, setClientes] = useState([]);

    const handleEmpresaChange = (event) => {
        const selectedEmpresaId = event.target.value;
        setEmpresaId(selectedEmpresaId);
        setClientes(clientesPorEmpresa[selectedEmpresaId] || []);
        setCliente(''); // Limpa o campo cliente ao mudar de empresa
    };

    const handleAddProduct = () => {
        const produtoSelecionado = produtosComPrecos.find(produto => produto.id === produtoId);
        if (produtoSelecionado && unidade) {
            const novoProduto = {
                produto: produtoSelecionado.nome,
                valor: produtoSelecionado.preco,
                unidade,
                quantidade: 1
            }; // Adiciona uma quantidade padrão de 1
            setProdutosDaProposta([...produtosDaProposta, novoProduto]);
            // Limpa os campos após adicionar
            setProdutoId('');
            setValor('');
            setUnidade('');
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box p={3}>
                {/* Data Previsão da Proposta e Tabela Preço */}
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    gap={2}
                    mb={2}
                >
                    <DatePicker
                        label="Data Previsão da proposta"
                        value={dataPrevisao}
                        onChange={(newValue) => setDataPrevisao(newValue)}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                    <TextField
                        fullWidth
                        label="Tabela Preço"
                        variant="outlined"
                    />
                </Box>

                {/* Empresa e Cliente */}
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    gap={2}
                    mb={2}
                >
                    <Box flex={1}>
                        <InputLabel>Empresa</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            value={empresaId}
                            onChange={handleEmpresaChange}
                        >
                            <MenuItem value="">Selecione</MenuItem>
                            {empresas.map(empresa => (
                                <MenuItem key={empresa.id} value={empresa.id}>
                                    {empresa.nome}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>

                    <Box flex={1}>
                        <InputLabel>Cliente</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            value={cliente}
                            onChange={(e) => setCliente(e.target.value)}
                            disabled={!empresaId} // Desabilita se nenhuma empresa estiver selecionada
                        >
                            <MenuItem value="">Selecione</MenuItem>
                            {clientes.map((clienteNome, index) => (
                                <MenuItem key={index} value={clienteNome}>
                                    {clienteNome}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Box>

                {/* Produto, Valor e Unidade */}
                <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    gap={2}
                    mb={2}
                >
                    <Box flex={1}>
                        <InputLabel>Produto</InputLabel>
                        <Select
                            fullWidth
                            variant="outlined"
                            value={produtoId}
                            onChange={(e) => {
                                const selectedProduto = produtosComPrecos.find(produto => produto.id === e.target.value);
                                setProdutoId(e.target.value);
                                setValor(selectedProduto ? selectedProduto.preco : ''); // Define o valor do produto
                            }}
                        >
                            <MenuItem value="">Selecione</MenuItem>
                            {produtosComPrecos.map(produto => (
                                <MenuItem key={produto.id} value={produto.id}>
                                    {produto.nome}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                    <TextField
                        fullWidth
                        label="Valor"
                        variant="outlined"
                        type="number"
                        value={valor}
                        InputProps={{ readOnly: true }} // Para tornar o campo somente leitura
                    />
                    <TextField
                        fullWidth
                        label="Unidade"
                        variant="outlined"
                        value={unidade}
                        onChange={(e) => setUnidade(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddProduct}>
                        +
                    </Button>
                </Box>

                {/* Tabela de Produtos da Proposta */}
                <Box mb={2}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Produto</TableCell>
                                    <TableCell>Valor</TableCell>
                                    <TableCell>Un.</TableCell>
                                    <TableCell>Qtd.</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {produtosDaProposta.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center">
                                            No data available
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    produtosDaProposta.map((produto, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{produto.produto}</TableCell>
                                            <TableCell>{produto.valor.toFixed(2)}</TableCell>
                                            <TableCell>{produto.unidade}</TableCell>
                                            <TableCell>{produto.quantidade}</TableCell>
                                            <TableCell>{(produto.valor * produto.quantidade).toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell>{produtosDaProposta.reduce((total, produto) => total + produto.quantidade, 0)}</TableCell>
                                    <TableCell align="right">
                                        R$ {produtosDaProposta.reduce((total, produto) => total + (produto.valor * produto.quantidade), 0).toFixed(2)}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* Observações do Pedido */}
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Observações do Pedido"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </Box>

                {/* Botões de Ação */}
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                    <Button variant="contained" color="primary">
                        Salvar
                    </Button>
                    <Button variant="contained" color="secondary">
                        Limpar
                    </Button>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default FormProposta;
