import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import FormProposta from './FormProposta';
import { useState } from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

function handleNavigateProposal(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Proposta() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const ContentTabs = [
        {
            id: 0,
            label: 'Cadastro'
        },
        {
            id: 1,
            label: 'Propostas'
        }
    ]

    return (
        <>
            <Header />
            <Box sx={{ width: '100%', height: '100vh' }}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Tabs value={value} onChange={handleChange}>
                        {
                            ContentTabs.map(tab => (
                                <Tab sx={{
                                    mr: 1,
                                    minWidth: 150,
                                    textTransform: 'capitalize'
                                }} key={tab.id} label={tab.label} {...handleNavigateProposal(tab.id)} />
                            ))
                        }
                    </Tabs>
                </Box>
                {/* // percorrer em um arrya */}
                <CustomTabPanel value={value} index={0}>
                    <FormProposta />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Listagem
                </CustomTabPanel>
            </Box>
            <Footer />
        </>
    );
}
