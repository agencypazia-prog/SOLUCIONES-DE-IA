'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Lenis from 'lenis'

// ============================================================
// BRUTALIST PIXEL ART & TECHNICAL SVG ICONS (ANGULAR / CRISP)
// ============================================================

function PixelCoreIcon({ className = "w-5 h-5 text-[#E7FF00]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`${className} pixel-art`}>
      <rect x="2" y="2" width="12" height="1" />
      <rect x="2" y="13" width="12" height="1" />
      <rect x="2" y="3" width="1" height="10" />
      <rect x="13" y="3" width="1" height="10" />
      <rect x="5" y="5" width="6" height="6" />
      <rect x="0" y="4" width="2" height="1" />
      <rect x="0" y="7" width="2" height="1" />
      <rect x="0" y="10" width="2" height="1" />
      <rect x="14" y="4" width="2" height="1" />
      <rect x="14" y="7" width="2" height="1" />
      <rect x="14" y="10" width="2" height="1" />
      <rect x="4" y="0" width="1" height="2" />
      <rect x="7" y="0" width="1" height="2" />
      <rect x="10" y="0" width="1" height="2" />
      <rect x="4" y="14" width="1" height="2" />
      <rect x="7" y="14" width="1" height="2" />
      <rect x="10" y="14" width="1" height="2" />
    </svg>
  )
}

function PixelNetworkIcon({ className = "w-6 h-6 text-[#0047FF]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`${className} pixel-art`}>
      <rect x="1" y="1" width="4" height="4" />
      <rect x="11" y="1" width="4" height="4" />
      <rect x="6" y="11" width="4" height="4" />
      <rect x="3" y="5" width="1" height="4" />
      <rect x="12" y="5" width="1" height="4" />
      <rect x="4" y="8" width="8" height="1" />
      <rect x="8" y="9" width="1" height="2" />
    </svg>
  )
}

function PixelShieldIcon({ className = "w-6 h-6 text-[#FF3B1E]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`${className} pixel-art`}>
      <rect x="2" y="1" width="12" height="2" />
      <rect x="1" y="3" width="14" height="4" />
      <rect x="2" y="7" width="12" height="3" />
      <rect x="3" y="10" width="10" height="2" />
      <rect x="5" y="12" width="6" height="2" />
      <rect x="7" y="14" width="2" height="1" />
      <rect x="7" y="4" width="2" height="5" fill="#0E1013" />
      <rect x="5" y="5" width="6" height="2" fill="#0E1013" />
    </svg>
  )
}

function PixelGpuIcon({ className = "w-6 h-6 text-[#E7FF00]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`${className} pixel-art`}>
      <rect x="1" y="3" width="14" height="10" />
      <rect x="3" y="5" width="4" height="6" fill="#0E1013" />
      <rect x="9" y="5" width="4" height="6" fill="#0E1013" />
      <rect x="0" y="5" width="1" height="2" />
      <rect x="0" y="9" width="1" height="2" />
      <rect x="15" y="5" width="1" height="2" />
      <rect x="15" y="9" width="1" height="2" />
      <rect x="4" y="1" width="2" height="2" />
      <rect x="7" y="1" width="2" height="2" />
      <rect x="10" y="1" width="2" height="2" />
      <rect x="4" y="13" width="2" height="2" />
      <rect x="7" y="13" width="2" height="2" />
      <rect x="10" y="13" width="2" height="2" />
    </svg>
  )
}

function PixelEyeIcon({ className = "w-6 h-6 text-[#0047FF]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`${className} pixel-art`}>
      <rect x="4" y="3" width="8" height="2" />
      <rect x="2" y="5" width="12" height="2" />
      <rect x="1" y="7" width="14" height="2" />
      <rect x="2" y="9" width="12" height="2" />
      <rect x="4" y="11" width="8" height="2" />
      <rect x="6" y="6" width="4" height="4" fill="#0E1013" />
      <rect x="7" y="7" width="2" height="2" fill="#E7FF00" />
    </svg>
  )
}

function PixelTerminalIcon({ className = "w-6 h-6 text-[#EDECE8]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={`${className} pixel-art`}>
      <rect x="1" y="2" width="14" height="12" />
      <rect x="3" y="4" width="10" height="8" fill="#0E1013" />
      <rect x="4" y="6" width="2" height="1" fill="#EDECE8" />
      <rect x="5" y="7" width="2" height="1" fill="#EDECE8" />
      <rect x="4" y="8" width="2" height="1" fill="#EDECE8" />
      <rect x="8" y="9" width="3" height="1" fill="#E7FF00" />
    </svg>
  )
}

// ============================================================
// BRUTALIST MAGNETIC SQUARE CURSOR
// ============================================================

function BrutalistCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const frame = requestAnimationFrame(() => setEnabled(true))
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest('a, button, input'))
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)` }}
      />
      <div
        className={`cursor-ring ${hovering ? 'cursor-ring-hover' : ''}`}
        style={{
          transform: `translate(${pos.x - (hovering ? 24 : 14)}px, ${pos.y - (hovering ? 24 : 14)}px)`,
        }}
      />
    </>
  )
}

// ============================================================
// CORNER MARKS COMPONENT FOR BLUEPRINT CARDS
// ============================================================

function CornerMarks() {
  return (
    <>
      <span className="corner-cross-tl">+</span>
      <span className="corner-cross-tr">+</span>
      <span className="corner-cross-bl">+</span>
      <span className="corner-cross-br">+</span>
    </>
  )
}

// ============================================================
// TECHNICAL HUD (HEADER)
// ============================================================

const NAV_LINKS = [
  { href: '#soluciones', num: '01', label: 'SOLUCIONES' },
  { href: '#arquitectura', num: '02', label: 'ARQUITECTURA' },
  { href: '#modelos', num: '03', label: 'MODELOS' },
  { href: '#casos', num: '04', label: 'CASOS' },
  { href: '#digest', num: '05', label: 'INVESTIGACIÓN' },
  { href: '#contacto', num: '06', label: 'CONTACTO' },
]

function TechnicalHUD() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'border-white/25 bg-[#0E1013]/98 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'border-white/10 bg-[#0E1013]/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-3">
        {/* Brand & Kernel Status */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a href="#hero" className="flex items-center gap-2 sm:gap-2.5 no-underline group">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white/5 border border-white/20 flex items-center justify-center group-hover:border-[#FF3B1E] transition-colors">
              <PixelCoreIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E7FF00]" />
            </div>
            <span className="font-display font-black text-[11px] xs:text-xs sm:text-sm tracking-wider text-[#EDECE8] uppercase whitespace-nowrap">
              SOLUCIONES DE IA
            </span>
          </a>

          {/* Micro Status Indicator */}
          <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 border border-white/10 bg-white/5 font-mono text-[10px] text-[#6E7681] whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-[#E7FF00] animate-pulse inline-block" />
            <span className="text-[#E7FF00] font-bold">[● KERNEL_ACTIVE:</span>
            <span>v4.2.0]</span>
          </div>
        </div>

        {/* Action Controls: WhatsApp Direct & Minimalist Accordion Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp Direct CTA */}
          <a
            href="https://wa.me/5731086688648?text=Hola%20Soluciones%20de%20IA,%20deseo%20iniciar%20un%20proyecto%20de%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutalist-red !py-1.5 !px-2.5 sm:!px-4 !text-[11px] sm:!text-xs whitespace-nowrap flex items-center gap-1 sm:gap-1.5 shadow-[2px_2px_0px_#EDECE8] sm:shadow-[3px_3px_0px_#EDECE8]"
            title="Contactar directamente por WhatsApp (+57 310 866 8648)"
          >
            <span className="hidden xs:inline sm:inline">INICIAR_</span>
            <span>PROYECTO</span>
            <span className="text-[9px] sm:text-[10px] text-[#E7FF00] font-mono">[WA ↗]</span>
          </a>

          {/* Accordion Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`px-2.5 sm:px-3 py-1.5 border font-mono text-[11px] sm:text-xs uppercase font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              menuOpen
                ? 'bg-[#E7FF00] text-[#0E1013] border-[#E7FF00] shadow-[2px_2px_0px_#EDECE8]'
                : 'bg-white/5 text-[#EDECE8] border-white/20 hover:border-[#E7FF00] hover:text-[#E7FF00]'
            }`}
            aria-label="Abrir o cerrar menú de navegación"
          >
            <span className="text-sm leading-none">{menuOpen ? '✕' : '☰'}</span>
            <span className="hidden sm:inline">{menuOpen ? 'CERRAR' : 'MENÚ'}</span>
          </button>
        </div>
      </div>

      {/* Accordion Drawer Panel with scroll container for mobile */}
      {menuOpen && (
        <div className="border-t border-white/15 bg-[#14171D]/98 backdrop-blur-xl border-b-2 border-[#FF3B1E] max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-7">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8">
              {/* Navigation Index */}
              <div className="flex-1">
                <div className="text-[10px] uppercase font-mono text-[#6E7681] tracking-widest pb-2 mb-3 sm:mb-4 border-b border-white/10">
                  {"// ÍNDICE ARQUITECTÓNICO DEL SISTEMA"}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {NAV_LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="p-2.5 sm:p-3 bg-black/50 border border-white/10 hover:border-[#0047FF] hover:bg-[#0047FF]/10 transition-all no-underline group flex items-center justify-between"
                    >
                      <div className="font-mono text-xs">
                        <span className="text-[#0047FF] font-bold block group-hover:text-[#E7FF00]">{`${l.num}//`}</span>
                        <span className="text-[#EDECE8] font-bold tracking-wider text-[11px] sm:text-xs">{l.label}</span>
                      </div>
                      <span className="text-[#6E7681] font-mono text-xs group-hover:text-[#EDECE8] group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Fast Direct Channels Box */}
              <div className="w-full md:w-80 p-4 sm:p-5 bg-black/60 border border-white/10 font-mono text-xs space-y-3 sm:space-y-4">
                <div className="text-[10px] text-[#E7FF00] font-bold pb-2 border-b border-white/10 uppercase tracking-wider flex items-center justify-between">
                  <span>ENLACE INMEDIATO</span>
                  <span className="w-1.5 h-1.5 bg-[#E7FF00] animate-pulse" />
                </div>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/5731086688648?text=Hola%20Soluciones%20de%20IA,%20deseo%20iniciar%20un%20proyecto%20de%20IA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 bg-[#25D366]/15 border border-[#25D366] text-[#EDECE8] hover:bg-[#25D366] hover:text-black transition-colors font-bold no-underline text-xs"
                  >
                    💬 WHATSAPP: +57 310 866 8648 ↗
                  </a>
                  <a
                    href="mailto:ssolucionesdeia@gmail.com"
                    className="block p-2.5 bg-white/5 border border-white/10 text-[#EDECE8] hover:border-[#0047FF] hover:text-[#0047FF] transition-colors no-underline text-xs truncate"
                  >
                    ✉ ssolucionesdeia@gmail.com
                  </a>
                  <a
                    href="https://runtimegovernance.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-2.5 bg-white/5 border border-white/10 text-[#E7FF00] hover:bg-[#E7FF00] hover:text-black transition-colors no-underline font-bold text-xs"
                  >
                    ⚡ SUBSTACK RESEARCH LAB ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// ============================================================
// HERO SECTION (SUPREMATIST ASYMMETRIC DECOMPOSITION)
// ============================================================

function SuprematistHero() {
  return (
    <section id="hero" className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Top Architectural Specification Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8 pb-3 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#6E7681]">
        <div className="flex items-center gap-2">
          <span className="text-[#E7FF00] font-bold">[SYS_ARCH]</span>
          <span className="truncate">{"LOCAL-FIRST // DETERMINISTIC_AI // SOBERANÍA TOTAL"}</span>
        </div>
        <div>
          <span className="truncate">{"REF_CODE: 0x5090_VRAM // LATENCY: <24MS"}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Suprematist Heavy Headline (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6 max-w-full overflow-hidden">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.5rem] tracking-tight uppercase leading-[1.05] sm:leading-[0.98] text-[#EDECE8] break-words">
              INGENIERÍA
              <span className="block bg-[#FF3B1E] text-[#EDECE8] px-2 sm:px-3 py-0.5 sm:py-1 my-1.5 sm:my-2 border border-black shadow-[3px_3px_0px_#EDECE8] sm:shadow-[4px_4px_0px_#EDECE8] w-fit max-w-full truncate">
                ALGORÍTMICA
              </span>
              Y SOBERANÍA
              <span className="inline-block bg-[#0047FF] text-[#EDECE8] px-2 sm:px-3 py-0.5 sm:py-1 my-1.5 sm:my-2 border border-black shadow-[3px_3px_0px_#EDECE8] sm:shadow-[4px_4px_0px_#EDECE8] w-fit max-w-full">
                LOCAL-FIRST
              </span>
            </h1>

            <p className="text-[#EDECE8]/80 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed pt-1 sm:pt-2">
              Laboratorio de arquitectura y consultoría de alta dirección en Inteligencia Artificial. Diseñamos sistemas deterministas, modelos de contexto pragmático y ejecución Local-First en hardware de élite (RTX 5090 · 32 GB VRAM) con cero fuga de datos hacia nubes de terceros.
            </p>
          </div>

          {/* Brutalist Action Buttons - Full-width stacked on mobile */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/5731086688648?text=Hola%20Soluciones%20de%20IA,%20deseo%20iniciar%20una%20auditoria%20ejecutiva%20de%20IA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutalist-red flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <span className="hidden sm:inline">INICIAR_AUDITORÍA_EJECUTIVA</span>
              <span className="sm:hidden">AUDITORÍA EJECUTIVA</span>
              <span className="text-[#E7FF00] font-mono">[WA ↗]</span>
            </a>
            <a
              href="#soluciones"
              className="btn-brutalist-blue w-full sm:w-auto text-center justify-center"
            >
              &gt; DESPLEGAR_DEMO
            </a>
          </div>

          {/* Millimetric Coordinate Metrics */}
          <div className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono">
            <div>
              <div className="text-[9px] sm:text-[10px] uppercase text-[#6E7681] truncate">CÓMPUTO LOCAL</div>
              <div className="text-xs sm:text-sm font-bold text-[#EDECE8] mt-0.5 truncate">RTX 5090 · 32GB</div>
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] uppercase text-[#6E7681] truncate">FUGA A NUBE</div>
              <div className="text-xs sm:text-sm font-bold text-[#E7FF00] mt-0.5 truncate">0 BYTES EXPUESTOS</div>
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] uppercase text-[#6E7681] truncate">LATENCIA MÁX</div>
              <div className="text-xs sm:text-sm font-bold text-[#0047FF] mt-0.5 truncate">&lt;18MS INFERENCIA</div>
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] uppercase text-[#6E7681] truncate">ESTADO MARCO</div>
              <div className="text-xs sm:text-sm font-bold text-[#FF3B1E] mt-0.5 truncate">ISO 42001 / EU ACT</div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Architecture Blueprint Patent Module (5 cols) */}
        <div className="lg:col-span-5 w-full">
          <div className="card-glass-industrial p-4 sm:p-7 h-full flex flex-col justify-between border-blueprint">
            <CornerMarks />

            {/* Patent Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[10px] sm:text-[11px] text-[#6E7681]">
                <span className="text-[#E7FF00] font-bold">PATENT_SPEC // SCHEMATIC_01</span>
                <span>X: 34.09 // Y: -118.24</span>
              </div>

              {/* Vectorial Architecture Flow */}
              <div className="my-4 sm:my-6 p-3 sm:p-4 bg-black/60 border border-white/10 font-mono text-[11px] sm:text-xs space-y-2.5 sm:space-y-3 relative overflow-hidden">
                <div className="text-[9px] sm:text-[10px] uppercase text-[#6E7681] tracking-widest pb-1 border-b border-white/5 flex items-center justify-between">
                  <span>RUNTIME_FLOW // LOCAL ENCLAVE</span>
                  <span className="text-[#0047FF]">AIR-GAPPED</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs">
                    <span className="text-[#FF3B1E] font-bold shrink-0">{"01//"}</span>
                    <span className="text-[#EDECE8] truncate">INPUT_LAYER: Ingesta Semántica Cruda</span>
                  </div>
                  <div className="flex justify-center text-[#6E7681] text-[9px] sm:text-[10px]">▼ (RAG Contextual Determinista)</div>
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs">
                    <span className="text-[#0047FF] font-bold shrink-0">{"02//"}</span>
                    <span className="text-[#EDECE8] truncate">HERMENEUTIC_FILTER: Cero Alucinación</span>
                  </div>
                  <div className="flex justify-center text-[#6E7681] text-[9px] sm:text-[10px]">▼ (Inferencia PCIe Gen 5.0)</div>
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-[#0047FF]/20 border border-[#0047FF] text-[10px] sm:text-xs">
                    <span className="text-[#E7FF00] font-bold shrink-0">{"03//"}</span>
                    <span className="text-[#EDECE8] font-bold truncate">RTX_5090_RUNTIME (32GB VRAM)</span>
                  </div>
                  <div className="flex justify-center text-[#6E7681] text-[9px] sm:text-[10px]">▼ (Guardrails Deterministas)</div>
                  <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs">
                    <span className="text-[#FF3B1E] font-bold shrink-0">{"04//"}</span>
                    <span className="text-[#EDECE8] truncate">RUNTIME_FIREWALL: Control de Agencia</span>
                  </div>
                </div>
              </div>

              {/* Hardware Specifications Spec Sheet */}
              <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs font-mono">
                <div className="flex flex-col xs:flex-row xs:justify-between py-1 border-b border-white/5 gap-0.5 xs:gap-2">
                  <span className="text-[#6E7681]">PROCESADOR IA:</span>
                  <span className="text-[#EDECE8] font-bold">NVIDIA RTX 5090 · 32GB GDDR7</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between py-1 border-b border-white/5 gap-0.5 xs:gap-2">
                  <span className="text-[#6E7681]">ANCHO DE BANDA:</span>
                  <span className="text-[#0047FF] font-bold">~3,352 GB/s · PCIe Gen 5</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between py-1 border-b border-white/5 gap-0.5 xs:gap-2">
                  <span className="text-[#6E7681]">CÓMPUTO HOST:</span>
                  <span className="text-[#EDECE8]">AMD Ryzen 9 9950X · 192GB DDR5</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between py-1 border-b border-white/5 gap-0.5 xs:gap-2">
                  <span className="text-[#6E7681]">ALMACENAMIENTO:</span>
                  <span className="text-[#EDECE8]">7 TB NVMe Cifrado en Reposo</span>
                </div>
              </div>
            </div>

            {/* Live Terminal Telemetry Output */}
            <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/10 font-mono text-[10px] sm:text-[11px] text-[#6E7681] flex items-center justify-between gap-2">
              <span className="text-[#E7FF00] truncate">$ exec_sovereign_runtime</span>
              <span className="text-[#EDECE8] font-bold truncate">TELEMETRÍA_100%_PRIVADA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// CONTINUOUS KINETIC TICKER (MARQUEE)
// ============================================================

function KineticTicker() {
  return (
    <div className="w-full overflow-hidden border-y-2 border-[#FF3B1E] bg-[#0E1013] py-3 relative z-20">
      <div className="animate-marquee space-x-8 text-xs sm:text-sm font-mono tracking-wider uppercase text-[#EDECE8]">
        {[0, 1].map((idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            <span className="bg-[#FF3B1E] text-[#EDECE8] px-2 py-0.5 font-bold">⚡ MANIFIESTO EJECUTIVO:</span>
            <span>«LA INTELIGENCIA ARTIFICIAL NO ES SOLO UN PROBLEMA DE INGENIERÍA: ES UNA CRISIS DE SENTIDO, UNA MUTACIÓN COGNITIVA Y UN DESAFÍO DE CONTROL DETERMINISTA.»</span>
            <span className="text-[#0047FF]">■</span>
            <span className="text-[#E7FF00] font-bold">SOLUCIONES DE IA</span>
            <span>·</span>
            <span>CÓMPUTO SOBERANO LOCAL-FIRST (RTX 5090 · 32GB VRAM)</span>
            <span className="text-[#FF3B1E]">●</span>
            <span>ZERO CLOUD LEAKAGE</span>
            <span>·</span>
            <span>ISO 42001 &amp; NIST AI RMF</span>
            <span className="text-[#0047FF]">▲</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================
// BLUEPRINT SOLUTIONS GRID (3 UNBALANCED COLUMNS COLLAGE)
// ============================================================

interface SolutionCard {
  id: string
  code: string
  title: string
  category: string
  desc: string
  specBullet: string[]
  metrics: string
  icon: 'network' | 'shield' | 'gpu' | 'eye' | 'terminal' | 'core'
  accentColor: string
  colSpan: string
}

const SOLUTIONS_DATA: SolutionCard[] = [
  {
    id: 'sol-01',
    code: '01//',
    title: 'INGENIERÍA DE CONTEXTO & RAG DETERMINISTA',
    category: 'EPISTEMOLOGÍA SEMÁNTICA // ZERO-HALLUCINATION',
    desc: 'Arquitectura de indexación y recuperación estricta. Superamos el cálculo estadístico probabilístico mediante verificación determinista de hechos, anclaje semántico y marcos conceptuales propios.',
    specBullet: [
      'Eliminación de alucinaciones en documentos corporativos sensibles.',
      'Sistemas de verificación cruzada con bases de conocimiento privadas.',
      'Pipeline de indexación vectorial de alta densidad sin dependencias externas.',
    ],
    metrics: 'LATENCIA: <18MS // PREC_RATE: 99.8%',
    icon: 'network',
    accentColor: '#0047FF',
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'sol-02',
    code: '02//',
    title: 'AGENTES AUTÓNOMOS MULTI-ROL',
    category: 'ORQUESTACIÓN DETERMINISTA // WORKFLOW 24/7',
    desc: 'Enjambres de agentes especializados construidos sobre grafos de estado (LangGraph). Ejecutan tareas analíticas, redacción técnica y decisiones operativas complejas sin intervención humana.',
    specBullet: [
      'Orquestación basada en máquinas de estado finito con memoria persistente.',
      'Validación automática paso a paso antes de disparar acciones en sistemas.',
      'Integración con ERP, CRM y bases de datos transaccionales seguras.',
    ],
    metrics: 'UPTIME: 99.9% // ERROR_MARGIN: 0.02%',
    icon: 'terminal',
    accentColor: '#FF3B1E',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'sol-03',
    code: '03//',
    title: 'CÓMPUTO SOBERANO LOCAL-FIRST',
    category: 'INFRAESTRUCTURA DE ÉLITE // GPU ON-PREMISE',
    desc: 'Despliegue e inferencia ejecutados exclusivamente en hardware físico local (NVIDIA RTX 5090 · 32 GB VRAM · 192 GB RAM). Los datos nunca abandonan su perímetro de red corporativo.',
    specBullet: [
      'Cero dependencia de APIs de OpenAI, Anthropic o nubes públicas.',
      'Inmunidad absoluta ante caídas de servicio externo o cambios de términos.',
      'Modelos fundacionales optimizados: LLaMA 3.3 70B, Qwen 2.5 y Mistral.',
    ],
    metrics: 'LEAKAGE: 0.00% // HARDWARE: RTX 5090',
    icon: 'gpu',
    accentColor: '#E7FF00',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'sol-04',
    code: '04//',
    title: 'GOBERNANZA ACTIVA & SEGURIDAD EN RUNTIME',
    category: 'CONTROL EN CÓDIGO // ISO 42001 & EU AI ACT',
    desc: 'Del «compliance en papel» a cortafuegos de ejecución en tiempo real. Mitigación activa de prompt injections, control programático de límites de agencia y auditoría continua de sesgos.',
    specBullet: [
      'Cortafuegos determinista interpuesto entre el usuario y el modelo.',
      'Matrices de riesgo algorítmico y trazabilidad de decisiones para auditores.',
      'Cumplimiento verificable con ISO/IEC 42001, EU AI Act y NIST AI RMF.',
    ],
    metrics: 'SECURITY: ZERO-TRUST // FIREWALL: ENFORCED',
    icon: 'shield',
    accentColor: '#FF3B1E',
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'sol-05',
    code: '05//',
    title: 'VISIÓN SINTÉTICA & HEURÍSTICA MULTIMODAL',
    category: 'PERCEPCIÓN MECÁNICA // INSPECCIÓN AUTOMATIZADA',
    desc: 'Sistemas de inspección óptica y análisis de planos técnicos, contratos digitalizados y secuencias operativas. Reconocimiento estructural sin envío de imágenes a servidores externos.',
    specBullet: [
      'Extracción geométrica y tabular de diagramas de ingeniería y patentes.',
      'Clasificación y detección de anomalías en tiempo real a &gt;60 FPS.',
      'Modelos de visión multimodales ejecutados localmente en VRAM masiva.',
    ],
    metrics: 'THROUGHPUT: 120 FPS // LOCAL_OCR: 99.6%',
    icon: 'eye',
    accentColor: '#0047FF',
    colSpan: 'lg:col-span-6',
  },
  {
    id: 'sol-06',
    code: '06//',
    title: 'FINE-TUNING & BRANDING ALGORÍTMICO',
    category: 'ALINEACIÓN CULTURAL // ADAPTACIÓN LoRA',
    desc: 'Entrenamiento privado de pesos sinápticos con su terminología, políticas y voz de marca corporativa. Su modelo dejará de sonar como un asistente genérico para convertirse en su propia entidad.',
    specBullet: [
      'Entrenamiento LoRA/QLoRA con pipelines de datos limpios y sintéticos.',
      'Curaduría exhaustiva para eliminar sesgos y respuestas fuera de política.',
      'Soberanía total sobre los pesos finales resultantes (pesos .safetensors propios).',
    ],
    metrics: 'ALIGNMENT: 99.8% // WEIGHTS: PROPRIETARY',
    icon: 'core',
    accentColor: '#E7FF00',
    colSpan: 'lg:col-span-6',
  },
]

function BlueprintSolutionsGrid() {
  return (
    <section id="soluciones" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-10 sm:mb-14 pb-3 sm:pb-4 border-b border-white/10 font-mono">
        <div>
          <span className="text-[#0047FF] font-bold text-xs uppercase tracking-widest block mb-1">
            01 // SOLUCIONES TÉCNICAS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#EDECE8]">
            ARQUITECTURA <span className="text-[#FF3B1E]">DETERMINISTA</span>
          </h2>
        </div>
        <div className="text-xs sm:text-sm text-[#6E7681] max-w-md">
          Plataformas y servicios de alta ingeniería concebidos para mitigar riesgos, asegurar soberanía de datos y dotar de autonomía real a su operación.
        </div>
      </div>

      {/* Irregular Collage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {SOLUTIONS_DATA.map((card) => (
          <div
            key={card.id}
            className={`${card.colSpan} card-glass-industrial p-4 sm:p-7 flex flex-col justify-between border-blueprint transition-colors hover:border-white/30 group`}
          >
            <CornerMarks />

            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-3 sm:mb-4 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#FF3B1E]">{card.code}</span>
                  <span className="text-[#6E7681] text-[10px] sm:text-[11px] truncate">{card.category}</span>
                </div>
                <div className="p-1 sm:p-1.5 bg-white/5 border border-white/10 shrink-0">
                  {card.icon === 'network' && <PixelNetworkIcon />}
                  {card.icon === 'shield' && <PixelShieldIcon />}
                  {card.icon === 'gpu' && <PixelGpuIcon />}
                  {card.icon === 'eye' && <PixelEyeIcon />}
                  {card.icon === 'terminal' && <PixelTerminalIcon />}
                  {card.icon === 'core' && <PixelCoreIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#E7FF00]" />}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-black text-lg sm:text-2xl uppercase tracking-tight text-[#EDECE8] mb-2 sm:mb-3 group-hover:text-[#E7FF00] transition-colors break-words">
                {card.title}
              </h3>

              <p className="text-[#EDECE8]/75 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-normal">
                {card.desc}
              </p>

              {/* Technical Specifications Bullets */}
              <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-white/10 font-mono text-[11px] sm:text-xs text-[#EDECE8]/90 mb-4 sm:mb-6">
                {card.specBullet.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#0047FF] font-bold shrink-0">▪</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Technical Metric Tag */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] sm:text-xs">
              <span className="text-[#6E7681] truncate">{card.metrics}</span>
              <span className="text-[#E7FF00] group-hover:translate-x-1 transition-transform shrink-0 ml-2">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// URBAN RAW MANIFESTO & METRICS SECTION
// ============================================================

function UrbanManifestoSection() {
  return (
    <section className="py-12 sm:py-20 relative bg-[#0E1013] border-y-4 border-[#FF3B1E] overflow-hidden">
      {/* Top Hazard Stripes Accent */}
      <div className="hazard-stripes h-2.5 sm:h-3 w-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* SVG Barcode & Coordinates */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-white/15 font-mono text-[10px] sm:text-xs text-[#6E7681]">
          <div className="flex items-center gap-3">
            {/* SVG Barcode */}
            <svg className="w-24 sm:w-32 h-5 sm:h-6 fill-white/80 pixel-art" viewBox="0 0 100 20">
              <rect x="0" y="0" width="3" height="20" />
              <rect x="5" y="0" width="1" height="20" />
              <rect x="8" y="0" width="4" height="20" />
              <rect x="14" y="0" width="2" height="20" />
              <rect x="18" y="0" width="1" height="20" />
              <rect x="22" y="0" width="5" height="20" />
              <rect x="29" y="0" width="2" height="20" />
              <rect x="33" y="0" width="1" height="20" />
              <rect x="36" y="0" width="4" height="20" />
              <rect x="42" y="0" width="1" height="20" />
              <rect x="46" y="0" width="3" height="20" />
              <rect x="52" y="0" width="2" height="20" />
              <rect x="56" y="0" width="5" height="20" />
              <rect x="63" y="0" width="1" height="20" />
              <rect x="66" y="0" width="3" height="20" />
              <rect x="72" y="0" width="2" height="20" />
              <rect x="76" y="0" width="4" height="20" />
              <rect x="82" y="0" width="1" height="20" />
              <rect x="86" y="0" width="6" height="20" />
              <rect x="94" y="0" width="2" height="20" />
              <rect x="98" y="0" width="2" height="20" />
            </svg>
            <span className="text-[#EDECE8] truncate">SPEC_DOC_ID: #72E9CF6_V4</span>
          </div>
          <div>
            <span className="truncate">{`LAT: 04°36'35"N // LON: 74°04'54"W // SOVEREIGN_ENCLAVE`}</span>
          </div>
        </div>

        {/* Massive Suprematist Text Manifesto */}
        <div className="my-6 sm:my-8">
          <blockquote className="font-display font-black text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-snug sm:leading-[0.98] text-[#EDECE8] break-words">
            «LA INTELIGENCIA ARTIFICIAL NO ES UN PROBLEMA DE SOFTWARE: ES UNA <span className="bg-[#FF3B1E] text-[#EDECE8] px-1.5 sm:px-2">CRISIS DE SENTIDO</span>, UNA MUTACIÓN COGNITIVA Y UN DESAFÍO CRÍTICO DE <span className="bg-[#0047FF] text-[#EDECE8] px-1.5 sm:px-2">CONTROL DETERMINISTA</span>.»
          </blockquote>
        </div>

        {/* 4 Brutalist Solid Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/15">
          <div className="p-4 sm:p-6 bg-[#14171D] border border-white/10 relative">
            <CornerMarks />
            <div className="font-display font-black text-3xl sm:text-5xl text-[#E7FF00]">0 BYTES</div>
            <div className="font-mono text-xs uppercase text-[#EDECE8] font-bold mt-1.5 sm:mt-2">FUGA EXTERNA</div>
            <div className="font-mono text-[10px] sm:text-[11px] text-[#6E7681] mt-1">Cómputo local aislado sin telemetría de nube.</div>
          </div>

          <div className="p-4 sm:p-6 bg-[#14171D] border border-white/10 relative">
            <CornerMarks />
            <div className="font-display font-black text-3xl sm:text-5xl text-[#FF3B1E]">100%</div>
            <div className="font-mono text-xs uppercase text-[#EDECE8] font-bold mt-1.5 sm:mt-2">SOBERANÍA LOCAL</div>
            <div className="font-mono text-[10px] sm:text-[11px] text-[#6E7681] mt-1">NVIDIA RTX 5090 con 32 GB VRAM masiva propia.</div>
          </div>

          <div className="p-4 sm:p-6 bg-[#14171D] border border-white/10 relative">
            <CornerMarks />
            <div className="font-display font-black text-3xl sm:text-5xl text-[#0047FF]">&lt;24 MS</div>
            <div className="font-mono text-xs uppercase text-[#EDECE8] font-bold mt-1.5 sm:mt-2">LATENCIA DE RUNTIME</div>
            <div className="font-mono text-[10px] sm:text-[11px] text-[#6E7681] mt-1">Inferencia acelerada sin cuellos de botella de red.</div>
          </div>

          <div className="p-4 sm:p-6 bg-[#14171D] border border-white/10 relative">
            <CornerMarks />
            <div className="font-display font-black text-3xl sm:text-5xl text-[#EDECE8]">ISO 42001</div>
            <div className="font-mono text-xs uppercase text-[#EDECE8] font-bold mt-1.5 sm:mt-2">GOBERNANZA EN CÓDIGO</div>
            <div className="font-mono text-[10px] sm:text-[11px] text-[#6E7681] mt-1">Guardrails deterministas auditables y normativos.</div>
          </div>
        </div>
      </div>

      {/* Bottom Hazard Stripes Accent */}
      <div className="hazard-stripes-canary h-2.5 sm:h-3 w-full" />
    </section>
  )
}

// ============================================================
// TETRAHEDRAL ARCHITECTURE (THE 4 PILLARS UNDER BLUEPRINT LENS)
// ============================================================

const PILLARS_BLUEPRINT = [
  {
    num: '01',
    code: 'HERM_COMP',
    title: 'HERMENÉUTICA COMPUTACIONAL',
    subtitle: 'Epistemología & Semántica Algorítmica',
    focus: 'Significado vs. Tokens Estadísticos',
    desc: 'Auditoría de significado profundo frente al mero cálculo estadístico probabilístico de palabras contiguas. Superamos las alucinaciones mediante modelos de contexto pragmático y anclaje determinista en bases de conocimiento propietarias.',
    accent: '#0047FF',
    coords: 'X: 10.22 // Y: 44.11',
  },
  {
    num: '02',
    code: 'PHENOM_ADOPT',
    title: 'FENOMENOLOGÍA DE LA ADOPCIÓN',
    subtitle: 'Experiencia Humana & Ergonomía Cognitiva',
    focus: 'Agencia Humana vs. Alienación Algorítmica',
    desc: 'Diagnóstico vivencial y fenomenológico de la relación entre el profesional y el agente de IA. Diseñamos interfaces y dinámicas cognitivas que enriquecen la agencia directiva y el criterio en lugar de adormecerlo.',
    accent: '#FF3B1E',
    coords: 'X: 12.80 // Y: 88.34',
  },
  {
    num: '03',
    code: 'LABOR_DYN',
    title: 'DINÁMICA LABORAL & TALENTO',
    subtitle: 'Economía del Trabajo & Skills Gap',
    focus: 'Habilidades en Depreciación vs. Prima de Criterio',
    desc: 'Monitoreo dinámico de oferta y demanda laboral ante la disrupción algorítmica. Mapeamos habilidades en depreciación frente a la prima de valor emergente: juicio crítico, intuición y orquestación de equipos sintéticos.',
    accent: '#E7FF00',
    coords: 'X: 55.40 // Y: 22.09',
  },
  {
    num: '04',
    code: 'ACT_GOV',
    title: 'GOBERNANZA ACTIVA & RUNTIME SECURITY',
    subtitle: 'Control en Código & Soberanía de Cómputo',
    focus: 'Cortafuegos en Tiempo Real vs. Papel Normativo',
    desc: 'Transición radical del cumplimiento en papel (ISO 42001 meramente declarativo) a cortafuegos de ejecución en tiempo real en código determinista. Aislamiento estricto en GPU local de élite (RTX 5090).',
    accent: '#0047FF',
    coords: 'X: 99.12 // Y: 04.55',
  },
]

function TetrahedralArchitectureSection() {
  return (
    <section id="arquitectura" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-10 sm:mb-14 pb-3 sm:pb-4 border-b border-white/10 font-mono">
        <div>
          <span className="text-[#E7FF00] font-bold text-xs uppercase tracking-widest block mb-1">
            02 // ARQUITECTURA DE INTERVENCIÓN
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#EDECE8]">
            EL ENFOQUE <span className="text-[#0047FF]">TETRAÉDRICO</span>
          </h2>
        </div>
        <div className="text-xs sm:text-sm text-[#6E7681] max-w-md">
          Estructura de 4 dimensiones críticas para una transformación algorítmica sin crisis de control ni alienación humana.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {PILLARS_BLUEPRINT.map((p) => (
          <div
            key={p.num}
            className="card-glass-industrial p-4 sm:p-7 border-blueprint flex flex-col justify-between group hover:border-white/40 transition-colors"
          >
            <CornerMarks />

            <div>
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-3 sm:mb-5 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-xl sm:text-2xl text-[#EDECE8]">{p.num}</span>
                  <span className="text-[#6E7681]">{`// ${p.code}`}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#E7FF00] font-mono">{p.coords}</span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#EDECE8] mb-1 break-words">
                {p.title}
              </h3>

              <div className="font-mono text-xs text-[#0047FF] mb-3 sm:mb-4">
                {p.subtitle}
              </div>

              <div className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 border border-white/10 font-mono text-[10px] sm:text-[11px] text-[#EDECE8] mb-4 sm:mb-5">
                FOCO: <span className="text-[#E7FF00]">{p.focus}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#EDECE8]/80 leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>

            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-xs text-[#6E7681]">
              <span className="truncate">SPEC_STATUS: IMPLEMENTADO_EN_CÓDIGO</span>
              <span className="text-[#EDECE8] font-bold shrink-0">● V4.2</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ============================================================
// HARDWARE & LOCAL COMPUTE SPECS (BENTO GRID)
// ============================================================

function HardwareSpecSection() {
  return (
    <section id="modelos" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-10 sm:mb-14 pb-3 sm:pb-4 border-b border-white/10 font-mono">
        <div>
          <span className="text-[#FF3B1E] font-bold text-xs uppercase tracking-widest block mb-1">
            03 // CÓMPUTO & MODELOS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#EDECE8]">
            ESPECIFICACIONES DE <span className="text-[#E7FF00]">HARDWARE</span>
          </h2>
        </div>
        <div className="text-xs sm:text-sm text-[#6E7681] max-w-md">
          Infraestructura de cómputo local de densidad industrial. Inferencia y afinamiento de modelos fundacionales con soberanía matemática y física absoluta.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto">
        {/* Flagship GPU Box (2 cols) */}
        <div className="md:col-span-2 card-glass-industrial p-4 sm:p-7 flex flex-col justify-between border-blueprint">
          <CornerMarks />
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#6E7681]">
              <span className="text-[#E7FF00] font-bold truncate">ACELERACIÓN DE TENSORS // VRAM MASIVA</span>
              <span className="shrink-0 ml-2">PCIe Gen 5.0 x16</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-4 mt-3 sm:mt-4">
              <h3 className="font-display font-black text-3xl xs:text-4xl sm:text-6xl text-[#EDECE8]">RTX 5090</h3>
              <span className="bg-[#FF3B1E] text-[#EDECE8] px-2 py-0.5 font-mono text-[10px] sm:text-xs font-bold">FLAGSHIP 2025</span>
            </div>
            <p className="text-xs sm:text-sm text-[#EDECE8]/80 mt-2 max-w-xl leading-relaxed">
              Arquitectura de última generación diseñada para inferencia de modelos de más de 70B de parámetros en cuantizaciones de alta precisión sin recurrir a la nube.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-4 border-t border-white/10 font-mono">
            <div className="p-2 sm:p-3 bg-black/40 border border-white/10">
              <div className="text-[9px] sm:text-[10px] text-[#6E7681] truncate">VRAM DEDICADA</div>
              <div className="text-base sm:text-xl font-bold text-[#E7FF00]">32 GB</div>
              <div className="text-[9px] sm:text-[10px] text-[#6E7681]">GDDR7</div>
            </div>
            <div className="p-2 sm:p-3 bg-black/40 border border-white/10">
              <div className="text-[9px] sm:text-[10px] text-[#6E7681] truncate">ANCHO DE BANDA</div>
              <div className="text-base sm:text-xl font-bold text-[#0047FF]">~3,352 GB/s</div>
              <div className="text-[9px] sm:text-[10px] text-[#6E7681]">Ultra-Low Latency</div>
            </div>
            <div className="p-2 sm:p-3 bg-black/40 border border-white/10">
              <div className="text-[9px] sm:text-[10px] text-[#6E7681] truncate">POTENCIA TENSOR</div>
              <div className="text-base sm:text-xl font-bold text-[#FF3B1E]">~92.4</div>
              <div className="text-[9px] sm:text-[10px] text-[#6E7681]">TFLOPS FP16</div>
            </div>
            <div className="p-2 sm:p-3 bg-black/40 border border-white/10">
              <div className="text-[9px] sm:text-[10px] text-[#6E7681] truncate">MODO EJECUCIÓN</div>
              <div className="text-base sm:text-xl font-bold text-[#EDECE8]">LOCAL</div>
              <div className="text-[9px] sm:text-[10px] text-[#6E7681]">Zero Cloud</div>
            </div>
          </div>
        </div>

        {/* System Memory Box */}
        <div className="card-glass-industrial p-4 sm:p-7 flex flex-col justify-between border-blueprint">
          <CornerMarks />
          <div>
            <div className="pb-2 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#6E7681]">
              MEMORIA DE SISTEMA // DDR5
            </div>
            <div className="font-display font-black text-4xl sm:text-6xl text-[#EDECE8] mt-3 sm:mt-4">192 GB</div>
            <div className="font-mono text-xs sm:text-sm text-[#0047FF] font-bold mt-1">DDR5 ULTRA-SPEED</div>
            <p className="text-xs text-[#EDECE8]/70 mt-2 leading-relaxed">
              Permite cargar en RAM completa bases vectoriales gigantescas y modelos masivos antes de su transferencia a VRAM.
            </p>
          </div>
          <div className="font-mono text-[10px] sm:text-[11px] text-[#6E7681] pt-3 border-t border-white/10">
            ECC / REDUNDANCIA ACTIVA
          </div>
        </div>

        {/* CPU Host Processor */}
        <div className="card-glass-industrial p-4 sm:p-7 flex flex-col justify-between border-blueprint">
          <CornerMarks />
          <div>
            <div className="pb-2 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#6E7681]">
              PROCESADOR HOST // x86_64
            </div>
            <div className="font-display font-black text-2xl xs:text-3xl sm:text-4xl text-[#EDECE8] mt-3">RYZEN 9 9950X</div>
            <div className="font-mono text-xs sm:text-sm text-[#FF3B1E] font-bold mt-1">16 NÚCLEOS / 32 HILOS</div>
            <p className="text-xs text-[#EDECE8]/70 mt-2 leading-relaxed">
              Hasta 5.7 GHz boost para preprocesamiento intensivo de embeddings y orquestación de llamadas asíncronas a gran escala.
            </p>
          </div>
          <div className="font-mono text-[10px] sm:text-[11px] text-[#6E7681] pt-3 border-t border-white/10">
            CACHE L3: 64MB // AVX-512
          </div>
        </div>

        {/* NVMe Storage Array (2 cols) */}
        <div className="md:col-span-2 card-glass-industrial p-4 sm:p-7 flex flex-col justify-between border-blueprint">
          <CornerMarks />
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#6E7681]">
              <span className="truncate">ALMACENAMIENTO NVME // CIFRADO EN REPOSO</span>
              <span className="shrink-0 ml-2">PCIe Gen 5.0</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-4 mt-2 sm:mt-3">
              <div className="font-display font-black text-3xl sm:text-5xl text-[#EDECE8]">7 TB</div>
              <span className="font-mono text-xs sm:text-sm text-[#E7FF00]">MATRIZ NVME GEN 5</span>
            </div>
            <p className="text-xs text-[#EDECE8]/70 mt-1 max-w-xl leading-relaxed">
              Tasas de transferencia sostenidas de hasta 14,000 MB/s para carga instantánea de checkpoints de modelos (.safetensors) y colecciones vectoriales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10 font-mono text-xs">
            <div className="p-2 sm:p-2.5 bg-black/40 border border-white/10">
              <div className="text-[9px] sm:text-[10px] text-[#6E7681]">CIFRADO</div>
              <div className="text-xs sm:text-sm font-bold text-[#EDECE8]">AES-XTS 256</div>
            </div>
            <div className="p-2 sm:p-2.5 bg-black/40 border border-white/10">
              <div className="text-[9px] sm:text-[10px] text-[#6E7681]">LECTURA SEC</div>
              <div className="text-xs sm:text-sm font-bold text-[#0047FF]">14,000 MB/s</div>
            </div>
            <div className="p-2 sm:p-2.5 bg-black/40 border border-white/10">
              <div className="text-[9px] sm:text-[10px] text-[#6E7681]">MODELOS ACTIVOS</div>
              <div className="text-xs sm:text-sm font-bold text-[#E7FF00]">LLaMA 3.3 · Mistral</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// BLUEPRINT PORTFOLIO / CASOS EN PRODUCCIÓN (PRESERVING URLS & IMAGES)
// ============================================================

interface ProjectSpec {
  id: string
  title: string
  subtitle: string
  category: string
  url: string
  displayUrl: string
  previewImage: string
  brandAsset: string
  badge: string
  tags: string
  description: string
  metrics: { label: string; value: string }[]
  ctaText: string
}

const PORTFOLIO_PROJECTS: ProjectSpec[] = [
  {
    id: 'paz-ortega',
    title: 'Paz Ortega IA Legal',
    subtitle: 'Plataforma Legal Tech & Asistente Autónomo',
    category: 'SISTEMA LEGAL TECH // AGENTE AUTÓNOMO EN PRODUCCIÓN',
    url: 'https://paz-ortega-ia-legal.web.app/',
    displayUrl: 'paz-ortega-ia-legal.web.app',
    previewImage: '/portfolio/paz-ortega-preview.png',
    brandAsset: '/portfolio/paz-ortega-avatar.png',
    badge: '● SYS_DEPLOYED: LIVE',
    tags: '[LEGAL_TECH] [AGENTE_IA_AUTÓNOMO] [ISO_42001] [EU_AI_ACT] [RAG_PRIVADO]',
    description: 'Plataforma empresarial de gobernanza en IA que traduce marcos normativos complejos a código operativo determinista. Integra a "Paz", una agente de IA interactiva entrenada con jurisprudencia y directivas regulatorias para asistir en tiempo real a corporaciones sin fuga de datos.',
    metrics: [
      { label: 'ARQUITECTURA', value: 'RAG DETERMINISTA' },
      { label: 'CUMPLIMIENTO', value: 'ISO/IEC 42001' },
      { label: 'ENTORNO', value: 'PRODUCCIÓN ACTIVA' },
    ],
    ctaText: 'ABRIR_PLATAFORMA_WEB ↗',
  },
  {
    id: 'el-escuchante',
    title: 'El Escuchante',
    subtitle: 'Escucha Filosófica & Acompañamiento',
    category: 'DISEÑO EDITORIAL DE ALTA GAMA // ALGORITMO DE SENTIDO',
    url: 'https://www.elescuchante.com/',
    displayUrl: 'www.elescuchante.com',
    previewImage: '/portfolio/elescuchante-preview.png',
    brandAsset: '/portfolio/elescuchante-logo.png',
    badge: '● SYS_DEPLOYED: LIVE',
    tags: '[DISEÑO_WEB] [BRANDING] [ALGORITMO_DE_ESCUCHA] [NEXT_JS] [CONVERSIÓN]',
    description: 'Sitio web oficial y plataforma de acompañamiento reflexivo y filosófico. Arquitectura editorial minimalista de alta gama, tipografía interactiva, instrumento de auto-exploración basado en algoritmos de escucha, planes de suscripción y agendamiento conversacional directo.',
    metrics: [
      { label: 'ARQUITECTURA WEB', value: 'NEXT.JS + TAILWIND' },
      { label: 'IDENTIDAD VISUAL', value: 'DISEÑO EDITORIAL PRO' },
      { label: 'CONVERSIÓN', value: 'FUNNEL INTEGRADO 24/7' },
    ],
    ctaText: 'EXPLORAR_SITIO_WEB ↗',
  },
]

function BlueprintPortfolioSection() {
  return (
    <section id="casos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-4 border-b border-white/10 font-mono">
        <div>
          <span className="text-[#0047FF] font-bold text-xs uppercase tracking-widest block mb-1">
            04 // DESPLIEGUES EN PRODUCCIÓN
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#EDECE8]">
            SISTEMAS <span className="text-[#FF3B1E]">VIVOS</span>
          </h2>
        </div>
        <div className="text-xs text-[#6E7681] max-w-md">
          Código en producción, arquitecturas desplegadas y plataformas de IA activas desarrolladas con nuestra metodología de ingeniería de precisión.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {PORTFOLIO_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="card-glass-industrial border-blueprint flex flex-col justify-between overflow-hidden group hover:border-white/30 transition-colors"
          >
            <CornerMarks />

            {/* Industrial HUD Bar */}
            <div className="p-3 sm:p-3.5 bg-black/80 border-b border-white/10 flex items-center justify-between font-mono text-xs gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="w-2 h-2 bg-[#FF3B1E] shrink-0" />
                <span className="w-2 h-2 bg-[#E7FF00] shrink-0" />
                <span className="w-2 h-2 bg-[#0047FF] shrink-0" />
                <span className="text-[#EDECE8] font-bold ml-1 sm:ml-2 truncate text-xs">{proj.title}</span>
              </div>
              <div className="shrink-0">
                <span className="px-1.5 sm:px-2 py-0.5 bg-[#E7FF00]/10 border border-[#E7FF00]/40 text-[#E7FF00] text-[9px] sm:text-[10px] font-bold">
                  {proj.badge}
                </span>
              </div>
            </div>

            {/* Screenshot Frame with Blueprint Crosshairs */}
            <div className="relative w-full h-52 sm:h-72 overflow-hidden border-b border-white/10 bg-black/60">
              <Image
                src={proj.previewImage}
                alt={`Captura del proyecto ${proj.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1013] via-transparent to-transparent opacity-80" />

              {/* Floating Blueprint Brand Badge */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-4 flex items-center gap-2 sm:gap-3 bg-[#0E1013]/90 border border-white/20 px-2 sm:px-3 py-1.5 sm:py-2 max-w-[75%] sm:max-w-none">
                <div className="w-7 h-7 sm:w-8 sm:h-8 relative bg-white/10 p-1 border border-white/15 shrink-0">
                  <Image
                    src={proj.brandAsset}
                    alt={`${proj.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="font-mono min-w-0">
                  <span className="block text-[11px] sm:text-xs font-bold text-[#EDECE8] truncate">{proj.title}</span>
                  <span className="block text-[9px] sm:text-[10px] text-[#6E7681] truncate">{proj.subtitle}</span>
                </div>
              </div>

              {/* Top Right Quick Open Link */}
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 font-mono text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 bg-black/80 border border-white/20 text-[#EDECE8] hover:border-[#E7FF00] hover:text-[#E7FF00] no-underline"
              >
                ABRIR ↗
              </a>
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-7 flex flex-col flex-1 justify-between gap-4 sm:gap-5">
              <div>
                <div className="font-mono text-[10px] sm:text-[11px] text-[#0047FF] font-bold uppercase mb-1.5 sm:mb-2 truncate">
                  {proj.category}
                </div>
                <p className="text-xs sm:text-sm text-[#EDECE8]/80 leading-relaxed mb-3 sm:mb-4">
                  {proj.description}
                </p>
                <div className="font-mono text-[10px] sm:text-[11px] text-[#6E7681]">
                  {proj.tags}
                </div>
              </div>

              {/* Technical Metrics */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10 font-mono text-xs">
                {proj.metrics.map((m) => (
                  <div key={m.label} className="p-1.5 sm:p-2 bg-black/40 border border-white/10">
                    <div className="text-[8px] sm:text-[9px] text-[#6E7681] uppercase truncate">{m.label}</div>
                    <div className="text-[10px] sm:text-xs font-bold text-[#EDECE8] mt-0.5 truncate">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Brutalist Direct Action Button */}
              <div className="pt-2">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutalist-red w-full text-center justify-center"
                >
                  {proj.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Available Deployment Slot Card */}
      <div className="card-glass-industrial p-4 sm:p-8 border-2 border-dashed border-white/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 bg-black/40">
        <CornerMarks />
        <div className="space-y-2 text-left">
          <div className="font-mono text-[10px] sm:text-xs text-[#E7FF00] font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E7FF00] animate-pulse shrink-0" />
            <span className="truncate">SLOT_DISPONIBLE // ARQUITECTURA_A_LA_MEDIDA</span>
          </div>
          <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#EDECE8] break-words">
            ¿SU ORGANIZACIÓN SERÁ NUESTRO PRÓXIMO CASO DE ESTUDIO?
          </h3>
          <p className="text-xs sm:text-sm text-[#EDECE8]/75 max-w-2xl leading-relaxed">
            Diseñamos plataformas y redes de agentes autónomos a la medida exacta de sus flujos operativos y regulatorios. Resultados auditables, soberanía de datos y código en producción.
          </p>
        </div>
        <a
          href="https://wa.me/5731086688648?text=Hola%20Soluciones%20de%20IA,%20deseo%20iniciar%20un%20proyecto%20de%20IA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-brutalist-canary shrink-0 w-full md:w-auto text-center justify-center"
        >
          INICIAR_PROYECTO [WA ↗]
        </a>
      </div>
    </section>
  )
}

// ============================================================
// RESEARCH LAB & SUBSTACK SECTION (RUNTIME GOVERNANCE DIGEST)
// ============================================================

function BlueprintDigestSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    window.open(`https://runtimegovernance.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="digest" className="py-16 sm:py-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-10 sm:mb-14 pb-3 sm:pb-4 border-b border-white/10 font-mono">
        <div>
          <span className="text-[#E7FF00] font-bold text-xs uppercase tracking-widest block mb-1">
            05 // LAB DE INVESTIGACIÓN
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#EDECE8]">
            RUNTIME GOVERNANCE <span className="text-[#0047FF]">DIGEST</span>
          </h2>
        </div>
        <div className="text-xs sm:text-sm text-[#6E7681] max-w-md">
          Ensayos semanales, análisis técnicos y tesis epistemológicas sobre el impacto real de los algoritmos en la alta dirección.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Featured Essay (8 cols) */}
        <div className="lg:col-span-8 card-glass-industrial p-4 sm:p-8 md:p-10 flex flex-col justify-between border-blueprint group">
          <CornerMarks />
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-white/10 font-mono text-[10px] sm:text-xs">
              <span className="px-2 py-0.5 bg-[#E7FF00]/10 border border-[#E7FF00]/40 text-[#E7FF00] font-bold">
                ENSAYO DESTACADO // EDICIÓN RECIENTE
              </span>
              <span className="text-[#6E7681]">LECTURA: 8 MIN // RESEARCH LAB</span>
            </div>

            <h3 className="font-display font-black text-xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#EDECE8] mb-3 sm:mb-4 leading-snug sm:leading-tight group-hover:text-[#E7FF00] transition-colors break-words">
              «LA TRAMPA DEL COMPLIANCE EN PAPEL: POR QUÉ UNA CERTIFICACIÓN ISO 42001 NO EVITA QUE TU IA COLAPSE»
            </h3>

            <div className="font-mono text-[10px] sm:text-xs text-[#0047FF] mb-4 sm:mb-6 flex flex-wrap gap-1">
              <span>[ISO_42001]</span> <span>[RUNTIME_SECURITY]</span> <span>[EPISTEMOLOGÍA]</span> <span>[SOBERANÍA_LOCAL]</span>
            </div>

            <p className="text-xs sm:text-base text-[#EDECE8]/80 leading-relaxed mb-4 sm:mb-6 font-normal">
              Tener archivadores repletos de políticas redactadas por despachos legales y sellos de certificación no detiene una inyección de prompt ni una alucinación crítica en un proceso decisional. Desglosamos por qué la verdadera gobernanza de IA no vive en documentos PDF, sino en cortafuegos deterministas de runtime, control en código y soberanía física de la GPU.
            </p>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="font-mono text-[10px] sm:text-xs truncate">
              <span className="text-[#6E7681] block">PUBLICACIÓN:</span>
              <span className="text-[#EDECE8] font-bold">runtimegovernance.substack.com</span>
            </div>
            <a
              href="https://runtimegovernance.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutalist-canary w-full sm:w-auto text-center justify-center"
            >
              LEER_EN_SUBSTACK ↗
            </a>
          </div>
        </div>

        {/* Direct Subscribe Module (4 cols) */}
        <div className="lg:col-span-4 card-glass-industrial p-4 sm:p-7 flex flex-col justify-between border-blueprint bg-black/60">
          <CornerMarks />
          <div>
            <div className="pb-2.5 sm:pb-3 mb-4 sm:mb-6 border-b border-white/10 font-mono text-[10px] sm:text-xs text-[#6E7681]">
              SUSCRIPCIÓN_DIRECTA // BOLETÍN EJECUTIVO
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/10 flex items-center justify-center mb-3 sm:mb-4">
              <PixelTerminalIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#E7FF00]" />
            </div>
            <h4 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-[#EDECE8] mb-2">
              RECIBIR EL DIGEST SEMANAL
            </h4>
            <p className="text-xs text-[#EDECE8]/70 leading-relaxed mb-4 sm:mb-6">
              Análisis quincenales de arquitectura algorítmica, marcos normativos y desgloses de infraestructura directamente en su bandeja de entrada. Cero spam de marketing.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <label htmlFor="digest-email" className="sr-only">Correo corporativo</label>
                <input
                  id="digest-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="su.correo@empresa.com"
                  className="w-full px-3 py-2 sm:py-2.5 bg-black border border-white/20 text-[#EDECE8] placeholder-white/30 font-mono text-xs focus:outline-none focus:border-[#E7FF00] rounded-none"
                />
              </div>
              <button
                type="submit"
                className="btn-brutalist-canary w-full !py-2.5 text-xs text-center justify-center"
              >
                {submitted ? 'REDIRECCIONANDO A SUBSTACK...' : 'SUSCRIBIRME_AL_LAB ↗'}
              </button>
            </form>
          </div>

          <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 font-mono text-[10px] sm:text-[11px] text-[#6E7681]">
            🔒 ACCESO LIBRE PARA DIRECTORES Y REGULADORES
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// TECHNICAL PODCAST BANNER (SINTAXIS & SENTIDO)
// ============================================================

function TechnicalPodcastSection() {
  return (
    <section id="podcast" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="card-glass-industrial p-4 sm:p-8 md:p-12 border-blueprint bg-[#14171D]/90 relative overflow-hidden">
        <CornerMarks />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Podcast Info (8 cols) */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs">
              <span className="px-2 py-0.5 bg-[#0047FF]/20 border border-[#0047FF] text-[#0047FF] font-bold">
                EMISIÓN SEMANAL // AUDIO LAB
              </span>
              <span className="text-[#6E7681]">FORMATO: EPISODIOS DE 10 MINUTOS</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#EDECE8] leading-tight break-words">
              SINTAXIS &amp; SENTIDO: <span className="text-[#FF3B1E]">EL PODCAST SEMANAL</span>
            </h3>

            <p className="text-xs sm:text-base text-[#EDECE8]/80 leading-relaxed max-w-2xl">
              Episodios ejecutivos de 10 minutos analizando el cruce entre hermenéutica, mercado de trabajo y gobernanza de algoritmos. Sin rodeos técnicos innecesarios ni marketing superficial: análisis crítico para directores y estrategas.
            </p>

            {/* Episode Pill Tags */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-2 pt-2 font-mono text-[10px] sm:text-xs">
              <span className="px-2.5 sm:px-3 py-1 bg-black/60 border border-white/10 text-[#EDECE8] break-words">
                EP 01: LA MUERTE DEL PROMPT Y EL RENACER DEL CRITERIO
              </span>
              <span className="px-2.5 sm:px-3 py-1 bg-black/60 border border-white/10 text-[#EDECE8] break-words">
                EP 02: ¿QUIÉN RESPONDE CUANDO EL AGENTE DELINQUE?
              </span>
              <span className="px-2.5 sm:px-3 py-1 bg-black/60 border border-white/10 text-[#EDECE8] break-words">
                EP 03: SOBERANÍA DE GPU VS. NUBE RENTADA
              </span>
            </div>
          </div>

          {/* Pixel Art Visualizer & Spotify Action (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3 sm:gap-4 w-full">
            {/* Pixelated Equalizer Bars */}
            <div className="flex items-end gap-1.5 h-8 sm:h-10 p-2 bg-black/60 border border-white/10">
              {[4, 10, 6, 12, 8, 14, 5, 11, 7, 13, 9, 6].map((bar, i) => (
                <div
                  key={i}
                  className="w-1 sm:w-1.5 bg-[#E7FF00]"
                  style={{
                    height: `${(bar / 14) * 100}%`,
                    animation: `pulse ${(i % 3) * 0.4 + 0.8}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>

            {/* Spotify for Creators Button */}
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutalist-red !bg-[#1DB954] !text-black hover:!text-black flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.218.358-.684.47-1.042.253-2.855-1.745-6.448-2.14-10.68-1.173-.41.094-.82-.16-.913-.57-.094-.41.16-.82.57-.913 4.63-1.056 8.604-.61 11.812 1.36.358.217.47.684.253 1.043zm1.464-3.26c-.274.444-.86.587-1.303.313-3.27-2.01-8.254-2.593-12.122-1.417-.5.152-1.03-.134-1.182-.635-.152-.5.134-1.03.635-1.182 4.417-1.34 9.91-.69 13.66 1.618.443.274.586.86.312 1.303zm.126-3.41c-3.92-2.327-10.38-2.542-14.126-1.405-.6.183-1.237-.16-1.42-.76-.182-.6.16-1.237.76-1.42 4.305-1.306 11.43-1.054 15.94 1.624.54.32.716 1.02.395 1.56-.32.54-1.02.716-1.56.395z"/>
              </svg>
              <span>SPOTIFY_FOR_CREATORS ↗</span>
            </a>

            <span className="font-mono text-[9px] sm:text-[10px] text-[#6E7681]">
              DISTRIBUCIÓN EN TODAS LAS PLATAFORMAS DE AUDIO
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// FOOTER AS INDUSTRIAL SPECIFICATION MACHINE PLATE
// ============================================================

function IndustrialSpecificationFooter() {
  return (
    <footer id="contacto" className="border-t-2 border-white/20 bg-[#0E1013] text-[#6E7681] font-mono text-xs">
      {/* Top Specification Banner */}
      <div className="hazard-stripes h-2 w-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Main Machine Specification Plate */}
        <div className="border border-white/20 p-4 sm:p-8 bg-[#14171D] relative mb-8 sm:mb-12">
          <CornerMarks />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Col 1: System Ident */}
            <div className="space-y-2 sm:space-y-3 md:pr-6">
              <div className="text-[#EDECE8] font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2">
                <PixelCoreIcon className="w-4 h-4 text-[#E7FF00] shrink-0" />
                SOLUCIONES DE IA
              </div>
              <p className="text-[11px] sm:text-xs text-[#6E7681] leading-relaxed">
                Consultoría de alta dirección y laboratorio de arquitectura en Inteligencia Artificial. Gobernanza activa, epistemología computacional y cómputo soberano en premisa.
              </p>
              <div className="pt-1 sm:pt-2 text-[10px] sm:text-[11px] text-[#0047FF]">
                [SPEC_RATING: CLASE_A // APPLIED THINK TANK]
              </div>
            </div>

            {/* Col 2: Machine Metrics */}
            <div className="space-y-2 pt-4 md:pt-0 md:px-6">
              <div className="text-[#EDECE8] font-bold uppercase text-[11px] sm:text-xs">ESPECIFICACIONES DEL RACK</div>
              <div className="text-[10px] sm:text-[11px] space-y-1">
                <div className="flex justify-between">
                  <span>GPU_UNIT:</span>
                  <span className="text-[#EDECE8]">RTX 5090 32GB</span>
                </div>
                <div className="flex justify-between">
                  <span>HOST_CPU:</span>
                  <span className="text-[#EDECE8]">Ryzen 9 9950X</span>
                </div>
                <div className="flex justify-between">
                  <span>RAM_ARRAY:</span>
                  <span className="text-[#EDECE8]">192 GB DDR5</span>
                </div>
                <div className="flex justify-between">
                  <span>NVME_STORAGE:</span>
                  <span className="text-[#EDECE8]">7 TB Gen 5</span>
                </div>
                <div className="flex justify-between">
                  <span>TELEMETRÍA:</span>
                  <span className="text-[#E7FF00]">0% CLOUD LEAK</span>
                </div>
              </div>
            </div>

            {/* Col 3: Direct Telecommunication */}
            <div className="space-y-2 pt-4 md:pt-0 md:px-6">
              <div className="text-[#EDECE8] font-bold uppercase text-[11px] sm:text-xs">LÍNEAS DE ENLACE DIRECTO</div>
              <div className="text-[10px] sm:text-[11px] space-y-1.5">
                <div>
                  <span className="text-[#6E7681] block">CORREO DIRECTIVO:</span>
                  <a href="mailto:ssolucionesdeia@gmail.com" className="text-[#EDECE8] hover:text-[#E7FF00] no-underline truncate block">
                    ssolucionesdeia@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-[#6E7681] block">CANAL WHATSAPP:</span>
                  <a href="https://wa.me/5731086688648" target="_blank" rel="noopener noreferrer" className="text-[#EDECE8] hover:text-[#E7FF00] no-underline">
                    +57 310 866 8648 ↗
                  </a>
                </div>
                <div>
                  <span className="text-[#6E7681] block">CONSULTOR PRINCIPAL:</span>
                  <a href="https://www.linkedin.com/in/corvattaconsultor" target="_blank" rel="noopener noreferrer" className="text-[#EDECE8] hover:text-[#E7FF00] no-underline">
                    @corvattaconsultor ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4: Network Repositories */}
            <div className="space-y-2 pt-4 md:pt-0 md:pl-6">
              <div className="text-[#EDECE8] font-bold uppercase text-[11px] sm:text-xs">REDES &amp; PUBLICACIONES</div>
              <div className="flex flex-col gap-1.5 sm:gap-2 text-[10px] sm:text-[11px]">
                <a
                  href="https://runtimegovernance.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E7FF00] hover:underline no-underline"
                >
                  &gt; SUBSTACK // RESEARCH LAB ↗
                </a>
                <a
                  href="https://github.com/agencypazia-prog/SOLUCIONES-DE-IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDECE8] hover:underline no-underline"
                >
                  &gt; GITHUB // REPOSITORIO ↗
                </a>
                <a
                  href="https://www.tiktok.com/@soluciones.de.ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E7681] hover:text-[#EDECE8] no-underline"
                >
                  &gt; TIKTOK // CRITERIO RÁPIDO ↗
                </a>
                <a
                  href="https://instagram.com/SOLUCIONES_DEIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E7681] hover:text-[#EDECE8] no-underline"
                >
                  &gt; INSTAGRAM // COMUNICADOS ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: License, Hashes & Metadata */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] sm:text-[11px] pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span>© 2026 SOLUCIONES DE IA. TODOS LOS DERECHOS RESERVADOS.</span>
            <span className="text-[#6E7681] hidden sm:inline">|</span>
            <span className="text-[#E7FF00]">SOBERANÍA LOCAL-FIRST</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#6E7681]">
            <span>BUILD_ID: 0x72E9CF6_V4.2</span>
            <span>STACK: NEXTJS_16 // TURBOPACK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================================
// BRUTALIST FLOATING WHATSAPP ACTION BADGE
// ============================================================

function BrutalistWhatsAppFloatingBadge() {
  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40">
      <a
        href="https://wa.me/5731086688648?text=Hola%20Soluciones%20de%20IA,%20deseo%20iniciar%20un%20proyecto%20de%20IA"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#0E1013]/95 backdrop-blur-md border-2 border-[#25D366] text-[#EDECE8] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#25D366] sm:shadow-[4px_4px_0px_#25D366] hover:bg-[#25D366] hover:text-black hover:shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all no-underline"
      >
        <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 group-hover:bg-black" />
          <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#25D366] group-hover:bg-black" />
        </span>
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="hidden xs:inline">WHATSAPP // DIRECTO</span>
        <span className="xs:hidden">WHATSAPP</span>
      </a>
    </aside>
  )
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    })
    let frame: number
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      lenis.destroy()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <main className="relative bg-[#0E1013] text-[#EDECE8] min-h-screen">
      {/* Inline SVG Noise Filter for Risography Grain Texture */}
      <svg className="hidden">
        <filter id="risoGrainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div
        className="riso-noise-overlay"
        style={{ filter: 'url(#risoGrainFilter)' }}
      />

      {/* Brutalist Magnetic Cursor */}
      <BrutalistCursor />

      {/* Persistent Floating Brutalist WhatsApp Badge */}
      <BrutalistWhatsAppFloatingBadge />

      {/* Technical HUD Navigation */}
      <TechnicalHUD />

      {/* Suprematist Asymmetric Hero */}
      <SuprematistHero />

      {/* Continuous Kinetic Ticker */}
      <KineticTicker />

      {/* Blueprint Solutions Grid */}
      <BlueprintSolutionsGrid />

      {/* Urban Raw Manifesto & Metrics */}
      <UrbanManifestoSection />

      {/* Tetrahedral Architecture (4 Pillars) */}
      <TetrahedralArchitectureSection />

      {/* Hardware & Local Compute Specs */}
      <HardwareSpecSection />

      {/* Blueprint Portfolio (Production Deployments) */}
      <BlueprintPortfolioSection />

      {/* Research Lab (Substack Digest) */}
      <BlueprintDigestSection />

      {/* Technical Podcast Section */}
      <TechnicalPodcastSection />

      {/* Industrial Specification Footer */}
      <IndustrialSpecificationFooter />
    </main>
  )
}
