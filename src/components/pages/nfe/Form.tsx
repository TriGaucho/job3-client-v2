// Formulário de NFe
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNfeContext } from '../../../context/NfeContext';

export const Form: React.FC = () => {
    const { nfeAtual, setNfeAtual }: any = useNfeContext();

    const [formData, setFormData] = useState({
        numero: '',
        dataEmissao: '',
        destinatario: '',
        valorTotal: '',
        chaveAcesso: '',
    });

    useEffect(() => {
        if (nfeAtual) {
            setFormData(nfeAtual);
        }
    }, [nfeAtual]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name as string]: value }));
    };

    const handleSubmit = () => {
        console.log('NFe salva:', formData);
        setNfeAtual(null);
    };

    const handleClear = () => {
        setFormData({
            numero: '',
            dataEmissao: '',
            destinatario: '',
            valorTotal: '',
            chaveAcesso: '',
        });
        setNfeAtual(null);
    };

    return (
        <Container maxWidth="xl">
            <Typography variant="h5" sx={{ mb: 2 }}>
                Cadastro de Nota Fiscal Eletrônica
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Número"
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Data de Emissão"
                        name="dataEmissao"
                        value={formData.dataEmissao}
                        onChange={handleChange}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Destinatário"
                        name="destinatario"
                        value={formData.destinatario}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Valor Total"
                        name="valorTotal"
                        value={formData.valorTotal}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        label="Chave de Acesso"
                        name="chaveAcesso"
                        value={formData.chaveAcesso}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Salvar
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleClear}>
                    Limpar
                </Button>
            </Box>
        </Container>
    );
};