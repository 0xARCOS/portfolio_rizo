import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'ghost' | 'white'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-volt text-void font-bold hover:bg-volt-dim transition-colors rounded-sm px-6 py-3 text-sm font-sans',
  ghost:   'border border-volt text-volt hover:bg-volt hover:text-void transition-colors rounded-sm px-3 py-1.5 text-xs font-mono',
  white:   'border border-white text-white hover:bg-white hover:text-void transition-colors rounded-sm px-3 py-1.5 text-xs font-mono',
}

export default function Button({ variant = 'primary', href, className, children, type = 'button', onClick }: ButtonProps) {
  const classes = cn(variants[variant], 'inline-block cursor-pointer', className)

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
