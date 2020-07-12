export class VmModels {
    name: string;
    status: 'stopped' | 'running';
    lifetime: number;
    vmid: number;
    os?: string;
    ip?: string;
    cpu?: number;
    cores?: number;
    interfaces?: string;
    mem?: number;
    maxmem?: number;
    cpuusage?: number;
    cpuusagemax?: number;
    stockage?: number;
    stockagemax?: number;
}