import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
    Box,
} from '@mui/material';
import { useProdutoContext } from '../../shared/context/ProdutoContext';

export const List: React.FC = () => {
    const { setProdutoAtual, setAbaAtual } = useProdutoContext();

    // Dados fictícios
    const produtos = [
        {
            id: 1,
            codigo: '001',
            descricao: 'Produto A',
            unidade: 'un',
            valorUnidade: '10.00',
            valorAtacado: '8.00',
            valorRevenda: '9.50',
            valorTabela4: '7.50',
            subclasse: 'Subclasse A',
        },
        {
            id: 2,
            codigo: '002',
            descricao: 'Produto B',
            unidade: 'kg',
            valorUnidade: '20.00',
            valorAtacado: '18.00',
            valorRevenda: '19.00',
            valorTabela4: '17.00',
            subclasse: 'Subclasse B',
        },
    ];

    // Função para editar o produto e mudar para a aba de formulário
    const handleEdit = (produto: any) => {
        setProdutoAtual(produto);
        setAbaAtual(0); // Navega para a aba de cadastro
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5">Lista de Produtos</Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Código</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Unidade</TableCell>
                            <TableCell>Valor Unidade</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {produtos.map((produto) => (
                            <TableRow key={produto.id}>
                                <TableCell>{produto.codigo}</TableCell>
                                <TableCell>{produto.descricao}</TableCell>
                                <TableCell>{produto.unidade}</TableCell>
                                <TableCell>{produto.valorUnidade}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEdit(produto)}
                                    >
                                        Editar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
