import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Lógica de envio de dados
    console.log('Dados do cliente:', formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    });
  };

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Cadastro de Cliente
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Telefone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Endereço"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Cidade"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Estado"
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="CEP"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex',gap:'1rem', mt: 3 }}>
          <Button variant="contained" color="warning" onClick={handleSubmit}>
            Salvar
          </Button>
          <Button variant="contained" color="error" onClick={handleClear}>
            Limpar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}