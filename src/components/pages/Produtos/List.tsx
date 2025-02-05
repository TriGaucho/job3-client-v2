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
    Typography,
    CircularProgress,
    Box
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProdutoContext } from '../../../context/ProdutoContext';
import { ProdutosService } from '../../../services/api/Produtos/Produtos';

export const List: React.FC = () => {
    const { setProdutoAtual, setAbaAtual } = useProdutoContext();
    const [produtos, setProdutos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const fetchProdutos = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert('Sessão expirada. Efetue o Login novamente');
            navigate('/');
        }

        try {
            const productList = await ProdutosService.getAll('');
            setProdutos(productList.data);
        } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
        } finally {
            setIsLoading(false);
        }
    };

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

            {isLoading ? (
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh'
                }}>
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Código</TableCell>
                                <TableCell>Descrição</TableCell>
                                <TableCell>Valor Unidade</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {produtos.map((produto) => (
                                <TableRow key={produto.id}>
                                    <TableCell>{produto.codigo}</TableCell>
                                    <TableCell>{produto.descricao}</TableCell>
                                    <TableCell>{produto.valor_unidade}</TableCell>
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
            )}
        </Container>
    );
};