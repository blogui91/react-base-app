import Http from 'api/http';

const Resource = (resourceName: string) => ({
  fetch: (params = {}) => Http.get(`api/${resourceName}`, { params }),
  create: (body: Record<string, any>) => Http.post(`api/${resourceName}`, body),
  find: (id: number, params?: Record<string, string>) => Http.get(`api/${resourceName}/${id}`, { params: params || {} }),
  update: (id: number, body: Record<string, any>, params?: Record<string, string>) => Http.patch(`api/${resourceName}/${id}`, body, { params }),
  updatePut: (id: number, body: Record<string, any>, params?: Record<string, string>) => Http.put(`api/${resourceName}/${id}`, body, { params }),
  delete: (id: number, params?: Record<string, string>) => Http.delete(`api/${resourceName}/${id}`, { params }),
});

export default Resource;
