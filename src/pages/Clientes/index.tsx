import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import { Form } from './Form';
import { List } from './List';
import { ClienteProvider, useClienteContext } from '../../shared/context/ClienteContext';

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

function ClientesTabs() {
    const { abaAtual, setAbaAtual } = useClienteContext();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setAbaAtual(newValue);
    };

    const ContentTabs = [
        {
            id: 0,
            label: 'Cadastro'
        },
        {
            id: 1,
            label: 'Clientes'
        }
    ];

    return (
        <>
            <Header />
            <Box sx={{ width: '100%', minHeight: '100vh' }}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Tabs value={abaAtual} onChange={handleChange}>
                        {ContentTabs.map(tab => (
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
            <Footer />
        </>
    );
}

export default function Clientes() {
    return (
        <ClienteProvider>
            <ClientesTabs />
        </ClienteProvider>
    );
}
