import { siteConfig } from '@/constants/site';

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number, decimals = 0): string {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export function buildWhatsAppOrderLink(opts: {
  productName?: string;
  quantity?: number;
  size?: string;
  color?: string;
  total?: number;
}): string {
  const lines = [
    'Halo Sri Bayu Garment, saya ingin pesan:',
    opts.productName ? `Produk: ${opts.productName}` : '',
    opts.quantity ? `Jumlah: ${opts.quantity} pcs` : '',
    opts.size ? `Ukuran: ${opts.size}` : '',
    opts.color ? `Warna: ${opts.color}` : '',
    opts.total ? `Estimasi Total: ${formatRupiah(opts.total)}` : '',
    '',
    'Mohon info untuk proses selanjutnya. Terima kasih!',
  ].filter(Boolean);
  return buildWhatsAppLink(lines.join('\n'));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}
