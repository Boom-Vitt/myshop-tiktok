import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Armchair, Coffee, Lamp, Bed, ShoppingBag } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';

const categories = [
  { id: 'all', name: 'ทั้งหมด', icon: null, active: true },
  { id: 'furniture', name: 'เฟอร์นิเจอร์', icon: Armchair, active: false },
  { id: 'kitchen', name: 'ห้องครัว', icon: Coffee, active: false },
  { id: 'decor', name: 'ของตกแต่ง', icon: ShoppingBag, active: false },
  { id: 'bedroom', name: 'เครื่องนอน', icon: Bed, active: false },
  { id: 'lighting', name: 'โคมไฟ', icon: Lamp, active: false },
];

const products = [
  {
    id: 1,
    name: 'เก้าอี้ไม้โอ๊ค สไตล์ญี่ปุ่น',
    price: 2590,
    originalPrice: 3200,
    rating: 4.8,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
    sale: false,
  },
  {
    id: 2,
    name: 'โคมไฟตั้งโต๊ะ LED ปรับแสงได้',
    price: 890,
    originalPrice: null,
    rating: 4.5,
    reviews: 85,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    sale: false,
  },
  {
    id: 3,
    name: 'แจกันเซรามิก ทรงโมเดิร์น',
    price: 450,
    originalPrice: 590,
    rating: 4.9,
    reviews: 200,
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800&auto=format&fit=crop',
    sale: false,
  },
  {
    id: 4,
    name: 'ชุดเครื่องนอน Cotton 100%',
    price: 1290,
    originalPrice: 2500,
    rating: 5.0,
    reviews: 500,
    image: 'https://images.unsplash.com/photo-1522771731478-44eb10e5c8f9?q=80&w=800&auto=format&fit=crop',
    sale: true,
  },
  {
    id: 5,
    name: 'ชั้นวางของไม้ยางพารา',
    price: 1590,
    originalPrice: null,
    rating: 4.7,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop',
    sale: false,
  },
  {
    id: 6,
    name: 'โซฟาผ้าลินิน 2 ที่นั่ง',
    price: 5990,
    originalPrice: 7500,
    rating: 4.6,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    sale: false,
  },
  {
    id: 7,
    name: 'ต้นไม้ปลอม มอนสเตอร่า',
    price: 290,
    originalPrice: null,
    rating: 4.8,
    reviews: 300,
    image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=800&auto=format&fit=crop',
    sale: false,
  },
  {
    id: 8,
    name: 'ชุดอุปกรณ์ครัว ซิลิโคนทนร้อน',
    price: 650,
    originalPrice: 890,
    rating: 4.9,
    reviews: 150,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
    sale: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans">
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden h-[500px] flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop")' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          {/* ThreeJS Background */}
          <div className="absolute inset-0 z-10 mix-blend-screen">
            <ThreeBackground />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center text-white px-4 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              สินค้าคอลเลกชันใหม่<br />ลดสูงสุด 50%
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-10 text-white/90 font-light"
            >
              ค้นพบของแต่งบ้านสไตล์มินิมอลที่คัดสรรมาเพื่อคุณ ให้บ้านของคุณอบอุ่นและน่าอยู่ยิ่งขึ้น
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#F27D26] hover:bg-[#e06d1b] text-white px-8 py-3.5 rounded-full font-medium text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#F27D26]/30"
            >
              ช้อปเลย
            </motion.button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                category.active 
                  ? 'bg-[#F27D26] text-white shadow-md shadow-[#F27D26]/20' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {category.icon && <category.icon size={18} />}
              <span className="font-medium text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold text-gray-900">สินค้าแนะนำ</h2>
          <Link to="/product" className="text-[#F27D26] font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm">
            ดูทั้งหมด <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.id} 
              className="group cursor-pointer"
            >
              <Link to="/product">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {product.sale && (
                    <div className="absolute top-3 left-3 bg-[#FF4444] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      Sale
                    </div>
                  )}
                </div>
                <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-[#F27D26] text-lg">฿{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through">฿{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star className="fill-[#FFB800] text-[#FFB800]" size={14} />
                  <span className="font-medium text-gray-700">{product.rating}</span>
                  <span>({product.reviews} ขายแล้ว)</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/product" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-900 px-8 py-3.5 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-all">
            ดูสินค้าทั้งหมด <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
