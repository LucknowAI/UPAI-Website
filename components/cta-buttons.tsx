import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Button asChild size="lg" className="rounded-full">
        <Link href="/join">Join</Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="rounded-full gap-2">
        <Link href="/contact">
          <Phone className="h-4 w-4" />
          <span>Contact Us</span>
        </Link>
      </Button>
    </div>
  )
}

