export const siteConfig = {
  name: 'Agus Collection',
  shortName: 'Agus Collection',
  tagline: 'Konveksi Premium Terpercaya di Indonesia',
  description:
    'Konveksi Premium Indonesia yang melayani produksi seragam sekolah, perusahaan, kaos custom, polo shirt, celana, almamater, wearpack, serta penjualan bahan kain berkualitas.',
  url: 'https://aguscollection.com',
  email: 'admin@aguscollection.com',
  phone: '087874622632',
  whatsapp: '6287874722632',
  address: 'Dusun Bulu, RT.019/RW.005, Bulu, Sawo, Kec. Jetis, Kabupaten Mojokerto, Jawa Timur 61352',
  mapsQuery: 'Kecamatan Jetis, Kabupaten Mojokerto, Jawa Timur',
  hours: 'Senin–Sabtu, 08.00–17.00 WIB',
  social: {
    instagram: 'https://instagram.com/agus_collection_mjk',
    facebook: 'https://facebook.com/aguscollection',
    tiktok: 'https://tiktok.com/@aguscollection',
    youtube: 'https://youtube.com/@aguscollection',
  },
  shopee: 'https://shopee.co.id/aguscollection',
  tokopedia: 'https://tokopedia.com/aguscollection',
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Produk', href: '/produk' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Kontak', href: '/kontak' },
] as const;

export const stats = [
  { label: 'Sekolah', value: 50, suffix: '+' },
  { label: 'Produk Diproduksi', value: 5000, suffix: '+' },
  { label: 'Perusahaan', value: 100, suffix: '+' },
  { label: 'Rating Pelanggan', value: 4.9, suffix: '', decimals: 1 },
] as const;

export const trustLogos = [
  'SMA Negeri 1 Mojokerto',
  'PT Maju Sejahtera',
  'SMP Negeri 3 Jetis',
  'Bank Jatim',
  'Universitas Brawijaya',
  'PT Sinar Nusantara',
  'SD Pelita Harapan',
  'Pemkab Mojokerto',
  'PT Garuda Nusantara',
  'Yayasan Pendidikan Islam',
] as const;

export const features = [
  {
    icon: 'BadgeCheck',
    title: 'Bahan Premium',
    description:
      'Kami hanya menggunakan kain grade A dari supplier terpercaya untuk hasil yang nyaman dan tahan lama.',
  },
  {
    icon: 'Scissors',
    title: 'Jahitan Rapi',
    description:
      'Setiap jahitan dikerjakan oleh tenaga ahli berpengalaman dengan standar kualitas yang ketat.',
  },
  {
    icon: 'Factory',
    title: 'Harga Langsung Pabrik',
    description:
      'Produksi dari pabrik kami sendiri tanpa perantara, harga lebih hemat hingga 30%.',
  },
  {
    icon: 'MessageCircle',
    title: 'Gratis Konsultasi',
    description:
      'Tim kami siap mendampingi Anda dari awal konsultasi hingga produk selesai tanpa biaya.',
  },
  {
    icon: 'Palette',
    title: 'Gratis Desain',
    description:
      'Desainer kami bantu wujudkan konsep seragam Anda tanpa biaya desain tambahan.',
  },
  {
    icon: 'Clock',
    title: 'Pengerjaan Tepat Waktu',
    description:
      'Kami berkomitmen menyelesaikan setiap order sesuai jadwal yang disepakati.',
  },
  {
    icon: 'Package',
    title: 'Minimum Order Fleksibel',
    description:
      'Melayani order mulai 10 pcs hingga 5000+ pcs untuk semua jenis produk.',
  },
  {
    icon: 'Truck',
    title: 'Pengiriman Seluruh Indonesia',
    description:
      'Kirim ke seluruh Indonesia dengan packing aman, cepat, dan terpercaya.',
  },
] as const;

