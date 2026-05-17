type ClientBadgeProps = {
  label: string
  bgColor: string
  textColor: string
}

export default function ClientBadge({ label, bgColor, textColor }: ClientBadgeProps) {
  return (
    <span className={`inline-block ${bgColor} ${textColor} text-label font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-sm`}>
      {label}
    </span>
  )
}
