import {
  CreateParams,
  DeleteManyParams,
  DeleteParams,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  UpdateManyParams,
  UpdateParams,
} from "react-admin";
import fetchApi from "../utils/fetchApi";

export default {
  getList: async (resource: string, params: GetListParams) => {
    const { headers, json } = await fetchApi.get(`/${resource}`);

    const totalCountHeader = headers.get("x-total-count");
    const total = totalCountHeader ? parseInt(totalCountHeader, 10) : json.length;

    return {
      data: json,
      total,
    };
  },

  getOne: async (resource: string, params: GetOneParams) => {
    const { json } = await fetchApi.get(`/${resource}/${params.id}`);

    return {
      data: json,
    };
  },

  getMany: async (resource: string, params: GetManyParams) => {
    const { ids } = params;
    const { json } = await fetchApi.get(`/${resource}`);

    let matchingRecords = [];

    for (let record of json) {
      if (ids.includes(record.id)) {
        matchingRecords.push(record);
      }
    }

    return {
      data: matchingRecords,
    };
  },

  getManyReference: async (resource: string, params: GetManyReferenceParams) => {
    const { headers, json }: { headers: Headers; json: any[] } = await fetchApi.get(`/${resource}`);

    const filteredJson = json.filter((document) => document[params.target].includes(params.id));

    const totalCountHeader = headers.get("x-total-count");
    const total = totalCountHeader ? parseInt(totalCountHeader, 10) : filteredJson.length;

    return {
      data: filteredJson,
      total,
    };
  },

  update: async (resource: string, params: UpdateParams) => {
    const { id, ...bodyData } = params.data;

    const { json } = await fetchApi.put(`/${resource}/${params.id}`, {
      body: JSON.stringify(bodyData),
    });

    return {
      data: json,
    };
  },

  updateMany: async (resource: string, params: UpdateManyParams) => {
    const { json } = await fetchApi.put(`/${resource}/`);

    return {
      data: json,
    };
  },

  create: async (resource: string, params: CreateParams) => {
    const { id, ...bodyData } = params.data;

    const { json } = await fetchApi.post(`/${resource}`, {
      body: JSON.stringify(bodyData),
    });

    return {
      data: json,
    };
  },

  delete: async (resource: string, params: DeleteParams) => {
    await fetchApi.delete(`/${resource}/${params.id}`);

    return { data: {} } as any;
  },

  deleteMany: async (resource: string, params: DeleteManyParams) => {
    await fetchApi.delete(`/${resource}/`);

    return { data: {} } as any;
  },
};
