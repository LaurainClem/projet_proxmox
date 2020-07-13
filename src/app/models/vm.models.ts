export class VmModels {
    name: string;
    status: 'stopped' | 'running';
    uptime: number;
    vmid: number;
    os?: string;
    ipaddress?: string;
    cpus?: number; // nb de cpu total
    cpu?: number;
    cores?: number;
    eth?: string;
    mem?: number;
    maxmem?: number;
    cpuusage?: number;
    maxdisk?: number;
    diskwrite?: number;
}