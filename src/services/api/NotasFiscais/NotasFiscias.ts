import Api from ".."

const create = async () => {
  const token = localStorage.getItem('token')
  const options = {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    data: {
      numero: 1,
      pessoa_id: 1,
      produtos: [
        { produto_id: 1, quantidade: 2, valor_unitario: 10 },
        { produto_id: 2, quantidade: 3, valor_unitario: 1.7 }
      ]
    }
  };

  try {
    const { data } = await Api.request(options);
    return data
  } catch (error) {
    console.error(error);
  }
}

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