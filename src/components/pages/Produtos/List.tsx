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
import { useNavigate } from 'react-router-dom';
import { useProdutoContext } from '../../../context/ProdutoContext';

export const List: React.FC = () => {
    const { setProdutoAtual, setAbaAtual } = useProdutoContext();
    const [produtos, setProdutos] = useState<any[]>([]);
    const navigate = useNavigate()

    // Função para buscar os produtos
    const fetchProdutos = async () => {
        const token = localStorage.getItem("token")

        if (!token) {
            alert('Sessão expirada. Efetue o Login novamente')
            navigate('/')
        }

        try {
            // const { data } = await get('produtos', {
            //     headers: {
            //         authorization: `Bearer ${token}`,
            //         'content-type': 'application/json'
            //     }
            // })
            // setProdutos(data);
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
        }
    };

    // Chamada inicial para buscar os produtos
    useEffect(() => {
        fetchProdutos();
    }, []);

    const handleEdit = (produto: any) => {
        setProdutoAtual(produto);
        setAbaAtual(0);
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
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
                                <TableCell>{produto.valor_unidade.toFixed(2)}</TableCell>
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
        </Container>
    );
};
