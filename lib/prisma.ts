// Prisma client stub for MVP - replace with real PrismaClient when database is ready
// import { PrismaClient } from "@prisma/client";
// export const prisma = new PrismaClient();

// In-memory store for MVP
const store: Record<string, any[]> = {
  inquiries: [],
  pandits: [],
  rishta: [],
  bhajan_kirtan: [],
};

function generateId() {
  return crypto.randomUUID?.() || Math.random().toString(36).substring(2, 15);
}

export const prisma = {
  customerInquiry: {
    create: async ({ data }: any) => {
      const record = { id: generateId(), ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      store.inquiries.push(record);
      return record;
    },
    findMany: async (opts?: any) => {
      let items = [...store.inquiries];
      if (opts?.orderBy) items.sort((a: any, b: any) => (a.createdAt < b.createdAt ? 1 : -1));
      return items;
    },
    update: async ({ where, data }: any) => {
      const idx = store.inquiries.findIndex((i: any) => i.id === where.id);
      if (idx >= 0) store.inquiries[idx] = { ...store.inquiries[idx], ...data };
    },
  },
  pandit: {
    create: async ({ data }: any) => {
      const record = { id: generateId(), ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      store.pandits.push(record);
      return record;
    },
    findMany: async (opts?: any) => {
      let items = [...store.pandits];
      if (opts?.orderBy) items.sort((a: any, b: any) => (a.createdAt < b.createdAt ? 1 : -1));
      return items;
    },
    update: async ({ where, data }: any) => {
      const idx = store.pandits.findIndex((i: any) => i.id === where.id);
      if (idx >= 0) store.pandits[idx] = { ...store.pandits[idx], ...data };
    },
  },
  rishtaLead: {
    create: async ({ data }: any) => {
      const record = { id: generateId(), ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      store.rishta.push(record);
      return record;
    },
    findMany: async (opts?: any) => {
      let items = [...store.rishta];
      if (opts?.orderBy) items.sort((a: any, b: any) => (a.createdAt < b.createdAt ? 1 : -1));
      return items;
    },
  },
  bhajanKirtanLead: {
    create: async ({ data }: any) => {
      const record = { id: generateId(), ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      store.bhajan_kirtan.push(record);
      return record;
    },
    findMany: async (opts?: any) => {
      let items = [...store.bhajan_kirtan];
      if (opts?.orderBy) items.sort((a: any, b: any) => (a.createdAt < b.createdAt ? 1 : -1));
      return items;
    },
  },
};
