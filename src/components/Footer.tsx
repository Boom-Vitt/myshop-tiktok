import { Armchair, Facebook, Instagram, Twitter, Youtube, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] pt-16 pb-8 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#F27D26] p-2 rounded-lg text-white">
                <Armchair size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Lifestyle Catalog</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              แหล่งรวมของแต่งบ้านสไตล์มินิมอล ที่คัดสรรมาเพื่อความสุขของคุณและครอบครัว
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">หมวดหมู่</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">เฟอร์นิเจอร์</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">ของตกแต่ง</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">ห้องครัว</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">ห้องนอน</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">ช่วยเหลือ</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">ติดตามคำสั่งซื้อ</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">นโยบายการคืนสินค้า</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">คำถามที่พบบ่อย</a></li>
              <li><a href="#" className="hover:text-[#F27D26] transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">ติดตามเรา</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#F27D26] hover:text-[#F27D26] hover:shadow-sm transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#F27D26] hover:text-[#F27D26] hover:shadow-sm transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#F27D26] hover:text-[#F27D26] hover:shadow-sm transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Lifestyle Catalog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
