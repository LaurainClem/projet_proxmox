export class VmsModel {
    vmid: number;
    name: string;
    status: 'running' | 'stopped';
    mem: number;
    maxmem: number;
    cpus: number; // Nombre max de cpu
    maxdisk: number;
    uptime: number;
}