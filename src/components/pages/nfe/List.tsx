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
import React from 'react';
import { useNfeContext } from '../../../context/NfeContext';

export const List: React.FC = () => {
    const { setNfeAtual, setAbaAtual } = useNfeContext();

    const notas = [
        {
            id: 1,
            numero: '0001',
            dataEmissao: '2024-12-01',
            destinatario: 'Empresa A',
            valorTotal: '1000.00',
            chaveAcesso: '12345678901234567890123456789012345678901234',
        },
        {
            id: 2,
            numero: '0002',
            dataEmissao: '2024-12-02',
            destinatario: 'Empresa B',
            valorTotal: '2000.00',
            chaveAcesso: '23456789012345678901234567890123456789012345',
        },
    ];

    const handleEdit = (nota: any) => {
        setNfeAtual(nota);
        setAbaAtual(0);
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Typography variant="h5">Lista de Notas Fiscais Eletrônicas</Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Número</TableCell>
                            <TableCell>Data de Emissão</TableCell>
                            <TableCell>Destinatário</TableCell>
                            <TableCell>Valor Total</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notas.map((nota) => (
                            <TableRow key={nota.id}>
                                <TableCell>{nota.numero}</TableCell>
                                <TableCell>{nota.dataEmissao}</TableCell>
                                <TableCell>{nota.destinatario}</TableCell>
                                <TableCell>{nota.valorTotal}</TableCell>
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
