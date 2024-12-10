import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    MenuItem,
    Grid,
} from '@mui/material';
import { useProdutoContext } from '../../shared/context/ProdutoContext';

export const Form: React.FC = () => {
    const { produtoAtual, setProdutoAtual }: any = useProdutoContext();

    const [formData, setFormData] = useState({
        codigo: '',
        descricao: '',
        unidade: '',
        valorUnidade: '',
        valorAtacado: '',
        valorRevenda: '',
        valorTabela4: '',
        subclasse: '',
    });

    useEffect(() => {
        if (produtoAtual) {
            setFormData(produtoAtual);
        }
    }, [produtoAtual]);

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name as string]: value }));
    };

    // Função para salvar os dados do formulário
    const handleSubmit = () => {
        console.log('Produto salvo:', formData);
        setProdutoAtual(null); // Limpa o produto atual no contexto após salvar
    };

    // Função para limpar os campos do formulário
    const handleClear = () => {
        setFormData({
            codigo: '',
            descricao: '',
            unidade: '',
            valorUnidade: '',
            valorAtacado: '',
            valorRevenda: '',
            valorTabela4: '',
            subclasse: '',
        });
        setProdutoAtual(null);
    };

    return (
        <Container maxWidth="xl">
            <Typography variant="h5" sx={{ mb: 2 }}>
                Cadastro de Produto
            </Typography>
            <Grid container spacing={2}>
                {/* Código */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Código"
                        name="codigo"
                        value={formData.codigo}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>

                {/* Descrição */}
                <Grid item xs={12} sm={6} md={8}>
                    <TextField
                        label="Descrição"
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>

                {/* Unidade */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Unidade"
                        name="unidade"
                        value={formData.unidade}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>

                {/* Valores */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Valor Unidade"
                        name="valorUnidade"
                        value={formData.valorUnidade}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Valor Atacado"
                        name="valorAtacado"
                        value={formData.valorAtacado}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Valor Revenda"
                        name="valorRevenda"
                        value={formData.valorRevenda}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Valor Tabela 4"
                        name="valorTabela4"
                        value={formData.valorTabela4}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                    />
                </Grid>

                {/* Subclasse */}
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Subclasse"
                        name="subclasse"
                        value={formData.subclasse}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>

            {/* Botões de Ação */}
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Salvar
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleClear}
                >
                    Limpar
                </Button>
            </Box>
        </Container>
    );
};
