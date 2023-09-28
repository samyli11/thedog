import { api } from './api';

export async function getDog(query) {
    try {
        const resultado = await api.get(`/images/search?limit=1&breed_id=${query}`);
        console.log(resultado.data);
        return resultado.data;
    } catch (error) {
        console.error('Erro ao carregar dados do cachorro:', error);
        return {};
    }
}