export const processSteps = [
  {
    no: '01',
    title: 'Konsultasi',
    description:
      'Diskusikan kebutuhan, jenis produk, budget, dan timeline bersama tim kami secara gratis.',
    icon: 'MessageCircle',
  },
  {
    no: '02',
    title: 'Pilih Bahan',
    description:
      'Kami bantu Anda memilih bahan yang paling sesuai dengan kebutuhan dan budget.',
    icon: 'Layers',
  },
  {
    no: '03',
    title: 'Desain',
    description:
      'Tim desainer membuat mockup visual sesuai brand dan identitas Anda secara gratis.',
    icon: 'PenTool',
  },
  {
    no: '04',
    title: 'Produksi',
    description:
      'Setelah desain disetujui, produksi massal berjalan dengan pengawasan penuh.',
    icon: 'Factory',
  },
  {
    no: '05',
    title: 'Quality Control',
    description:
      'Setiap produk dicek satu per satu untuk memastikan kualitas sesuai standar.',
    icon: 'ShieldCheck',
  },
  {
    no: '06',
    title: 'Pengiriman',
    description:
      'Packing rapi dan dikirim ke alamat Anda ke seluruh Indonesia dengan aman.',
    icon: 'Truck',
  },
] as const;

export const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Kepala Sekolah, SMA Negeri 1 Mojokerto',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review:
      'Seragam siswa kami dikerjakan Agus Collection dengan sangat rapi. Jahitan kuat, bahan nyaman, dan pengiriman tepat waktu. Sangat direkomendasikan untuk sekolah.',
  },
  {
    name: 'Siti Rahayu',
    role: 'HR Manager, PT Maju Sejahtera',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review:
      'Tim Agus Collection sangat responsif dan membantu kami mendapat seragam perusahaan yang sesuai brand. Kualitas premium dengan harga pabrik. Pasti pesan ulang!',
  },
  {
    name: 'Andi Wijaya',
    role: 'Ketua Panitia Wisuda, Universitas Brawijaya',
    avatar: 'https://images.pexels.com/photos/6975099/pexels-photo-6975099.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review:
      'Pesan 2000 pcs almamater wisuda dalam waktu singkat. Hasilnya rapi, warna konsisten, dan harga sangat bersaing. Quality control-nya benar-benar ketat.',
  },
  {
    name: 'Dewi Lestari',
    role: 'Owner, Resto Nusantara',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    review:
      'Kaos dan polo shirt untuk seragam staff resto kami jadi lebih profesional. Bahan adem, jahitan rapi, dan desainnya keren. Terima kasih Agus Collection!',
  },
] as const;

export const faqs = [
  {
    question: 'Berapa minimum order (MOQ) untuk produksi?',
    answer:
      'Minimum order kami mulai dari 10 pcs untuk kaos, polo shirt, dan celana. Untuk seragam sekolah dan perusahaan, MOQ 20 pcs. Hubungi kami untuk detail per produk.',
  },
  {
    question: 'Berapa lama waktu pengerjaan?',
    answer:
      'Estimasi produksi 7–14 hari kerja tergantung jumlah dan kompleksitas produk. Untuk order urgent, tersedia layanan express dengan biaya tambahan.',
  },
  {
    question: 'Apakah bisa custom desain sendiri?',
    answer:
      'Tentu. Anda bisa kirim desain sendiri atau kami bantu buatkan mockup gratis. Tim desainer kami siap membantu mewujudkan konsep Anda.',
  },
  {
    question: 'Produk apa saja yang bisa diproduksi?',
    answer:
      'Kami memproduksi seragam sekolah, seragam perusahaan, kaos custom, polo shirt, celana, rok, almamater, jaket, wearpack, atribut sekolah, serta menjual bahan kain grosir.',
  },
  {
    question: 'Apakah pengiriman ke seluruh Indonesia?',
    answer:
      'Ya, kami melayani pengiriman ke seluruh Indonesia dengan packing aman. Biaya ongkir disesuaikan dengan tujuan dan jasa ekspedisi pilihan Anda.',
  },
] as const;
