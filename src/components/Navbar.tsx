import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Armchair } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#F27D26] p-2 rounded-lg text-white">
              <Armchair size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Lifestyle Catalog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-900 font-medium hover:text-[#F27D26] transition-colors">หน้าหลัก</Link>
            <Link to="/product" className="text-gray-500 hover:text-[#F27D26] transition-colors">สินค้าทั้งหมด</Link>
            <Link to="#" className="text-gray-500 hover:text-[#F27D26] transition-colors">เกี่ยวกับเรา</Link>
            <Link to="#" className="text-gray-500 hover:text-[#F27D26] transition-colors">ติดต่อ</Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex relative">
              <input 
                type="text" 
                placeholder="ค้นหาสินค้า..." 
                className="bg-gray-100/80 border-none rounded-full py-2.5 pl-10 pr-4 w-64 focus:ring-2 focus:ring-[#F27D26]/20 focus:bg-white transition-all outline-none text-sm"
              />
              <Search className="absolute left-3.5 top-2.5 text-gray-400" size={18} />
            </div>
            
            <button className="relative p-2 text-gray-600 hover:text-[#F27D26] transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute top-1 right-1 bg-[#F27D26] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">0</span>
            </button>
            
            <button className="hidden md:flex items-center gap-2 bg-[#F27D26] hover:bg-[#e06d1b] text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm">
              เข้าสู่ระบบ
            </button>
            
            <button className="md:hidden p-2 text-gray-600">
              <User size={22} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
