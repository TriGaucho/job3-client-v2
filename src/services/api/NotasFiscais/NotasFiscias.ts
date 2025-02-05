import Api from "..";

const create = async (data: any) => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    url: '/notas-fiscais', // Adicione o endpoint correto
    headers: { 
      authorization: `Bearer ${token}`, 
      'Content-Type': 'application/json' 
    },
    data: data // Usa os dados recebidos do formulário
  };

  try {
    const response = await Api.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Melhora o tratamento de erros
  }
};

const getAll = async () => {

}

const getById = async () => {

}

const updateById = async () => {

}

const deleteById = async () => {

}

export const NotasFicaisService = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}