import { createFileRoute } from '@tanstack/react-router'
import Card1 from "@/components/landing/card1"
export const Route = createFileRoute('/landing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div className="min-h-screen">
      <Card1/>
    </div>
  )
}
