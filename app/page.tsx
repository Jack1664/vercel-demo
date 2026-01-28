'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* 背景网格效果 */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* 发光圆点背景 */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-12">
        <div className="w-full max-w-4xl">
          {/* 顶部装饰线 */}
          <motion.div 
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.div
                key={i}
                className="h-1 w-1 rounded-full bg-cyan-500"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + delay }}
              />
            ))}
          </motion.div>

          {/* 主标题区域 */}
          <div className="mb-12">
            <motion.h1 
              className="mb-4 text-5xl sm:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Jack
              </motion.span>
            </motion.h1>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ transformOrigin: "left" }}
              />
              <span className="text-sm font-mono text-cyan-400">Frontend Engineer</span>
              <motion.div 
                className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{ transformOrigin: "right" }}
              />
            </motion.div>
          </div>

          {/* 内容卡片 */}
          <div className="space-y-6">
            {/* 介绍段落 */}
            <motion.div 
              className="group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative space-y-5 text-slate-300 leading-relaxed">
                <motion.p 
                  className="text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <span className="text-cyan-400 font-semibold">大家好，我叫 Jack，是一名前端工程师。</span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  我主要关注 Web 应用的工程化和用户体验，对 <span className="text-cyan-400 font-mono">Vue</span>、<span className="text-cyan-400 font-mono">React</span> 以及相关生态比较熟悉，平时也会参与一些偏架构和性能优化的工作。
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  在项目中我比较注重和产品、设计、后端的协作，习惯从业务目标出发拆解问题，把复杂需求落地成稳定、可维护的实现。
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  对新技术保持持续关注，也喜欢把实践中的经验总结成可复用的方案。
                </motion.p>
              </div>
            </motion.div>

            {/* 技能标签云 */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {['Vue', 'React', 'TypeScript', 'Engineering', 'Performance', 'Architecture'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="group relative overflow-hidden rounded-lg border border-slate-800/50 bg-slate-900/30 px-4 py-2 text-sm font-mono text-slate-400 transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* 底部装饰 */}
          <motion.div 
            className="mt-16 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.div 
              className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-slate-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            />
            <div className="flex gap-1.5">
              {[0, 0.3, 0.6].map((delay, i) => (
                <motion.div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-500/50"
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: delay
                  }}
                />
              ))}
            </div>
            <motion.div 
              className="h-px w-24 bg-gradient-to-l from-transparent via-slate-700 to-slate-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
