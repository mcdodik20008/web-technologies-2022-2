import api from "./api.js";

export default class Todos {

    async getAll() {
        try {
            const response = await api('/todo');
            console.log(response);
            return response.data;
        } catch (e) {
            console.log(e);
            return this.getAll();
        }

    }

    async getById(id) {
        return await api('/todo/' + id, { method: 'GET' }).data;
    }

    async create(description) {
        try {
            return await api('/todo', {method: 'POST', body: JSON.stringify({description: description})});
        } catch (e) {
            throw new Error("Не удалось создать задачу.")
        }
    }

    async updateById(id, completed) {
        try {
            return await api('/todo/' + id, {method: 'PUT', body: JSON.stringify({completed: completed})});
        } catch (e) {
            throw new Error("Не удалось обновить задачу.")
        }
    }

    async deleteById(id) {
        try {
            return await api('/todo/' + id, { method: 'DELETE' });;
        } catch (e) {
            return this.deleteById(id);
        }
    }
}