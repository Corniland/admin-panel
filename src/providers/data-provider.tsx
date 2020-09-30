import { CreateParams, DeleteManyParams, DeleteParams, fetchUtils, GetListParams, GetManyParams, GetManyReferenceParams, GetOneParams, UpdateManyParams, UpdateParams } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = `${process.env.REACT_APP_SERVER_ENDPOINT}${process.env.REACT_APP_API_ROUTE}`;
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource: string, params: GetListParams) => {
        const url = `${apiUrl}/${resource}`;

        return httpClient(url).then(({ headers, json }) => {
            const totalCountHeader = headers.get('x-total-count');
            const total = totalCountHeader ? parseInt(totalCountHeader, 10) : json.length;

            return {
                data: json,
                total,
            };
        });
    },

    getOne: (resource: string, params: GetOneParams) => {
        return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        }));
    },

    getMany: (resource: string, params: GetManyParams) => {
        const url = `${apiUrl}/${resource}`;
        const { ids } = params;

        return httpClient(url).then(({ headers, json }) => {
            const totalCountHeader = headers.get('x-total-count');
            const total = totalCountHeader ? parseInt(totalCountHeader, 10) : json.length;

            return {
                data: json,
                total,
            };
        }).then(({ data, total }) => {
            let matchingRecords = [];

            for (let record of data) {
                if (ids.includes(record.id)) {
                    matchingRecords.push(record);
                }
            }

            return {
                data: matchingRecords,
            }
        });
    },

    getManyReference: (resource: string, params: GetManyReferenceParams) => {
        const url = `${apiUrl}/${resource}`;

        return httpClient(url).then(({ headers, json }) => {
            const totalCountHeader = headers.get('x-total-count');
            const total = totalCountHeader ? parseInt(totalCountHeader, 10) : json.length;

            return {
                data: json,
                total,
            };
        });
    },

    update: (resource: string, params: UpdateParams) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource: string, params: UpdateManyParams) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };

        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource: string, params: CreateParams) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource: string, params: DeleteParams) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource: string, params: DeleteManyParams) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };

        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.ids),
        }).then(({ json }) => ({ data: json }));
    }
};
