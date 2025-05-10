import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <Image src="/logo.svg" alt="UPAI Logo" fill className="object-contain" priority />
      </div>
      <span className="text-xl font-semibold">AI Tamil Nadu</span>
    </Link>
  )
}

