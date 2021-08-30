const github = require('./github');
const { getRepositoryInfoFromUserName, getUserReposUrl } = github;
const fetch = require('node-fetch')

jest.mock('node-fetch')

describe('when calling getRepositoryInfoFromUserName function', () => {
  it('should parse the response into an object with name, company, location and twitter', async () => {

    expect.assertions(1);

    
    //TEMOS QUE MOCKAR A FUNCAO getRepositoryInfoFromUserName
    
    fetch.mockImplementation(async () => {
      return {
        json: async () => {
          return {
            name: 'Gabriel Oliva',
            company: '@betrube',
            twitter: 'gfpoliva',
            location: 'Belo Horizonte'
          }
        }
      }
    })
    
    const repositoryInfo = await getRepositoryInfoFromUserName('gfpoliva');
    
    expect(repositoryInfo).toEqual({
      name: 'Gabriel Oliva',
      company: '@betrube',
      twitter: 'gfpoliva',
      location: 'Belo Horizonte'
    });

  });

  it('should call a function named getUserReposUrl', () => {
    const spiedGetUserReposUrl = jest.spyOn(github, 'getUserReposUrl')

    spiedGetUserReposUrl('xablau')

    expect(spiedGetUserReposUrl).toHaveBeenCalled(1);
    
    expect(spiedGetUserReposUrl('xablau')).toBe('http://api.github.com/users/xablau');

  });

})  