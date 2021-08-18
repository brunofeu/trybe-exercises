const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);


describe('testa a função com promise', () => {

  it('Verifica se usuário foi encontrado', () => (
    getUserName(1).then((response) => expect(response).toEqual('Mark'))
  ))

  it('Verifica quando o id nao existe', () => {
    expect.assertions(1);
    getUserName(3).catch((error) => expect(error.message).toEqual((`User with 3 not found.`)))
  })
})



describe('testa a função com async/await', () => {

  it('Verifica se usuário foi encontrado', async () => {
    const response = await getUserName(1)
    expect(response).toEqual('Mark')
  })

  it('Verifica quando o id nao existe', async () => {
    expect.assertions(1);
    try {
      await getUserName(3)
    } catch (error) {
      expect(error.message).toEqual((`User with 3 not found.`))
    }
  })
})




