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
        const url = `${apiUrl}/${resource}/${params.id}`;

        return httpClient(url).then(({ json }) => ({
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

    update: (resource: string, params: UpdateParams) => {
        const url = `${apiUrl}/${resource}/${params.id}`;

        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    updateMany: (resource: string, params: UpdateManyParams) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource: string, params: CreateParams) => {
        const url = `${apiUrl}/${resource}`;

        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        }));
    },

    delete: (resource: string, params: DeleteParams) => {
        const url = `${apiUrl}/${resource}/${params.id}`;

        return httpClient(url, {
            method: 'DELETE',
        }).then(() => ({ data: {} } as any));
    },

    deleteMany: (resource: string, params: DeleteManyParams) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url, {
            method: 'DELETE',
            body: JSON.stringify(params.ids),
        }).then(({ json }) => ({ data: json }));
    }
};
