import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ChevronRight, Play, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const colors = [
  { id: 'sand', name: 'ครีมทราย (Sand)', hex: '#E4D5C7' },
  { id: 'white', name: 'ขาวด้าน (Matte White)', hex: '#F5F5F5' },
  { id: 'grey', name: 'เทาหิน (Stone Grey)', hex: '#A8A9AD' },
];

const sizes = [
  { id: 's', label: 'S', desc: '15cm' },
  { id: 'm', label: 'M', desc: '22cm' },
  { id: 'l', label: 'L', desc: '30cm' },
];

const images = [
  'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop',
];

const relatedProducts = [
  {
    id: 1,
    name: 'ก้านไม้หอมระเหย Aroma',
    desc: 'กลิ่น Jasmine & Tea',
    price: 290,
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'ถาดไม้ยางพารา',
    desc: 'ขนาด 12 นิ้ว',
    price: 350,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'หมอนอิงผ้าลินิน',
    desc: 'สีเบจธรรมชาติ',
    price: 190,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'กระถางต้นไม้จิ๋ว',
    desc: 'พร้อมจานรอง',
    price: 120,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Product() {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [selectedSize, setSelectedSize] = useState(sizes[1].id);
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#F27D26] transition-colors">หน้าหลัก</Link>
          <ChevronRight size={14} />
          <Link to="#" className="hover:text-[#F27D26] transition-colors">สินค้าตกแต่งบ้าน</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium">แจกันเซรามิกมินิมอล</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Images & Video */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
              <img 
                src={mainImage} 
                alt="แจกันเซรามิก" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#F27D26] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                ขายดี
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    mainImage === img ? 'border-[#F27D26]' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>

            {/* Video Review */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mt-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Play size={18} className="text-[#F27D26]" />
                รีวิวจากผู้ใช้งานจริง
              </h3>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=1000&auto=format&fit=crop" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="lg:pl-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                  แจกันเซรามิก Hand-crafted
                </h1>
                <p className="text-gray-500 text-lg">Minimalist Nordic Style Ceramic Vase</p>
              </div>
              <button className="p-3 bg-white rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm border border-gray-100">
                <Heart size={24} />
              </button>
            </div>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-bold text-[#F27D26]">฿450</span>
              <span className="text-xl text-gray-400 line-through mb-1">฿890</span>
              <span className="bg-green-100 text-green-700 text-sm font-bold px-2 py-1 rounded mb-1.5">-49%</span>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">สี (COLOR)</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                      selectedColor === color.id 
                        ? 'border-[#F27D26] text-[#F27D26] bg-[#F27D26]/5' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">ขนาด (SIZE)</h3>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`w-20 h-20 rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${
                      selectedSize === size.id 
                        ? 'border-[#F27D26] bg-[#F27D26]/5' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <span className={`font-bold text-lg ${selectedSize === size.id ? 'text-[#F27D26]' : 'text-gray-900'}`}>{size.label}</span>
                    <span className="text-xs text-gray-400 mt-1">{size.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-sm text-gray-600 mb-8">
              <p className="leading-relaxed">
                เพิ่มความอบอุ่นให้มุมห้องของคุณด้วยแจกันเซรามิกสไตล์มินิมอล ทำด้วยมือทุกชิ้น ผิวสัมผัสแบบด้านให้ความรู้สึกเป็นธรรมชาติ เหมาะสำหรับใส่ดอกไม้แห้งหรือตั้งโชว์
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckCircle2 size={18} className="text-[#F27D26]" />
                <span>เซรามิกเกรดพรีเมียม ทนทาน</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckCircle2 size={18} className="text-[#F27D26]" />
                <span>ดีไซน์เหนือกาลเวลา เข้าได้กับทุกการตกแต่ง</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <CheckCircle2 size={18} className="text-[#F27D26]" />
                <span>แพ็คสินค้าอย่างดี รับประกันแตกหัก</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="space-y-4">
              <button className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-black/20">
                <Play size={20} fill="currentColor" />
                สั่งซื้อผ่าน TikTok Shop
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={14} />
                <span>ปลอดภัย มั่นใจได้ ของแท้ 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">สินค้าที่คุณอาจสนใจ</h2>
          <Link to="/" className="text-[#F27D26] font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm">
            ดูทั้งหมด <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.id} 
              className="group cursor-pointer"
            >
              <Link to="#">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.desc}</p>
                <div className="font-bold text-gray-900 text-lg">฿{product.price.toLocaleString()}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
