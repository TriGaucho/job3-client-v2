import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

import { ProdutoProvider, useProdutoContext } from '../../../context/ProdutoContext';
import { ITabPanelProps } from '../../../types/ITabs';
import Footer from '../../templates/Footer';
import Header from '../../templates/Header';
import { Form } from './Form';
import { List } from './List';

// Componente para exibir o conteúdo da aba selecionada
function CustomTabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

// Função para associar as abas ao painel correspondente
function handleNavigateProposal(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function ProdutosTabs() {
    const { abaAtual, setAbaAtual } = useProdutoContext();

    // Função para alterar a aba ativa
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setAbaAtual(newValue);
    };

    // Configuração das abas
    const ContentTabs = [
        {
            id: 0,
            label: 'Cadastro',
        },
        {
            id: 1,
            label: 'Produtos',
        },
    ];

    return (
        <>

            <Box sx={{ width: '100%', minHeight: '100dvh' }}>
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Tabs value={abaAtual} onChange={handleChange}>
                        {ContentTabs.map((tab) => (
                            <Tab
                                sx={{
                                    mr: 1,
                                    minWidth: 150,
                                    textTransform: 'capitalize',
                                }}
                                key={tab.id}
                                label={tab.label}
                                {...handleNavigateProposal(tab.id)}
                            />
                        ))}
                    </Tabs>
                </Box>
                <CustomTabPanel value={abaAtual} index={0}>
                    <Form />
                </CustomTabPanel>
                <CustomTabPanel value={abaAtual} index={1}>
                    <List />
                </CustomTabPanel>
            </Box>

        </>
    );
}

export default function Produtos() {
    return (
        <ProdutoProvider>
            <ProdutosTabs />
        </ProdutoProvider>
    );
}
