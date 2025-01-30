import {
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNfeContext } from '../../../context/NfeContext';

// Dados mockados consistentes com o formulário
const clientesPorEmpresa = {
    1: [
        { id: 1, nome: 'Cliente A1' },
        { id: 2, nome: 'Cliente A2' },
    ],
    2: [
        { id: 3, nome: 'Cliente B1' },
        { id: 4, nome: 'Cliente B2' },
    ],
    3: [
        { id: 5, nome: 'Cliente C1' },
        { id: 6, nome: 'Cliente C2' },
    ],
};

interface NFeData {
    numero: string;
    pessoa_id: number;
    produtos: Array<{
        produto_id: number;
        quantidade: number;
        valor_unitario: number;
    }>;
}

export const List: React.FC = () => {
    const { setNfeAtual, setAbaAtual } = useNfeContext();
    const [notas, setNotas] = useState<NFeData[]>([]);

    useEffect(() => {
        const carregarNotas = () => {
            const dadosSalvos = localStorage.getItem('nfeData');
            if (dadosSalvos) {
                setNotas(JSON.parse(dadosSalvos));
            }
        };
        carregarNotas();
    }, []);

    const getNomeCliente = (pessoaId: number) => {
        for (const clientes of Object.values(clientesPorEmpresa)) {
            const cliente = clientes.find(c => c.id === pessoaId);
            if (cliente) return cliente.nome;
        }
        return 'Cliente não encontrado';
    };

    const calcularTotal = (produtos: NFeData['produtos']) => {
        return produtos.reduce((total, produto) =>
            total + (produto.quantidade * produto.valor_unitario), 0
        ).toFixed(2);
    };

    const handleEdit = (nota: NFeData) => {
        setNfeAtual({
            ...nota,
            pessoa_id: nota.pessoa_id.toString()
        });
        setAbaAtual(0);
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Lista de Notas Fiscais Eletrônicas
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Número</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Qtd. Itens</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notas.map((nota, index) => (
                            <TableRow key={index}>
                                <TableCell>{nota.numero}</TableCell>
                                <TableCell>{getNomeCliente(nota.pessoa_id)}</TableCell>
                                <TableCell>R$ {calcularTotal(nota.produtos)}</TableCell>
                                <TableCell>{nota.produtos.length}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEdit(nota)}
                                    >
                                        Editar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};