import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export function EmptyState({
  icon: Icon,
  title,
  children,
  action,
}: {
  icon: LucideIcon
  title: string
  children: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-xs animate-pop-in flex-col items-center py-12 text-center">
      <div className="relative grid size-28 place-items-center rounded-full bg-strawberry-soft">
        <span className="absolute -right-1 top-3 size-5 rounded-full bg-pistachio" aria-hidden />
        <span className="absolute -left-2 bottom-5 size-3.5 rounded-full bg-mango" aria-hidden />
        <span className="absolute right-3 -bottom-1 size-3 rounded-full bg-blueberry" aria-hidden />
        <Icon className="size-12 text-raspberry" strokeWidth={1.6} aria-hidden />
      </div>
      <h2 className="mt-6 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{children}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
