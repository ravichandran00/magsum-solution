import { CheckCircle } from 'lucide-react'
import React from 'react'

const GainSection:React.FC = () => {
  return (
 <section className="bg-white font-body">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left pr-[15px] md:pr-[30px]">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold text-[#0a2a2e] leading-tight gradient-text mb-10">
          What You Gain with Magnifyze
          </h2>
             <ul className="space-y-4 text-[#495e60] text-base sm:text-lg leading-relaxed">
            <li className="flex items-start gap-3 text-base">
              <CheckCircle className="w-5 h-5 text-black mt-1" />
              <span><strong>Top-Level Strategic Support</strong> — without hiring expensive full-time CXOs</span>
            </li>
            <li className="flex items-start gap-3 text-base">
              <CheckCircle className="w-5 h-5 text-black mt-1" />
              <span><strong>Clear Roadmaps & Prioritized Actions</strong> — not just theory, but execution</span>
            </li>
            <li className="flex items-start gap-3 text-base">
              <CheckCircle className="w-5 h-5 text-black mt-1" />
              <span><strong>Business Health Monitoring</strong> — real-time insight into what’s working and what’s not</span>
            </li>
            <li className="flex items-start gap-3 text-base">
              <CheckCircle className="w-5 h-5 text-black mt-1" />
              <span><strong>Access to Our Expert Panel</strong> — CXOs, advisors, consultants across multiple industries</span>
            </li>
            <li className="flex items-start gap-3 text-base">
              <CheckCircle className="w-5 h-5 text-black mt-1" />
              <span><strong>Flexibility</strong> — scale support up or down based on your business stage</span>
            </li>
            <li className="flex items-start gap-3 text-base">
              <CheckCircle className="w-5 h-5 text-black mt-1" />
              <span><strong>Investor Readiness</strong> — if you're preparing to raise funds, we help shape the narrative</span>
            </li>
          </ul>

        
        </div>

        {/* Image Grid */}
        <div className="md:w-1/2 w-full">
          
          <img src="../src/assets/gain-img.png" alt="img5" className="w-full h-auto object-cover rounded-xl" />
        </div>
      </div>
    </section>
  )
}

export default GainSection